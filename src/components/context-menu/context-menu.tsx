import React from 'react';
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

const ContextMenu = () => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');

    return (
        <DropdownMenuRoot>
            <DropdownMenuTrigger>
                <DotsVerticalIcon />
            </DropdownMenuTrigger>

            <DropdownMenuPortal>
                <DropdownMenuContent className={styles.content}>
                    <DropdownMenuItem className={styles.menuItem}>Edit</DropdownMenuItem>
                    <DropdownMenuItem className={styles.menuItem}>Unpin note</DropdownMenuItem>

                    <DropdownMenuSeparator className={styles.separator} />
                    <DropdownMenuItem className={styles.menuItem}>New note</DropdownMenuItem>
                    <DropdownMenuItem className={styles.menuItem}>Duplicate</DropdownMenuItem>

                    <DropdownMenuSeparator className={styles.separator} />
                    <DropdownMenuItem className={cx(styles.menuItem, styles.delete)}>Move to trash</DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenuPortal>
        </DropdownMenuRoot>
    );
};

export default ContextMenu;
