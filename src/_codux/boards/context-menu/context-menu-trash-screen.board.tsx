import { createBoard } from '@wixc3/react-board';
import ContextMenu, { SEPARATOR } from '../../../components/context-menu/context-menu';

export default createBoard({
    name: 'ContextMenu - Trash Screen',
    Board: () => (
        <ContextMenu
            items={[
                { text: 'Move back to notes' },
                { text: SEPARATOR },
                { text: 'Delete Permanently' },
            ]}
        />
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 117,
    },
});
