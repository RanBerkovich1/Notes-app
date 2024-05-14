import { createBoard } from '@wixc3/react-board';
import { AddNotePage } from '../../../components/add-note-page/add-note-page';

export default createBoard({
    name: 'AddNotePage',
    Board: () => <AddNotePage />,
    isSnippet: false,
});
