import { useContext } from 'react';
import { NotesStoreContext } from './store-context-provider';
import { NotesStore } from './types';
import { useStore } from 'zustand';

export const useNotesStore = (): NotesStore => {
    const store = useContext(NotesStoreContext);
    if (!store) {
        throw new Error('useNotesStore must be used within a StoreProvider');
    }
    return useStore(store, (state) => state);
};
