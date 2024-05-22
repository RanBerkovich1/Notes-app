import type { Note } from '../../data-management/types';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from './dropdown-menu';
import styles from './dropdown-menu.module.scss';
import { useNotesStore } from '../../data-management/use-notes-store';
import { Link } from 'react-router-dom';

export const HomeDropdownMenu = ({
    id,
    isPinned,
    title,
    description,
}: Omit<Note, 'createdAt' | 'modifiedAt'>) => {
    const { addNote, updateNote, deleteNote, syncNotes, pinNote, unPinNote } = useNotesStore();

    const handlePinNote = () => {
        pinNote(id);
    };

    const handleUnpinNote = () => {
        unPinNote(id);
    };

    const handleDuplicateNote = () => {
        addNote({ title, description });
    };

    const handleDelete = () => {
        deleteNote(id);
    };

    return (
        <DropdownMenu>
            <Link to={`/notes/${id}`}>
                <DropdownMenuItem text="Edit" />
            </Link>
            <DropdownMenuItem
                text={isPinned ? 'Unpin Note' : 'Pin Note'}
                action={isPinned ? handleUnpinNote : handlePinNote}
            />
            <DropdownMenuSeparator />
            <DropdownMenuItem text="Duplicate" action={handleDuplicateNote} />
            <DropdownMenuSeparator />
            <DropdownMenuItem text="Delete" action={handleDelete} className={styles.delete} />
        </DropdownMenu>
    );
};
