import React from 'react';
import classNames from 'classnames';
import styles from './icon-button.module.scss';

export interface IconButtonProps {
    className?: string;
    children: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const IconButton = ({ className, children }: IconButtonProps) => {
    return (
        <button className={styles.root}>
            {children}
        </button>
    );
};
