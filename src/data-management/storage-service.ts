import { Note } from './types';

export class StorageService {
    private readonly STORAGE_KEY_PREFIX = 'note_';

    private getKey(id: string): string {
        return this.STORAGE_KEY_PREFIX + id;
    }

    async getNotes(
        { options }: { options: { includeDeleted: boolean } } = {
            options: { includeDeleted: false },
        }
    ): Promise<Note[]> {
        return new Promise((resolve) => {
            const notes: Note[] = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(this.STORAGE_KEY_PREFIX)) {
                    const noteData = localStorage.getItem(key);
                    if (noteData) {
                        const note = JSON.parse(noteData) as Note;
                        if (options.includeDeleted) notes.push(note);
                    }
                }
            }
            resolve(notes);
        });
    }

    async getNoteById(id: string): Promise<Note | undefined> {
        return new Promise((resolve) => {
            const noteData = localStorage.getItem(this.getKey(id));
            if (noteData) {
                resolve(JSON.parse(noteData) as Note);
            } else {
                resolve(undefined);
            }
        });
    }

    async addNote(newNote: Omit<Note, 'id' | 'createdAt' | 'modifiedAt'>): Promise<Note> {
        return new Promise((resolve) => {
            const id = Date.now().toString();
            const createdAt = new Date();
            const modifiedAt = createdAt;
            const note: Note = { id, createdAt, modifiedAt, ...newNote };
            localStorage.setItem(this.getKey(id), JSON.stringify(note));
            resolve(note);
        });
    }

    async editNote(
        id: string,
        updatedNote: Partial<Omit<Note, 'id' | 'createdAt' | 'modifiedAt'>>
    ): Promise<Note> {
        const existingNote = await this.getNoteById(id);
        if (existingNote) {
            const modifiedNote = { ...existingNote, ...updatedNote, modifiedAt: new Date() };
            localStorage.setItem(this.getKey(id), JSON.stringify(modifiedNote));
            return modifiedNote;
        } else {
            throw new Error(`No such a note to edit. Id: ${id}`);
        }
    }

    async deleteNote(id: string, permanently = false): Promise<Note | null> {
        if (permanently) {
            localStorage.removeItem(this.getKey(id));
        } else {
            const existingNote = await this.getNoteById(id);
            if (existingNote) {
                existingNote.deletedAt = new Date();
                localStorage.setItem(this.getKey(id), JSON.stringify(existingNote));
                return existingNote;
            } else {
                throw new Error(`No such a note to delete. Id: ${id}`);
            }
        }
        return null;
    }
}
