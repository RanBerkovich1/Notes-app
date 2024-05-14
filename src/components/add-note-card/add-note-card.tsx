import classNames from 'classnames';
import styles from './add-note-card.module.scss';
import { Button } from '../button/button';
import { PlusIcon } from '@radix-ui/react-icons';
import { useNavigate, Link } from 'react-router-dom';

export interface AddNoteCardProps {
    className?: string;
}

export const AddNoteCard = ({ className }: AddNoteCardProps) => {
    const navigate = useNavigate();
    return (
        <div className={classNames(styles.root, className)}>
            <Button onClick={() => navigate('/add-note')}>
                <PlusIcon className={styles.icon} />
                Add Note
            </Button>
        </div>
    );
};
