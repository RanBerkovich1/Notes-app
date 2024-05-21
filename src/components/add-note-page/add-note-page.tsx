import classNames from 'classnames';
import styles from './add-note-page.module.scss';

export interface AddNotePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AddNotePage = ({ className }: AddNotePageProps) => {
    return <div className={classNames(styles.root, className)}>AddNotePage</div>;
};
