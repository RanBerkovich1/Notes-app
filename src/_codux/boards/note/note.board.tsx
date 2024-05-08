import { createBoard } from '@wixc3/react-board';
import { Note } from '../../../components/note/note';
import {Theme} from '@radix-ui/themes';

export default createBoard({
    name: 'Note',
    Board: () => <Theme><Note /></Theme>,
    isSnippet: true,
});