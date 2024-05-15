import { Note } from '../../../data-management/types';
import styles from './fake-note.module.scss';

export function FakeNote({ note }: { note: Note }) {
    return (
        <div className={styles.root}>
            <span>{note.title}</span>
            <span>{note.createdAt.toLocaleString()}</span>
        </div>
    );
}
