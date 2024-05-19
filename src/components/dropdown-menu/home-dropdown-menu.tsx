import type { Note } from '../../data-management/types';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from './dropdown-menu';
import styles from './dropdown-menu.module.scss';
import { useNotesStore } from '../../data-management/use-notes-store';

export const HomeDropdownMenu = ({ id, isPinned, title, description }: Omit<Note, 'createdAt' | 'modifiedAt'>) => {
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

    const handleNewNote = () => {
        // TODO
    }

    const handleEdit = () => {
        // TODO
    }

    return (
        <DropdownMenu>
            <DropdownMenuItem text="Edit" action={handleNewNote} />
            <DropdownMenuItem
                text={isPinned ? 'Unpin Note' : 'Unpin'}
                action={isPinned ? handleUnpinNote : handlePinNote}
            />
            <DropdownMenuSeparator />
            <DropdownMenuItem text="New Note" action={handleNewNote} />
            <DropdownMenuItem text="Duplicate" action={handleDuplicateNote} />
            <DropdownMenuSeparator />
            <DropdownMenuItem text="Delete" action={handleDelete} className={styles.delete} />
        </DropdownMenu>
    );
};
