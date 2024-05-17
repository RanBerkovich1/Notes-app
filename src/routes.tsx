import { RouteObject } from 'react-router-dom';
import { SiteWrapper } from './components/site-wrapper/site-wrapper';
import { AddNotePage } from './components/add-note-page/add-note-page';
import { Notes } from './components/notes/notes';
import { TrashPage } from './components/trash-page/trash-page';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <SiteWrapper />,
        children: [
            { index: true, element: <Notes /> },
            { path: 'trash', element: <TrashPage /> },
            { path: 'add-note', element: <AddNotePage /> },
        ],
    },
];
