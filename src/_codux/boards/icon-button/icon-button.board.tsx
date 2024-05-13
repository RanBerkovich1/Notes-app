import { createBoard } from '@wixc3/react-board';
import { IconButton } from '../../../components/icon-button/icon-button';
import { PlusIcon } from '@radix-ui/react-icons';

export default createBoard({
    name: 'IconButton',
    Board: () => (
        <IconButton>
            <PlusIcon />
        </IconButton>
    ),
    isSnippet: true,
});
