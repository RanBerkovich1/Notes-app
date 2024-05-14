import { createBoard } from '@wixc3/react-board';
import { NoteEditor } from '../../../components/note-editor/note-editor';
import NoteEditor_board_module from './note-editor.board.module.scss';

export default createBoard({
    name: 'NoteEditor',
    Board: () => (
        <div className={NoteEditor_board_module.boardWrapper}>
            <NoteEditor />
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 638,
        windowHeight: 640,
    },
});
