import { useEffect, useState } from 'react';
import { useNotesStore } from '../../data-management/use-notes-store';
import { NotePage } from '../note-page/note-page';
import type { Note } from '../../data-management/types';

export const AddNotePage = () => {
    const { addNote } = useNotesStore();
    const [note, setNote] = useState<Note>();

    useEffect(() => {
        const create = async () => {
            const note = await addNote({ title: '', description: '' });
            setNote(note);
        };
        void create();
    }, [addNote]);

    if (!note) return null;

    return <NotePage note={note} />;
};
