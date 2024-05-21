import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: 'primary';
    children?: React.ReactNode;
}

export const Button = ({ className, variant = 'primary', children, ...rest }: ButtonProps) => {
    return (
        <button
            className={classNames(styles.root, className, styles[variant])}
            {...rest}
        >
            {children}
        </button>
    );
};
