import { Note, StorageService } from '../types';

const STORAGE_NOTES_KEY = 'notes';

export class LocalStorageService implements StorageService {
    async getAllNotes(): Promise<Note[]> {
        return new Promise((resolve) => {
            const notesData = localStorage.getItem(STORAGE_NOTES_KEY);
            resolve(notesData ? JSON.parse(notesData) : []);
        });
    }

    async getNoteById(id: string): Promise<Note | undefined> {
        const notes = await this.getAllNotes();
        return new Promise((resolve, reject) => {
            const note = notes.find((note) => note.id === id);
            if (note) {
                resolve(note);
            } else {
                reject(`No such a note in the storage. Id: ${id}`);
            }
        });
    }

    async addNote(newNote: Pick<Note, 'title' | 'description'>): Promise<Note> {
        const notes = await this.getAllNotes();
        return new Promise((resolve) => {
            const createdAt = new Date();
            const note: Note = {
                id: Date.now().toString(),
                createdAt,
                modifiedAt: createdAt,
                isPinned: false,
                ...newNote,
            };
            notes.push(note);
            localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(notes));
            resolve(note);
        });
    }

    async updateNote(
        id: string,
        updateNote: Partial<Pick<Note, 'title' | 'description' | 'isPinned' | 'deletedAt'>>
    ): Promise<Note> {
        const notes = await this.getAllNotes();
        return new Promise((resolve, reject) => {
            const noteIndex = notes.findIndex((note) => note.id === id);
            if (noteIndex !== -1) {
                const modifiedNote = { ...notes[noteIndex], ...updateNote, modifiedAt: new Date() };
                notes[noteIndex] = modifiedNote;
                localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(notes));
                resolve(modifiedNote);
            } else {
                reject(`No such a note to update. Id: ${id}`);
            }
        });
    }

    async deleteNote(id: string, permanently = false): Promise<void> {
        let notes = await this.getAllNotes();
        return new Promise((resolve, reject) => {
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
            localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(notes));
            resolve();
        });
    }
}
