import { createBoard } from '@wixc3/react-board';
import type { Note } from '../../../data-management/types';
import { PageWrapper } from '../../board-wrappers/page-wrapper';
import { EditNotePage } from '../../../components/edit-note-page/edit-note-page';

const notes: Note[] = [
    {
        id: '1',
        title: 'My note',
        description: 'Description text',
        createdAt: new Date(),
        modifiedAt: new Date(),
        isPinned: false,
    },
];

export default createBoard({
    name: 'EditNotePage',
    Board: () => {
        return (
            <PageWrapper path="/notes/1" routePath="/notes/:noteId" notes={notes}>
                <EditNotePage />
            </PageWrapper>
        );
    },
    isSnippet: false,
    environmentProps: { canvasWidth: 1024, canvasHeight: 640 },
});
