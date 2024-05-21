import classNames from 'classnames';
import styles from './add-note-card.module.scss';
import { LinkButton } from '../button/link-button';
import { PlusIcon } from '@radix-ui/react-icons';

export interface AddNoteCardProps {
    className?: string;
}

export const AddNoteCard = ({ className }: AddNoteCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <LinkButton to="add-note">
                <PlusIcon className={styles.icon} />
                Add Note
            </LinkButton>
        </div>
    );
};
