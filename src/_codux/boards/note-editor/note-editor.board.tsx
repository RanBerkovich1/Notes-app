import { ContentSlot, createBoard } from '@wixc3/react-board';
import { NoteEditor } from '../../../components/note-editor/note-editor';
import { FakeRouter } from '../../board-wrappers/fake-router';
import NoteEditor_board_module from './note-editor.board.module.scss';
import { useState } from 'react';

export default createBoard({
    name: 'NoteEditor',
    Board: () => {
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');

        return (
            <FakeRouter>
                <div className={NoteEditor_board_module.wrapper}>
                    <ContentSlot>
                        <NoteEditor
                            title={title}
                            onTitleChange={setTitle}
                            description={description}
                            onDescriptionChange={setDescription}
                            onDelete={() => {}}
                            modifiedAt={new Date()}
                        />
                    </ContentSlot>
                </div>
            </FakeRouter>
        );
    },
    isSnippet: true,
    environmentProps: {
        windowWidth: 700,
        windowHeight: 500,
    },
});
