import styles from './context-menu.module.scss';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import cx from 'classnames';
import {
    Root as DropdownMenuRoot,
    Trigger as DropdownMenuTrigger,
    Portal as DropdownMenuPortal,
    Content as DropdownMenuContent,
    Item as DropdownMenuItem,
    Separator as DropdownMenuSeparator,
} from '@radix-ui/react-dropdown-menu';
import { SEPARATOR } from './content';

export interface ContextMenuProps {
    className?: string;
    items: string[];
}

const ContextMenu = ({ className, items }: ContextMenuProps) => {
    const itemsToRender = items.map((item, index) => {
        if (index !== items.length-1) {
            if (item === SEPARATOR) {
                return <DropdownMenuSeparator className={styles.separator} />;
            } else {
                return <DropdownMenuItem className={styles.menuItem}>{item}</DropdownMenuItem>;
            }
        } else { 
            return (
                <DropdownMenuItem className={cx(styles.menuItem, styles.delete)}>
                    {item}
                </DropdownMenuItem>
            );
        }
        
    });

    return (
        <div className={className}>
            <DropdownMenuRoot>
                <DropdownMenuTrigger className={styles.trigger}>
                    <DotsVerticalIcon />
                </DropdownMenuTrigger>

                <DropdownMenuPortal>
                    <DropdownMenuContent className={styles.content}>
                        {itemsToRender}
                    </DropdownMenuContent>
                </DropdownMenuPortal>
            </DropdownMenuRoot>
        </div>
    );
};

export default ContextMenu;
