import { createBoard } from '@wixc3/react-board';
import ContextMenu from '../../../components/context-menu/context-menu';

export default createBoard({
    name: 'ContextMenu',
    Board: () => <ContextMenu />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 117,
    },
});
