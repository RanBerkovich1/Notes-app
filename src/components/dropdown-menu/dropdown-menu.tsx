import styles from './dropdown-menu.module.scss';
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

export const SEPARATOR = 'separator';

type MenuItem = {
    text: string;
    action?: () => void;
};

export interface ContextMenuProps {
    className?: string;
    items: MenuItem[];
}

const DropdownMenu = ({ className, items }: ContextMenuProps) => {
    const itemsToRender = items.map((item, index) => {
        if (index !== items.length - 1) {
            if (item.text === SEPARATOR) {
                return <DropdownMenuSeparator key={index} className={styles.separator} />;
            } else {
                return (
                    <DropdownMenuItem
                        onClick={item.action}
                        key={item.text}
                        className={styles.menuItem}
                    >
                        {item.text}
                    </DropdownMenuItem>
                );
            }
        } else {
            return (
                <DropdownMenuItem
                    onClick={item.action}
                    className={cx(styles.menuItem, styles.delete)}
                    key={item.text}
                >
                    {item.text}
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

export default DropdownMenu;
