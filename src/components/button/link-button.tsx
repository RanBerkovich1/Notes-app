import classNames from 'classnames';
import styles from '../button/button.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import type { ButtonProps } from './button';

export interface LinkButtonProps extends LinkProps {
    variant?: ButtonProps['variant'];
}

export const LinkButton = ({ variant = 'primary', className, ...rest }: LinkButtonProps) => {
    return <Link className={classNames(styles.root, className, styles[variant])} {...rest} />;
};
