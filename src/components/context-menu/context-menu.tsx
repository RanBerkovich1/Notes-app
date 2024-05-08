import classNames from 'classnames';
import styles from './context-menu.module.scss';
import { ContextMenu as ContextMenuRadix } from '@radix-ui/themes';

export interface ContextMenuProps {
    className?: string;
    children: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ContextMenu = ({ className, children }: ContextMenuProps) => {
    return (
        <ContextMenuRadix.Root>
            <ContextMenuRadix.Trigger>{children}</ContextMenuRadix.Trigger>
            <ContextMenuRadix.Content>
                <ContextMenuRadix.Item>Pin Note</ContextMenuRadix.Item>

                <ContextMenuRadix.Separator />
                <ContextMenuRadix.Item>New Note</ContextMenuRadix.Item>
                <ContextMenuRadix.Item>Duplicate Note</ContextMenuRadix.Item>

                <ContextMenuRadix.Separator />
                <ContextMenuRadix.Item color="red">Delete</ContextMenuRadix.Item>
            </ContextMenuRadix.Content>
        </ContextMenuRadix.Root>
    );
};
