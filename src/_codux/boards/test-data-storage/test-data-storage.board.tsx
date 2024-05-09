import { createBoard } from '@wixc3/react-board';
import { TestDataStorage } from '../../../components/test-data-storage/test-data-storage';

export default createBoard({
    name: 'TestDataStorage',
    Board: () => <TestDataStorage />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 20,
    },
});
