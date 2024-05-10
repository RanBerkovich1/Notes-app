import { create } from 'zustand';
import { StorageService } from './storage-service';
import { Note } from './types';

export interface NotesState {
    notes: Note[];
    trash: Note[];

    addNote: (newNote: Omit<Note, 'id' | 'createdAt' | 'modifiedAt'>) => void;
    editNote: (
        id: string,
        updatedNote: Partial<Omit<Note, 'id' | 'createdAt' | 'modifiedAt'>>
    ) => void;
    deleteNote: (id: string, permanently?: boolean) => void;
    getNotes: () => void;
    getTrash: () => void;
}

const storageService = new StorageService();

export const useNoteStore = create<NotesState>((set) => ({
    notes: [],
    trash: [],

    getNotes: async () => {
        const notes = await storageService.getNotes();
        set({ notes });
    },

    getTrash: async () => {
        const trash = await storageService.getNotes({ options: { includeDeleted: true } });
        set({ trash });
    },

    addNote: async (newNote) => {
        const addedNote = await storageService.addNote(newNote);
        set((state) => ({ notes: [...state.notes, addedNote] }));
    },

    editNote: async (id, updatedNote) => {
        const editedNote = await storageService.editNote(id, updatedNote);
        if (editedNote) {
            set((state) => ({
                notes: state.notes.map((note) => (note.id === id ? editedNote : note)),
            }));
        }
    },

    deleteNote: async (id, permanently = false) => {
        const noteInTrash = await storageService.deleteNote(id, permanently);
        set((state) => {
            const updatedNotes = state.notes.filter((note) => note.id !== id);
            const updatedTrash = noteInTrash
                ? [...state.trash, noteInTrash]
                : state.trash.filter((note) => note.id !== id);
            return { notes: updatedNotes, trash: updatedTrash };
        });
    },
}));

export default useNoteStore;
