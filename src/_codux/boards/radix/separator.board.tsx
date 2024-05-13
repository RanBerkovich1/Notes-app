import { createBoard } from '@wixc3/react-board';
import { Root as Separator } from '@radix-ui/react-separator';

export default createBoard({
    name: 'ScrollArea',
    Board: () => <Separator decorative />,
    isSnippet: true,
});
