import { createBoard } from '@wixc3/react-board';
import { Note } from '../../../components/note/note';
import { Theme } from '@radix-ui/themes';

export default createBoard({
    name: 'Note',
    Board: () => (
        <Theme>
            <Note />
        </Theme>
    ),
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#f1f1f1',
        canvasHeight: 203,
        canvasBackgroundColor: '#d0bebe',
        canvasWidth: 199.48546924805095,
        windowHeight: 474,
        windowWidth: 698,
    },
});
