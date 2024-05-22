import { StateCreator } from 'zustand';
import { Note, NotesStore, StorageService } from './types';

const createNotesState =
    (storageService: StorageService): StateCreator<NotesStore> =>
    (set) => {
        const syncNotes = async () => {
            const notes = await storageService.getAllNotes();
            set({ notes });
        };

        const getNoteById = async (id: string): Promise<Note | undefined> => {
            const notes = await storageService.getAllNotes();
            return notes.find((note) => note.id === id);
        };

        const addNote = async (newNote: Pick<Note, 'title' | 'description'>): Promise<Note> => {
            const note =  await storageService.addNote(newNote);
            await syncNotes();
            return note;
        };

        const updateNote = async (
            id: string,
            updateNote: Partial<Pick<Note, 'title' | 'description' | 'isPinned'>>
        ): Promise<Note> => {
            const editedNote = await storageService.updateNote(id, updateNote);
            await syncNotes();
            return editedNote;
        };

        const deleteNote = async (id: string, permanently = false) => {
            await storageService.deleteNote(id, permanently);
            await syncNotes();
        };

        const restoreNote = async (id: string) => {
            await storageService.updateNote(id, { deletedAt: undefined });
            await syncNotes();
        };

        const pinNote = async (id: string) => {
            const existingNote = await getNoteById(id);
            if (!existingNote) throw new Error(`No such a note to pin. Id: ${id}`);
            if (existingNote.deletedAt)
                throw new Error(`Cannot pin a note inside trash. Id: ${id}`);

            await updateNote(id, { isPinned: true });
        };

        const unPinNote = async (id: string) => {
            const existingNote = await getNoteById(id);
            if (!existingNote) throw new Error(`No such a note to unpin. Id: ${id}`);
            if (existingNote.deletedAt)
                throw new Error(`Cannot unpin a note inside trash. Id: ${id}`);

            await updateNote(id, { isPinned: false });
        };

        return {
            notes: [],
            syncNotes,
            getNoteById,
            addNote,
            updateNote,
            deleteNote,
            restoreNote,
            pinNote,
            unPinNote,
        };
    };

export default createNotesState;
