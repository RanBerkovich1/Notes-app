import type { Note } from '../../data-management/types';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from './dropdown-menu';
import styles from './dropdown-menu.module.scss';
import { useNotesStore } from '../../data-management/use-notes-store';

export const TrashDropdownMenu = ({
    id,
    isPinned,
}: Omit<Note, 'createdAt' | 'modifiedAt' | 'title' | 'description'>) => {
    const { restoreNote, deleteNote } = useNotesStore();

    const hanldeRestore = () => {
        restoreNote(id);
    };

    const handleDelete = () => {
        deleteNote(id, true);
    };

    return (
        <DropdownMenu>
            <DropdownMenuItem text="Move back to notes" action={hanldeRestore} />
            <DropdownMenuSeparator />
            <DropdownMenuItem
                text="Delete permanently"
                action={() => handleDelete}
                className={styles.delete}
            />
        </DropdownMenu>
    );
};
