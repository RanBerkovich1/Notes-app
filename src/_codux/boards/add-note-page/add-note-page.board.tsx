import { createBoard } from '@wixc3/react-board';
import { AddNotePage } from '../../../components/add-note-page/add-note-page';
import { FakeDataService } from '../../../data-management/fake-data/fake-data-service';
import { FakeRouter } from '../../board-wrappers/fake-router';
import { StoreContextProvider } from '../../../data-management/store-context-provider';

export default createBoard({
    name: 'AddNotePage',
    Board: () => {
        const storageService = new FakeDataService([]);
        return (
            <FakeRouter>
                <StoreContextProvider value={storageService}>
                    <AddNotePage />
                </StoreContextProvider>
            </FakeRouter>
        );
    },
    isSnippet: false,
    environmentProps: {
        canvasHeight: 500,
        canvasWidth: 700,
    },
});
