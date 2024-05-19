import type { Note } from '../../data-management/types';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from './dropdown-menu';
import styles from './dropdown-menu.module.scss';
import { useNotesStore } from '../../data-management/use-notes-store';

interface TrashDropdownMenuProps {
    id: string;
}

export const TrashDropdownMenu = ({ id }: TrashDropdownMenuProps) => {
    const { restoreNote, deleteNote } = useNotesStore();

    const handleRestore = () => {
        restoreNote(id);
    };

    const handleDelete = () => {
        deleteNote(id, true);
    };

    return (
        <DropdownMenu>
            <DropdownMenuItem text="Move back to notes" action={handleRestore} />
            <DropdownMenuSeparator />
            <DropdownMenuItem
                text="Delete permanently"
                action={handleDelete}
                className={styles.delete}
            />
        </DropdownMenu>
    );
};
