import { createBoard } from '@wixc3/react-board';
import { Section } from '../../../components/section/section';

export default createBoard({
    name: 'Section',
    Board: () => <Section title="Today"></Section>,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 693,
        windowWidth: 650,
        windowHeight: 361,
        canvasBackgroundColor: '#ebebe9',
        canvasHeight: 582,
    },
});
