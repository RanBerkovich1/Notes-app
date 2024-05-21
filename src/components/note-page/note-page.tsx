import { useRef, useState } from 'react';
import { NoteEditor } from '../note-editor/note-editor';
import { useNavigate } from 'react-router-dom';
import { useNotesStore } from '../../data-management/use-notes-store';
import type { Note } from '../../data-management/types';
import { useToastStore } from '../../components/toast-container/toast-store';
import { Button } from '../../components/button/button';

const AUTO_SAVE_TIMEOUT = 1000;

export interface NotePageProps {
    note: Note;
}

export const NotePage = ({ note }: NotePageProps) => {
    const navigate = useNavigate();

    const { updateNote, deleteNote, restoreNote } = useNotesStore();
    const { openToast } = useToastStore();

    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);
    const [modifiedAt, setModifiedAt] = useState(note.modifiedAt);

    const saveTimeoutRef = useRef<number>();

    const saveChanges = async () => {
        const savedNote = await updateNote(note.id, { title, description });
        setModifiedAt(savedNote.modifiedAt);
    };

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

    const handleDelete = async () => {
        await deleteNote(note.id);
        openToast({
            title: 'Note moved to Trash',
            description: `It didn't delete permanently`,
            action: (
                <Button
                    onClick={() => {
                        restoreNote(note.id);
                        // TODO: another toast notification?
                    }}
                >
                    Undo
                </Button>
            ),
        });
        navigate('/');
    };

    return (
        <NoteEditor
            title={title}
            onTitleChange={handleTitleChange}
            description={description}
            onDescriptionChange={handleDescriptionChange}
            onDelete={handleDelete}
            modifiedAt={modifiedAt}
        />
    );
};
