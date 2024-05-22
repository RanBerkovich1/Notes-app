import { RouteObject } from 'react-router-dom';
import { SiteWrapper } from './components/site-wrapper/site-wrapper';
import { Deleted } from './components/deleted/deleted';
import { Notes } from './components/notes/notes';
import { AddNotePage } from './components/add-note-page/add-note-page';
import { EditNotePage } from './components/edit-note-page/edit-note-page';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <SiteWrapper />,
        children: [
            { index: true, element: <Notes /> },
            { path: 'deleted', element: <Deleted /> },
            { path: 'add-note', element: <AddNotePage /> },
            { path: 'notes/:noteId', element: <EditNotePage /> },
        ],
    },
];
