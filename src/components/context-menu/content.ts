export const SEPARATOR = 'separator';
export const HOME_MENU_ITEMS = (pinned: boolean) => [
    'Edit',
    pinned ? 'Unpin Note' : 'Pin Note',
    SEPARATOR,
    'New Note',
    'Duplicate',
    SEPARATOR,
    'Delete',
];
export const TRASH_MENU_ITEMS = ['Move back to notes', SEPARATOR, 'Delete Permanently'];