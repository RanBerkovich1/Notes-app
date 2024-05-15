import { createBoard } from '@wixc3/react-board';
import { Notes } from '../../../components/notes/notes';
import { FakeDataService } from '../../../data-management/fake-data/fake-data-service';
import { StoreContextProvider } from '../../../data-management/store-context-provider';
import { DateTime } from 'luxon';
import { Note } from '../../../data-management/types';
import { FakeRouter } from '../../board-wrappers/fake-router';

const notes: Note[] = [
    {
        id: 'today',
        title: 'today',
        description: 'Today note',
        createdAt: DateTime.now().minus({ hour: 1 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ hour: 1 }).toJSDate(),
        isPinned: true,
    },
    {
        id: 'anotherone',
        title: 'Another',
        description: "Don't forget to buy milk",
        createdAt: DateTime.now().plus({ days: -1, hour: 3 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ hour: 1 }).toJSDate(),
        isPinned: false,
    },
    {
        id: 'today 2',
        title: 'today 2',
        description: 'Today 2 note',
        createdAt: DateTime.now().minus({ hour: 2 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ hour: 2 }).toJSDate(),
        isPinned: false,
    },
    {
        id: '1',
        title: '1',
        description: 'some description 1',
        createdAt: DateTime.now().minus({ days: 1 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ days: 1 }).toJSDate(),
        isPinned: false,
    },
    {
        id: '2',
        title: '2',
        description: 'some description 2',
        createdAt: DateTime.now().minus({ days: 2 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ days: 2 }).toJSDate(),
        isPinned: false,
    },
    {
        id: '3',
        title: '3',
        description: 'some description 3',
        createdAt: DateTime.now().minus({ months: 1 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ months: 1 }).toJSDate(),
        isPinned: false,
    },
];

export default createBoard({
    name: 'Notes',
    Board: () => {
        const storageService = new FakeDataService(notes);

        return (
            <FakeRouter>
                <StoreContextProvider value={storageService}>
                    <Notes />
                </StoreContextProvider>
            </FakeRouter>
        );
    },
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1052,
        canvasHeight: 679,
        windowHeight: 688,
        windowBackgroundColor: '#ebebe9',
    },
});
