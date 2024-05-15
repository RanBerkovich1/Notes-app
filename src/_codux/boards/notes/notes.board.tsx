import { createBoard } from '@wixc3/react-board';
import { Notes } from '../../../components/notes/notes';

export default createBoard({
    name: 'Notes',
    Board: () => <Notes />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1052,
        canvasHeight: 679,
        windowHeight: 688,
        windowBackgroundColor: '#ebebe9',
    },
});
