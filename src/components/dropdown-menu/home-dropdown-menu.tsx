import type { Note } from '../../data-management/types';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from './dropdown-menu';
import styles from './dropdown-menu.module.scss';
import { useNotesStore } from '../../data-management/use-notes-store';
import { Link } from 'react-router-dom';
import { useToastStore } from '../../components/toast-container/toast-store';
import { Button } from '../button/button';

export const HomeDropdownMenu = ({
    id,
    isPinned,
    title,
    description,
}: Omit<Note, 'createdAt' | 'modifiedAt'>) => {
    const { addNote, deleteNote, pinNote, unPinNote, restoreNote } = useNotesStore();
    const { openToast } = useToastStore();

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
        openToast({
            title: 'Note moved to Trash',
            description: `It didn't delete permanently`,
            action: (
                <Button
                    onClick={() => {
                        restoreNote(id);
                    }}
                >
                    Undo
                </Button>
            ),
        });
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
