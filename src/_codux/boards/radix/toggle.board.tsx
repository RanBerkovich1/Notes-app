import { createBoard } from '@wixc3/react-board';
import { Root as Toggle } from '@radix-ui/react-toggle';

export default createBoard({
    name: 'Toggle',
    Board: () => <Toggle />,
    isSnippet: true,
});
