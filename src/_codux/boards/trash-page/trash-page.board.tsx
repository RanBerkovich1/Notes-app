import { createBoard } from '@wixc3/react-board';
import { FakeDataService } from '../../../data-management/fake-data/fake-data-service';
import { StoreContextProvider } from '../../../data-management/store-context-provider';
import { DateTime } from 'luxon';
import { FakeRouter } from '../../board-wrappers/fake-router';
import { TrashPage } from '../../../components/trash-page/trash-page';

const notes = [
    {
        title: 'today',
        description: 'Today note',
        createdAt: DateTime.now().minus({ hour: 1 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ hour: 1 }).toJSDate(),
        deletedAt: DateTime.now().toJSDate(),
        isPinned: true,
    },
    {
        title: 'Another',
        description: "Don't forget to buy milk",
        createdAt: DateTime.now().plus({ days: -1, hour: 3 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ hour: 1 }).toJSDate(),
        deletedAt: DateTime.now().toJSDate(),
        isPinned: false,
    },
    {
        title: 'today 2',
        description: 'Today 2 note',
        createdAt: DateTime.now().minus({ hour: 2 }).toJSDate(),
        modifiedAt: DateTime.now().minus({ hour: 2 }).toJSDate(),
        deletedAt: DateTime.now().toJSDate(),
        isPinned: false,
    },
];

export default createBoard({
    name: 'Trash',
    Board: () => {
        const storageService = new FakeDataService(notes);

        return (
            <FakeRouter>
                <StoreContextProvider value={storageService}>
                    <TrashPage />
                </StoreContextProvider>
            </FakeRouter>
        );
    },
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1022,
        canvasHeight: 679,
        windowHeight: 688,
        windowBackgroundColor: '#ebebe9',
    },
});
