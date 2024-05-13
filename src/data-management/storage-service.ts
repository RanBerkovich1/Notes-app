import { Note } from './types';

const STORAGE_NOTES_KEY = 'notes';

export class StorageService {
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
                reject('No such an note in the storage');
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
        updatedNote: Partial<Pick<Note, 'title' | 'description' | 'isPinned' | 'deletedAt'>>
    ): Promise<Note> {
        const notes = await this.getAllNotes();
        const noteIndex = notes.findIndex((note) => note.id === id);
        if (noteIndex !== -1) {
            const modifiedNote = { ...notes[noteIndex], ...updatedNote, modifiedAt: new Date() };
            notes[noteIndex] = modifiedNote;
            localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(notes));
            return modifiedNote;
        } else {
            throw new Error(`No such a note to update. Id: ${id}`);
        }
    }

    async deleteNote(id: string, permanently = false): Promise<void> {
        let notes = await this.getAllNotes();
        if (permanently) {
            notes = notes.filter((item) => item.id !== id);
            console.log(notes);
        } else {
            const noteIndex = notes.findIndex((note) => note.id === id);
            if (noteIndex !== -1) {
                notes[noteIndex].deletedAt = new Date();
            } else {
                throw new Error(`No such a note to move to trash. Id: ${id}`);
            }
        }
        localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(notes));
    }
}
