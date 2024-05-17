import classNames from 'classnames';
import styles from './edit-note-page.module.scss';
import { useNotesStore } from '../../data-management/use-notes-store';
import { useEffect, useState } from 'react';
import type { Note } from '../../data-management/types';
import { NotePage } from '../note-page/note-page';
import { useParams } from 'react-router-dom';

export const EditNotePage = () => {
    const { noteId } = useParams();
    const { getNoteById } = useNotesStore();
    const [note, setNote] = useState<Note>();

    useEffect(() => {
        const getNote = async () => {
            if (noteId) {
                const note = await getNoteById(noteId);
                setNote(note);
            }
        };
        void getNote();
    }, [noteId, getNoteById]);

    if (!note) return null;

    return <NotePage note={note} />;
};
