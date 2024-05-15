import { RouteObject } from 'react-router-dom';
import { SiteWrapper } from './components/site-wrapper/site-wrapper';
import { Deleted } from './components/deleted/deleted';
import { AddNotePage } from './components/add-note-page/add-note-page';
import { Notes } from './components/notes/notes';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <SiteWrapper />,
        children: [
            { index: true, element: <Notes /> },
            { path: 'deleted', element: <Deleted /> },
            { path: 'add-note', element: <AddNotePage /> },
        ],
    },
];
