import { create } from 'zustand';
import { StorageService } from './storage-service';
import { Note } from './types';

export interface NotesState {
    notes: Note[];
    trash: Note[];

    addNote: (newNote: Pick<Note, 'title' | 'description'>) => void;
    updateNote: (
        id: string,
        updatedNote: Partial<Pick<Note, 'title' | 'description' | 'isPinned'>>
    ) => void;
    deleteNote: (id: string, permanently?: boolean) => void;
    syncNotes: () => void;
    syncTrash: () => void;
    getNoteById: (id: string) => Promise<Note | undefined>;
    restoreNote: (id: string) => Promise<void>;
    pinNote: (id: string) => Promise<void>;
    unPinNote: (id: string) => Promise<void>;
}

const storageService = new StorageService();

export const useNoteStore = create<NotesState>((set) => {
    const syncNotes = async () => {
        const notes = await storageService.getAllNotes();
        set({ notes: notes.filter((note) => !note.deletedAt) });
    };

    const syncTrash = async () => {
        const trash = await storageService.getAllNotes();
        set({ trash: trash.filter((note) => note.deletedAt) });
    };

    const getNoteById = async (id: string): Promise<Note | undefined> => {
        const notes = await storageService.getAllNotes();
        return notes.find((note) => note.id === id);
    };

    const addNote = async (newNote: Pick<Note, 'title' | 'description'>) => {
        const addedNote = await storageService.addNote(newNote);
        set((state) => ({ notes: [...state.notes, addedNote] }));
    };

    const updateNote = async (
        id: string,
        updatedNote: Partial<Pick<Note, 'title' | 'description' | 'isPinned'>>
    ) => {
        const editedNote = await storageService.updateNote(id, updatedNote);
        if (editedNote) {
            await syncNotes();
        }
    };

    const deleteNote = async (id: string, permanently = false) => {
        await storageService.deleteNote(id, permanently);
        await syncNotes();
        await syncTrash();
    };

    const restoreNote = async (id: string) => {
        await storageService.updateNote(id, { deletedAt: undefined });
        await syncNotes();
        await syncTrash();
    };

    const pinNote = async (id: string) => {
        const existingNote = await getNoteById(id);
        if (!existingNote) throw new Error(`No such a note to pin. Id: ${id}`);
        if (existingNote.deletedAt) throw new Error(`Cannot pin a note inside trash. Id: ${id}`);

        await updateNote(id, { isPinned: true });
    };

    const unPinNote = async (id: string) => {
        const existingNote = await getNoteById(id);
        if (!existingNote) throw new Error(`No such a note to unpin. Id: ${id}`);
        if (existingNote.deletedAt) throw new Error(`Cannot unpin a note inside trash. Id: ${id}`);

        await updateNote(id, { isPinned: false });
    };

    return {
        notes: [],
        trash: [],
        syncNotes,
        syncTrash,
        getNoteById,
        addNote,
        updateNote,
        deleteNote,
        restoreNote,
        pinNote,
        unPinNote,
    };
});

export default useNoteStore;
