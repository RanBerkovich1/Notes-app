import classNames from 'classnames';
import styles from './note.module.scss';
import { Box } from '@radix-ui/themes';
import StyleGuide_module from '../../styles/common/style-guide.module.scss';
import Drawingpin from '../../assets/drawing pin.svg';
import Dotshorizontal from '../../assets/dots horizontal.svg';

export interface NoteProps {
    className?: string;
}

export const Note = ({ className }: NoteProps) => {
    return (
        <Box maxWidth="200 ">
            <div className={styles.noteCard}>
                <div className={styles.cardIcon}>
                    <Drawingpin />
                    <Dotshorizontal />
                </div>
                <h4 className={StyleGuide_module.cardTitle}>This is a long title</h4>
                <p className={StyleGuide_module.cardText}>
                    This is a description text of this example note. I’ll make it a little longer so
                    we can see how it looks in different cases. I hope that’s ok by anyone who reads
                    it, if there’s someone like that.
                </p>
            </div>
        </Box>
    );
};
