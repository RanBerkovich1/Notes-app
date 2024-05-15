import classNames from 'classnames';
import styles from './note-editor.module.scss';
import { ChevronLeftIcon, TrashIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

export interface NoteEditorProps {
    title: string;
    onTitleChange: (value: string) => void;
    description: string;
    onDescriptionChange: (value: string) => void;
    onDelete?: () => void;
    modifiedAt?: Date;
    className?: string;
}

export const NoteEditor = ({
    title,
    onTitleChange,
    description,
    onDescriptionChange,
    onDelete,
    modifiedAt,
    className,
}: NoteEditorProps) => {
    return (
        <article className={classNames(styles.root, className)}>
            <header className={styles.header}>
                <Link to="/" className={styles.link}>
                    <ChevronLeftIcon />
                    <span>Back to Notes</span>
                </Link>
                {onDelete && <TrashIcon className={styles['trash-icon']} onClick={onDelete} />}
            </header>
            <input
                placeholder="Add title..."
                className={styles['title-input']}
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}
            />
            <textarea
                placeholder="Add text..."
                className={styles['description-textarea']}
                value={description}
                onChange={(e) => onDescriptionChange(e.target.value)}
            />
            {modifiedAt && (
                <footer>
                    {/* TODO: use luxon */}
                    <span>Edited {modifiedAt.toLocaleString()}</span>
                </footer>
            )}
        </article>
    );
};
