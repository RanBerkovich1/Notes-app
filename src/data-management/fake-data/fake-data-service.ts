import { Note, StorageService } from '../types';

export class FakeDataService implements StorageService {
    private notes: Note[] = [];

    constructor(notes: Partial<Note>[]) {
        const date = new Date();
        notes.forEach((newNote, index) => {
            const note: Note = {
                id: (Date.now() + index).toString(),
                title: `Note ${index}`,
                description: '',
                createdAt: date,
                modifiedAt: date,
                isPinned: false,
                ...newNote,
            };
            this.notes.push(note);
        });
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
            this.notes = [...this.notes, note];
            resolve(note);
        });
    }

    async updateNote(
        id: string,
        updateNote: Partial<Pick<Note, 'title' | 'description' | 'isPinned' | 'deletedAt'>>
    ): Promise<Note> {
        return new Promise((resolve, reject) => {
            const notes = [...this.notes];
            const noteIndex = notes.findIndex((note) => note.id === id);
            if (noteIndex !== -1) {
                const modifiedNote = {
                    ...this.notes[noteIndex],
                    ...updateNote,
                    modifiedAt: new Date(),
                };
                notes[noteIndex] = modifiedNote;
                this.notes = notes;
                resolve(modifiedNote);
            } else {
                reject(`No such a note to update. Id: ${id}`);
            }
        });
    }

    async deleteNote(id: string, permanently = false): Promise<void> {
        return new Promise((resolve, reject) => {
            let notes = [...this.notes];
            if (permanently) {
                notes = notes.filter((item) => item.id !== id);
            } else {
                const noteIndex = notes.findIndex((note) => note.id === id);
                if (noteIndex !== -1) {
                    notes[noteIndex].deletedAt = new Date();
                } else {
                    reject(`No such a note to move to trash. Id: ${id}`);
                }
            }
            this.notes = notes;
            resolve();
        });
    }
}
