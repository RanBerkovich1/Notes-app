import classNames from 'classnames';
import styles from './sidebar-panel.module.scss';
import { NavLink } from 'react-router-dom';

export interface HeaderProps {
    className?: string;
}

export const SidebarPanel = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a href="/">Logo</a>
            <div className={styles.menu}>
                <NavLink
                    to="/"
                    className={({ isActive }) => classNames({ [styles.active]: isActive })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/deleted"
                    className={({ isActive }) => classNames({ [styles.active]: isActive })}
                >
                    Deleted
                </NavLink>
            </div>
        </div>
    );
};
