import React, { createContext, ReactNode, useContext } from 'react';
import { createStore, StoreApi } from 'zustand';
import { NotesStore, StorageService } from './types';
import createNotesState from './create-notes-state';

interface StoreContextProviderProps {
    value: StorageService;
    children: ReactNode;
}

export const NotesStoreContext = createContext<StoreApi<NotesStore> | null>(null);

export const StoreContextProvider: React.FC<StoreContextProviderProps> = ({ value, children }) => {
    const store = createStore(createNotesState(value));

    return <NotesStoreContext.Provider value={store}>{children}</NotesStoreContext.Provider>;
};
