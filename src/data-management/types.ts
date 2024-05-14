export interface Note {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    modifiedAt: Date;
    deletedAt?: Date;
    isPinned: boolean;
}

export interface StorageService {
    getAllNotes: () => Promise<Note[]>;
    getNoteById: (id: string) => Promise<Note | undefined>;
    addNote: (newNote: Pick<Note, 'title' | 'description'>) => Promise<Note>;
    updateNote: (
        id: string,
        updateNote: Partial<Pick<Note, 'title' | 'description' | 'isPinned' | 'deletedAt'>>
    ) => Promise<Note>;
    deleteNote: (id: string, permanently?: boolean) => Promise<void>;
}

export interface NotesState {
    notes: Note[];
    addNote: (newNote: Pick<Note, 'title' | 'description'>) => void;
    updateNote: (
        id: string,
        updateNote: Partial<Pick<Note, 'title' | 'description' | 'isPinned'>>
    ) => void;
    deleteNote: (id: string, permanently?: boolean) => void;
    syncNotes: () => void;
    getNoteById: (id: string) => Promise<Note | undefined>;
    restoreNote: (id: string) => Promise<void>;
    pinNote: (id: string) => Promise<void>;
    unPinNote: (id: string) => Promise<void>;
}
