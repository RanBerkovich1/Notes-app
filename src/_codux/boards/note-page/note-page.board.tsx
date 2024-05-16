import { createBoard } from '@wixc3/react-board';
import { NotePage } from '../../../components/note-page/note-page';
import { FakeRouter } from '../../board-wrappers/fake-router';
import { FakeDataService } from '../../../data-management/fake-data/fake-data-service';
import { StoreContextProvider } from '../../../data-management/store-context-provider';
import type { Note } from '../../../data-management/types';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

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
        const storageService = new FakeDataService(notes);
        const router = createMemoryRouter(
            [
                {
                    path: '/notes/:noteId',
                    element: (
                        <StoreContextProvider value={storageService}>
                            <NotePage />
                        </StoreContextProvider>
                    ),
                },
            ],
            { initialEntries: ['/notes/1'] },
        );

        return <RouterProvider router={router} />;
    },
    isSnippet: true,
});
