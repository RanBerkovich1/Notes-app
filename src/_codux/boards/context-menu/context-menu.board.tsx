import { createBoard } from '@wixc3/react-board';
import ContextMenu, { SEPARATOR } from '../../../components/context-menu/context-menu';

export default createBoard({
    name: 'ContextMenu - Home screen',
    Board: () => (
        <ContextMenu
            items={[
                { text: 'Edit' },
                { text: 'Unpin Note' },
                { text: SEPARATOR },
                { text: 'New Note' },
                { text: 'Duplicate' },
                { text: SEPARATOR },
                { text: 'Delete' },
            ]}
        />
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 117,
    },
});
