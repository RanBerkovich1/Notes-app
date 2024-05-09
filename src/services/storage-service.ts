import { Note } from '../types';

export class StorageService {
    private readonly STORAGE_KEY_PREFIX = 'note_';

    private getKey(id: string): string {
        return this.STORAGE_KEY_PREFIX + id;
    }

    getAllNotes(): Note[] {
        const notes: Note[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(this.STORAGE_KEY_PREFIX)) {
                const noteData = localStorage.getItem(key);
                if (noteData) {
                    const note = JSON.parse(noteData) as Note;
                    notes.push(note);
                }
            }
        }
        return notes;
    }

    getNoteById(id: string): Note | undefined {
        const noteData = localStorage.getItem(this.getKey(id));
        if (noteData) {
            return JSON.parse(noteData) as Note;
        }
        return undefined;
    }

    addNote(newNote: Omit<Note, 'id' | 'createdDate' | 'modifiedDate'>): void {
        const id = Date.now().toString();
        const createdDate = new Date();
        const modifiedDate = createdDate;
        const note: Note = { id, createdDate, modifiedDate, ...newNote };
        localStorage.setItem(this.getKey(id), JSON.stringify(note));
    }

    editNote(
        id: string,
        updatedNote: Partial<Omit<Note, 'id' | 'createdDate' | 'modifiedDate'>>
    ): void {
        const existingNote = this.getNoteById(id);
        if (existingNote) {
            const modifiedNote = { ...existingNote, ...updatedNote, modifiedDate: new Date() };
            localStorage.setItem(this.getKey(id), JSON.stringify(modifiedNote));
        }
    }

    deleteNote(id: string, completely: boolean = false): void {
        if (completely) {
            localStorage.removeItem(this.getKey(id));
        } else {
            const existingNote = this.getNoteById(id);
            if (existingNote) {
                existingNote.deletedDate = new Date();
                localStorage.setItem(this.getKey(id), JSON.stringify(existingNote));
            }
        }
    }
}
