import classNames from 'classnames';
import styles from './sidebar-panel.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '../button/button';
import PlusSvg from '../../assets/plus.svg?react';

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
                        styles['nav-item']
                    )}
                >
                    <div className={styles.notesSVG}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="16"
                            fill="none"
                            viewBox="0 0 15 16"
                        >
                            <path
                                fill="#131D16"
                                fill-rule="evenodd"
                                d="M4.2 1.5h-.023c-.308 0-.573 0-.79.02a1.527 1.527 0 0 0-.67.201 1.5 1.5 0 0 0-.496.495 1.52 1.52 0 0 0-.2.67C2 3.104 2 3.37 2 3.677v8.646c0 .308 0 .573.02.79.023.231.071.459.201.67a1.5 1.5 0 0 0 .495.496c.212.13.44.178.67.2.218.021.483.021.791.021h6.646c.308 0 .573 0 .79-.02.231-.023.459-.071.67-.201a1.5 1.5 0 0 0 .496-.495c.13-.212.178-.44.2-.67.021-.218.021-.483.021-.791V3.677c0-.308 0-.573-.02-.79a1.519 1.519 0 0 0-.201-.67 1.5 1.5 0 0 0-.495-.496 1.519 1.519 0 0 0-.67-.2c-.218-.021-.483-.021-.791-.021H4.2Zm-.961 1.074c.028-.018.085-.043.242-.058.164-.015.382-.016.719-.016h6.6c.337 0 .555 0 .72.016.156.015.213.04.241.058a.5.5 0 0 1 .165.165c.018.028.043.085.058.242.015.164.016.382.016.719v8.6c0 .337 0 .555-.016.72-.015.156-.04.213-.058.241a.5.5 0 0 1-.165.165c-.028.018-.085.043-.242.058a8.534 8.534 0 0 1-.719.016H4.2c-.337 0-.555 0-.72-.016-.156-.015-.213-.04-.241-.058a.5.5 0 0 1-.165-.165c-.018-.028-.043-.085-.058-.242A8.558 8.558 0 0 1 3 12.3V3.7c0-.337 0-.555.016-.72.015-.156.04-.213.058-.241a.5.5 0 0 1 .165-.165ZM5 10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5ZM4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5ZM5 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H5Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    Notes
                </NavLink>
                <NavLink
                    to="/deleted"
                    className={classNames(
                        ({ isActive }: { isActive: boolean }) =>
                            classNames({ [styles.active]: isActive }),
                        styles['nav-item']
                    )}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="22"
                        fill="none"
                        viewBox="0 0 15 22"
                    >
                        <path
                            fill="#131D16"
                            fill-rule="evenodd"
                            d="M5.5 4.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM3 7a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H11v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8h-.5A.5.5 0 0 1 3 7Zm2 .5h5v8H5v-8Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <div className={styles['nav-item-txt']}>Trash</div>{' '}
                </NavLink>
            </div>
        </div>
    );
};
