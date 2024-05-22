import classNames from 'classnames';
import styles from './note.module.scss';
import StyleGuide_module from '../../styles/common/style-guide.module.scss';
import Drawingpin from '../../assets/drawing pin.svg?react';
import DrawingpinFilled from '../../assets/drawing-pin-filled.svg?react';
import { useNotesStore } from '../../data-management/use-notes-store';
import type { Note as NoteType } from '../../data-management/types';
import { TrashDropdownMenu } from '../dropdown-menu/trash-dropdown-menu';
import { HomeDropdownMenu } from '../dropdown-menu/home-dropdown-menu';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                {deletedAt ? <TrashDropdownMenu id={id} /> : <HomeDropdownMenu {...note}/>}
            </div>
            <Link to={`/notes/${note.id}`} >
                <div className={styles.link}>
                    <h4 className={classNames(StyleGuide_module.cardTitle, styles.title)}>
                        {title}
                        <p className={StyleGuide_module.cardText}>{description}</p>
                    </h4>
                </div>
            </Link>
        </div>
    );
};
