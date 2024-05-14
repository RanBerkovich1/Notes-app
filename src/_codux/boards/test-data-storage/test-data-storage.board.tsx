import { createBoard } from '@wixc3/react-board';
import { TestDataStorage } from '../../../components/test-data-storage/test-data-storage';
import { StoreContextProvider } from '../../../data-management/store-context-provider';
import { FakeDataService } from '../../../data-management/fake-data/fake-data-service';
//import { LocalStorageService } from '../../../data-management/local-storage/local-storage-service';

export default createBoard({
    name: 'TestDataStorage',
    Board: () => {
        const storageService = new FakeDataService();
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
