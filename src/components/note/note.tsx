import classNames from 'classnames';
import styles from './note.module.scss';
import StyleGuide_module from '../../styles/common/style-guide.module.scss';
import Drawingpin from '../../assets/drawing pin.svg';
import DrawingpinFilled from '../../assets/drawing-pin-filled.svg';
import Dotshorizontal from '../../assets/dots horizontal.svg';
import { useNotesStore } from '../../data-management/use-notes-store';
import type { Note as NoteType } from '../../data-management/types';
import { TrashDropdownMenu } from '../dropdown-menu/trash-dropdown-menu';
import { HomeDropdownMenu } from '../dropdown-menu/home-dropdown-menu';
import { useEffect } from 'react';

export const Note = (note: Omit<NoteType, 'modifiedAt' | 'createdAt'>) => {
    const { pinNote, unPinNote, syncNotes } = useNotesStore();
    const { id, isPinned, description, deletedAt, title } = note;

    useEffect(() => {
        syncNotes();
    }, [isPinned]);

    const handlePinClick = () => {
        if (isPinned) {
            console.log('unpin');
            unPinNote(id);
        } else {
            console.log('pin');
            pinNote(id);
        }
        console.log(isPinned);
    };

    return (
        <div className={styles.noteCard}>
            <div className={styles.cardIcon}>
                {!deletedAt && (
                    <span onClick={handlePinClick}>
                        {isPinned ? <DrawingpinFilled /> : <Drawingpin />}
                    </span>
                )}
                {deletedAt ? <TrashDropdownMenu id={id} /> : <HomeDropdownMenu {...note} />}
            </div>
            <h4 className={classNames(StyleGuide_module.cardTitle, styles.title)}>{title}</h4>
            <p className={StyleGuide_module.cardText}>{description}</p>
        </div>
    );
};
