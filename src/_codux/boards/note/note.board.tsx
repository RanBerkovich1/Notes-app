import { createBoard } from '@wixc3/react-board';
import { Note } from '../../../components/note/note';

export default createBoard({
    name: 'Note',
    Board: () => <Note />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#e2e2e2',
        canvasHeight: 182.8739159124199,
        canvasBackgroundColor: '#ffffff',
        canvasWidth: 199.48546924805095,
        windowHeight: 474,
        windowWidth: 698,
    },
});
