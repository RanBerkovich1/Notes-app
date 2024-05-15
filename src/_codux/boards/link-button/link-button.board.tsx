import { ContentSlot, createBoard } from '@wixc3/react-board';
import { LinkButton } from '../../../components/button/link-button';
import { FakeRouter } from '../../board-wrappers/fake-router';

export default createBoard({
    name: 'LinkButton',
    Board: () => (
        <FakeRouter>
            <ContentSlot>
                <LinkButton to="/">Go Home</LinkButton>
            </ContentSlot>
        </FakeRouter>
    ),
    isSnippet: true,
});
