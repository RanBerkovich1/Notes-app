import classNames from 'classnames';
import styles from './sidebar-panel.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '../button/button';
import PlusSvg from '../../assets/plus.svg?react';
import TrashIcon from '../../assets/trash.svg?react';
import NoteIcon from '../../assets/notes.svg?react';

export interface HeaderProps {
    className?: string;
}

export const SidebarPanel = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['top-area']}>
                <a href="/" className={styles.logo}>
                    Notedux
                </a>
                <Button variant="primary">
                    <PlusSvg />
                </Button>
            </div>
            <div className={styles.menu}>
                <NavLink
                    to="/"
                    className={classNames(
                        ({ isActive }: { isActive: boolean }) =>
                            classNames({ [styles.active]: isActive }),
                        styles['nav-item'],
                    )}
                >
                    <NoteIcon />
                    Notes
                </NavLink>
                <NavLink
                    to="/trash"
                    className={classNames(
                        ({ isActive }: { isActive: boolean }) =>
                            classNames({ [styles.active]: isActive }),
                        styles['nav-item'],
                    )}
                >
                    <TrashIcon />
                    <div className={styles['nav-item-txt']}>Trash</div>
                </NavLink>
            </div>
        </div>
    );
};
