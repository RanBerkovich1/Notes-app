import { createBoard } from '@wixc3/react-board';
import DropdownMenu, { SEPARATOR } from '../../../components/dropdown-menu/dropdown-menu';

export default createBoard({
    name: 'ContextMenu - Home screen',
    Board: () => (
        <DropdownMenu
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
