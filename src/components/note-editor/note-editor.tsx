import classNames from 'classnames';
import styles from './note-editor.module.scss';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import StyleGuide_module from '../../styles/common/style-guide.module.scss';

export interface NoteEditorProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NoteEditor = ({ className }: NoteEditorProps) => {
    return (
        <article className={classNames(styles.root, StyleGuide_module.padding40)}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <ChevronLeftIcon />
                    <div>Back to Notes</div>
                </div>
                <div className={styles.body}>
                    <input placeholder="Add title..." className={StyleGuide_module.sectionTitle} />
                    <textarea placeholder="add text..." className={styles.textarea} />
                </div>
            </div>
        </article>
    );
};
