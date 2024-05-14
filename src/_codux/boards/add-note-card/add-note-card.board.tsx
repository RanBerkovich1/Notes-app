import { createBoard } from '@wixc3/react-board';
import { AddNoteCard } from '../../../components/add-note-card/add-note-card';
import { FakeRouter } from '../../board-wrappers/fake-router';

export default createBoard({
    name: 'AddNoteCard',
    Board: () => (
        <FakeRouter>
            <AddNoteCard />
        </FakeRouter>
    ),
    isSnippet: false,
});
