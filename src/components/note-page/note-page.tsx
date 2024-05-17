import classNames from 'classnames';
import styles from './note-page.module.scss';
import { useEffect, useRef, useState } from 'react';
import { NoteEditor } from '../note-editor/note-editor';
import { useParams } from 'react-router-dom';
import { useNotesStore } from '../../data-management/use-notes-store';
import type { Note } from '../../data-management/types';

const AUTO_SAVE_TIMEOUT = 1000;

export interface NotePageProps {
    note: Note;
    className?: string;
}

export const NotePage = ({ note, className }: NotePageProps) => {
    const { updateNote } = useNotesStore();

    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);
    const [modifiedAt, setModifiedAt] = useState(note.modifiedAt);

    const saveTimeoutRef = useRef<number>();

    const saveChanges = async () => {
        const savedNote = await updateNote(note.id, { title, description });
        setModifiedAt(savedNote.modifiedAt);
    }

    const scheduleAutoSave = () => {
        if (saveTimeoutRef.current) {
            window.clearTimeout(saveTimeoutRef.current);
        }

        saveTimeoutRef.current = window.setTimeout(() => {
            void saveChanges();
            saveTimeoutRef.current = undefined;
        }, AUTO_SAVE_TIMEOUT);
    };

    const handleTitleChange = (value: string) => {
        setTitle(value);
        scheduleAutoSave();
    };

    const handleDescriptionChange = (value: string) => {
        setDescription(value);
        scheduleAutoSave();
    };

    return (
        <div className={classNames(styles.root, className)}>
            <NoteEditor
                title={title}
                onTitleChange={handleTitleChange}
                description={description}
                onDescriptionChange={handleDescriptionChange}
                onDelete={() => {}} // TODO
                modifiedAt={modifiedAt}
            />
        </div>
    );
};
