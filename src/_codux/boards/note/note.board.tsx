import { createBoard } from '@wixc3/react-board';
import { Note } from '../../../components/note/note';
import { StoreContextProvider } from '../../../data-management/store-context-provider';
import { FakeDataService } from '../../../data-management/fake-data/fake-data-service';

const note = {
    title: 'This is a long long title that breaks into 2 rows',
    description: `This is a description text of this example note. I’ll make it a little longer so we
                can see how it looks in different cases. I hope that’s ok by anyone who reads it, if
                there’s someone like that.This is a description text of this example note. I’ll make
                it a little longer so we can see how it looks in different cases. I hope that’s ok
                by anyone who reads it, if there’s someone like that.`,
    id: '1',
    isPinned: false,
};

export default createBoard({
    name: 'Note',
    Board: () => {
        const storageService = new FakeDataService([note]);
        return (
            <StoreContextProvider value={storageService}>
                <Note {...note} />
            </StoreContextProvider>
        );
    },
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#e2e2e2',
        canvasHeight: 182.8739159124199,
        canvasBackgroundColor: '#ffffff',
        canvasWidth: 199.48546924805095,
        windowHeight: 474,
        windowWidth: 698,
    },
});
