import classNames from 'classnames';
import styles from './toast-viewport.module.scss';
import * as RadixToast from '@radix-ui/react-toast';

export interface ToastViewportProps {
    className?: string;
}

export const ToastViewport = ({ className }: ToastViewportProps) => {
    return <RadixToast.Viewport className={classNames(styles.root, className)} />;
};
