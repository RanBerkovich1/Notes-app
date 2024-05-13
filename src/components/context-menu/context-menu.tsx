import React from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';
import style from './context-menu.module.scss';

const ContextMenuDemo = () => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');

    return (
        <ContextMenu.Root>
            <ContextMenu.Trigger className={style.ContextMenuTrigger}>
                Right-click here.
            </ContextMenu.Trigger>
            <ContextMenu.Portal>
                <ContextMenu.Content className={style.ContextMenuContent}>
                    <ContextMenu.Item className={style.ContextMenuItem}>
                        Back <div className={style.RightSlot}>⌘+[</div>
                    </ContextMenu.Item>

                    <ContextMenu.Separator className={style.ContextMenuSeparator} />

                    <ContextMenu.CheckboxItem
                        checked={bookmarksChecked}
                        onCheckedChange={setBookmarksChecked}
                        className={style.ContextMenuCheckboxItem}
                    >
                        <ContextMenu.ItemIndicator className={style.ContextMenuItemIndicator}>
                            {'<CheckIcon />'}
                        </ContextMenu.ItemIndicator>
                        Show Bookmarks <div className={style.RightSlot}>⌘+B</div>
                    </ContextMenu.CheckboxItem>

                    <ContextMenu.Label className={style.ContextMenuLabel}>People</ContextMenu.Label>
                    <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
                        <ContextMenu.RadioItem value="pedro" className={style.ContextMenuRadioItem}>
                            <ContextMenu.ItemIndicator className={style.ContextMenuItemIndicator}>
                                {'<DotFilledIcon />'}
                            </ContextMenu.ItemIndicator>
                            Pedro Duarte
                        </ContextMenu.RadioItem>
                        <ContextMenu.RadioItem value="colm" className={style.ContextMenuRadioItem}>
                            <ContextMenu.ItemIndicator className={style.ContextMenuItemIndicator}>
                                {'<DotFilledIcon />'}
                            </ContextMenu.ItemIndicator>
                            Colm Tuite
                        </ContextMenu.RadioItem>
                    </ContextMenu.RadioGroup>
                </ContextMenu.Content>
            </ContextMenu.Portal>
        </ContextMenu.Root>
    );
};

export default ContextMenuDemo;
