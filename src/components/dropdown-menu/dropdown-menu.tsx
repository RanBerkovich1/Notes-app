import React, { ReactNode } from 'react';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import cx from 'classnames';
import {
    Root as DropdownMenuRoot,
    Trigger as DropdownMenuTrigger,
    Portal as DropdownMenuPortal,
    Content as DropdownMenuContent,
    Item as RadixDropdownMenuItem,
    Separator as RadixDropdownMenuSeparator,
} from '@radix-ui/react-dropdown-menu';
import styles from './dropdown-menu.module.scss';

export interface DropdownMenuProps {
    children: ReactNode;
}

export const DropdownMenu = ({ children }: DropdownMenuProps) => {
    return (
        <DropdownMenuRoot>
            <DropdownMenuTrigger className={styles.trigger}>
                <DotsVerticalIcon />
            </DropdownMenuTrigger>

            <DropdownMenuPortal>
                <DropdownMenuContent className={styles.content}>{children}</DropdownMenuContent>
            </DropdownMenuPortal>
        </DropdownMenuRoot>
    );
};

interface DropdownMenuItemProps {
    text: string;
    action?: () => void;
    className?: string;
}

export const DropdownMenuItem = ({ text, action, className }: DropdownMenuItemProps) => (
    <RadixDropdownMenuItem onClick={action} className={cx(styles.menuItem, className)}>
        {text}
    </RadixDropdownMenuItem>
);

interface DropdownMenuSeparatorProps {
    className?: string;
}

export const DropdownMenuSeparator = ({ className }: DropdownMenuSeparatorProps) => (
    <RadixDropdownMenuSeparator className={cx(styles.separator, className)} />
);
