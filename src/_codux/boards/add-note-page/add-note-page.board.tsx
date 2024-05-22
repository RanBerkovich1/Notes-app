import { createBoard } from '@wixc3/react-board';
import { AddNotePage } from '../../../components/add-note-page/add-note-page';
import { PageWrapper } from '../../board-wrappers/page-wrapper';

export default createBoard({
    name: 'AddNotePage',
    Board: () => {
        return (
            <PageWrapper>
                <AddNotePage />
            </PageWrapper>
        );
    },
    isSnippet: false,
    environmentProps: {
        canvasHeight: 640,
        canvasWidth: 1024,
    },
});
