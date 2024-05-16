import { RouteObject } from 'react-router-dom';
import { SiteWrapper } from './components/site-wrapper/site-wrapper';
import { Deleted } from './components/deleted/deleted';
import { Notes } from './components/notes/notes';
import { NotePage } from './components/note-page/note-page';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <SiteWrapper />,
        children: [
            { index: true, element: <Notes /> },
            { path: 'deleted', element: <Deleted /> },
            { path: 'add-note', element: <NotePage /> },
            { path: 'notes/:noteId', element: <NotePage /> }
        ],
    },
];
