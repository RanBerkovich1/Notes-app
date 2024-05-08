import { createBoard } from '@wixc3/react-board';
import { ContextMenu } from '../../../components/context-menu/context-menu';
import { Theme } from '@radix-ui/themes';
import { Note } from '../../../components/note/note';

export default createBoard({
    name: 'ContextMenu',
    Board: () => (
        <Theme>
            <ContextMenu>
                <div>
                    <Note />
                </div>
            </ContextMenu>
        </Theme>
    ),
    isSnippet: true,
});
