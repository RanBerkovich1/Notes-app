import React from 'react';
import classNames from 'classnames';
import styles from './icon-button.module.scss';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const IconButton = ({ className, children, ...rest }: IconButtonProps) => {
    return (
        <button className={classNames(styles.root, className)} {...rest}>
            {children}
        </button>
    );
};
