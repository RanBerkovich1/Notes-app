import classNames from 'classnames';
import styles from './toast.module.scss';
import * as RadixToast from '@radix-ui/react-toast';

export interface ToastProps {
    title: string;
    description: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
    action?: React.ReactNode;
    actionAltText?: string;
}

export const Toast = ({
    title,
    description,
    open,
    onOpenChange,
    className,
    action,
    actionAltText,
}: ToastProps) => {
    return (
        <RadixToast.Root open={open} onOpenChange={onOpenChange} className={classNames(styles.root, className)}>
            <RadixToast.Title className={styles.title}>{title}</RadixToast.Title>
            <RadixToast.Description className={styles.description}>
                {description}
            </RadixToast.Description>
            {action && (
                <RadixToast.Action asChild altText={actionAltText ?? 'Action'} className={styles.action}>
                    {action}
                </RadixToast.Action>
            )}
        </RadixToast.Root>
    );
};
