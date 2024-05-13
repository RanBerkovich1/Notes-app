import { createBoard } from '@wixc3/react-board';
import { Note } from '../../../components/note/note';
import ContextMenuDemo from '../../../components/context-menu/context-menu';

export default createBoard({
    name: 'ContextMenu',
    Board: () => <ContextMenuDemo />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 117,
    },
});
