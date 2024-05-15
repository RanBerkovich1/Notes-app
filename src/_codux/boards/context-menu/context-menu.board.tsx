import { createBoard } from '@wixc3/react-board';
import ContextMenu from '../../../components/context-menu/context-menu';
import { getHomeMenuItems } from '../../../components/context-menu/content';

export default createBoard({
    name: 'ContextMenu - Home screen',
    Board: () => <ContextMenu items={getHomeMenuItems(false)} />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 117,
    },
});
