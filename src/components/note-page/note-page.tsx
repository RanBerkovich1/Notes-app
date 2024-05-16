import classNames from 'classnames';
import styles from './note-page.module.scss';
import { useEffect, useRef, useState } from 'react';
import { NoteEditor } from '../note-editor/note-editor';
import { useParams } from 'react-router-dom';
import { useNotesStore } from '../../data-management/use-notes-store';

const AUTO_SAVE_TIMEOUT = 1000;

export interface NotePageProps {
    className?: string;
}

export const NotePage = ({ className }: NotePageProps) => {
    const { noteId } = useParams();
    const { getNoteById, addNote, updateNote } = useNotesStore();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [modifiedAt, setModifiedAt] = useState<Date>();

    const saveTimeoutRef = useRef<number>();

    useEffect(() => {
        if (!noteId) {
            addNote({
                title: '',
                description: '',
            });
            setModifiedAt(new Date());
            return;
        }

        const getNote = async () => {
            const note = await getNoteById(noteId);
            if (note) {
                setTitle(note.title);
                setDescription(note.description);
                setModifiedAt(note.modifiedAt);
            }
        };
        void getNote();
    }, [noteId, addNote, getNoteById]);

    const scheduleAutoSave = () => {
        if (!noteId) return;

        if (saveTimeoutRef.current) {
            window.clearTimeout(saveTimeoutRef.current);
        }

        saveTimeoutRef.current = window.setTimeout(() => {
            saveTimeoutRef.current = undefined;
            updateNote(noteId, { title, description });
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
