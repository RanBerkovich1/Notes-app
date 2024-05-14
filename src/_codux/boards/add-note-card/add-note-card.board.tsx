import { createBoard } from '@wixc3/react-board';
import { AddNoteCard } from '../../../components/add-note-card/add-note-card';
import { ComponentWrapper } from '../../board-wrappers/component-wrapper';

export default createBoard({
    name: 'AddNoteCard',
    Board: () => (
        <ComponentWrapper>
            <AddNoteCard />
        </ComponentWrapper>
    ),
    isSnippet: true,
});
