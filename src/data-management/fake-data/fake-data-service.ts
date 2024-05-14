import { Note, StorageService } from '../types';

export class FakeDataService implements StorageService {
    private notes: Note[];

    constructor() {
        this.notes = [];
        const date = new Date();
        for (let i = 0; i < 3; i++) {
            const note: Note = {
                id: (Date.now() + i).toString(),
                title: `Note ${i}`,
                description: 'Lorem Ipsum Dolor Sit Amet',
                createdAt: date,
                modifiedAt: date,
                isPinned: false,
            };
            this.notes.push(note);
        }
    }

    async getAllNotes(): Promise<Note[]> {
        return new Promise((resolve) => {
            resolve(this.notes);
        });
    }

    async getNoteById(id: string): Promise<Note | undefined> {
        return new Promise((resolve, reject) => {
            const note = this.notes.find((note) => note.id === id);
            if (note) {
                resolve(note);
            } else {
                reject(`No such a note in the storage. Id: ${id}`);
            }
        });
    }

    async addNote(newNote: Pick<Note, 'title' | 'description'>): Promise<Note> {
        return new Promise((resolve) => {
            const createdAt = new Date();
            const note: Note = {
                id: Date.now().toString(),
                createdAt,
                modifiedAt: createdAt,
                isPinned: false,
                ...newNote,
            };
            this.notes.push(note);
            resolve(note);
        });
    }

    async updateNote(
        id: string,
        updateNote: Partial<Pick<Note, 'title' | 'description' | 'isPinned' | 'deletedAt'>>
    ): Promise<Note> {
        return new Promise((resolve, reject) => {
            const noteIndex = this.notes.findIndex((note) => note.id === id);
            if (noteIndex !== -1) {
                const modifiedNote = {
                    ...this.notes[noteIndex],
                    ...updateNote,
                    modifiedAt: new Date(),
                };
                this.notes[noteIndex] = modifiedNote;
                resolve(modifiedNote);
            } else {
                reject(`No such a note to update. Id: ${id}`);
            }
        });
    }

    async deleteNote(id: string, permanently = false): Promise<void> {
        return new Promise((resolve, reject) => {
            if (permanently) {
                this.notes = this.notes.filter((item) => item.id !== id);
            } else {
                const noteIndex = this.notes.findIndex((note) => note.id === id);
                if (noteIndex !== -1) {
                    this.notes[noteIndex].deletedAt = new Date();
                } else {
                    reject(`No such a note to move to trash. Id: ${id}`);
                }
            }
            resolve();
        });
    }
}
