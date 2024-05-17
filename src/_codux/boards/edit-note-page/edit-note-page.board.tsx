import { createBoard } from '@wixc3/react-board';
import { EditNotePage } from '../../../components/edit-note-page/edit-note-page';
import { FakeRouter } from '../../board-wrappers/fake-router';
import { StoreContextProvider } from '../../../data-management/store-context-provider';
import { FakeDataService } from '../../../data-management/fake-data/fake-data-service';
import type { Note } from '../../../data-management/types';
import { Navigate, RouterProvider, createMemoryRouter } from 'react-router-dom';

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
        const storageService = new FakeDataService(notes);
        const router = createMemoryRouter(
            [
                {
                    path: '/notes/:noteId',
                    element: (
                        <StoreContextProvider value={storageService}>
                            <EditNotePage />
                        </StoreContextProvider>
                    ),
                },
                {
                    path: '*',
                    element: <Navigate to="/notes/1" />,
                },
            ],
            { initialEntries: ['/notes/1'] },
        );

        return <RouterProvider router={router} />;
    },
    isSnippet: false,
    environmentProps: {
        canvasWidth: 700,
        canvasHeight: 500,
    },
});
