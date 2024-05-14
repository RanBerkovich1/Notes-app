import { useContext } from 'react';
import { NotesStoreContext } from './store-context-provider';
import { NotesState } from './types';
import { useStore } from 'zustand';

export const useNotesStore = (): NotesState => {
    const store = useContext(NotesStoreContext);
    if (!store) {
        throw new Error('useNotesStore must be used within a StoreProvider');
    }
    return useStore(store, (state) => state);
};
