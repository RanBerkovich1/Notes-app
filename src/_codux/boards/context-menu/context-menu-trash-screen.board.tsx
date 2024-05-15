import { createBoard } from '@wixc3/react-board';
import ContextMenu from '../../../components/context-menu/context-menu';
import { TRASH_MENU_ITEMS } from '../../../components/context-menu/content';

export default createBoard({
    name: 'ContextMenu - Trash Screen',
    Board: () => <ContextMenu items={TRASH_MENU_ITEMS} />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 117,
    },
});
