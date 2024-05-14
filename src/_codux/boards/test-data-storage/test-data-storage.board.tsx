import { createBoard } from '@wixc3/react-board';
import { TestDataStorage } from '../../../components/test-data-storage/test-data-storage';
import { StoreContextProvider } from '../../../data-management/store-context-provider';
import { FakeDataService } from '../../../data-management/fake-data/fake-data-service';
//import { LocalStorageService } from '../../../data-management/local-storage/local-storage-service';

// You can use any Note fields here. They will be fulfilled with the rest of data in the fake storage service.
const notes = [
    {
        title: 'Todo',
        description: 'kid, shopping, swimming',
        deletedAt: new Date(),
    },
    { title: 'Work status', description: '2 issues, feature in progress' },
    { title: 'Git commands', description: 'git reset --hard HEAD' },
    {
        title: 'Binary search',
        description: 'getDefaultStyles(element: Element): Map<string, string> etc long algorithm',
    },
];

export default createBoard({
    name: 'TestDataStorage',
    Board: () => {
        const storageService = new FakeDataService(notes); // try LocalStorageService()
        return (
            <StoreContextProvider value={storageService}>
                <TestDataStorage />
            </StoreContextProvider>
        );
    },
    isSnippet: true,
    environmentProps: {
        canvasHeight: 20,
    },
});
