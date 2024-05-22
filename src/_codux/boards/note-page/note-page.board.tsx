import { createBoard } from '@wixc3/react-board';
import { NotePage } from '../../../components/note-page/note-page';
import type { Note } from '../../../data-management/types';
import { PageWrapper } from '../../board-wrappers/page-wrapper';

const notes: Note[] = [
    {
        id: '1',
        title: 'My note',
        description: 'Some description',
        createdAt: new Date(),
        modifiedAt: new Date(),
        isPinned: false,
    },
];

export default createBoard({
    name: 'NotePage',
    Board: () => {
        return (
            <PageWrapper notes={notes}>
                <NotePage note={notes[0]} />
            </PageWrapper>
        );
    },
    isSnippet: false,
    environmentProps: { canvasWidth: 1024, canvasHeight: 640 },
});
