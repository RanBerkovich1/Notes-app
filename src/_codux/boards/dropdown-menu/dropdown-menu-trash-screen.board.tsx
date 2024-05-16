import { createBoard } from '@wixc3/react-board';
import { TrashDropdownMenu } from '../../../components/dropdown-menu/trash-dropdown-menu';
import { StoreContextProvider } from '../../../data-management/store-context-provider';
import { FakeDataService } from '../../../data-management/fake-data/fake-data-service';



export default createBoard({
    name: 'ContextMenu - Trash screen',
    Board: () => {
        const storageService = new FakeDataService([]); 
        return (
            <StoreContextProvider value={storageService}>
                <TrashDropdownMenu isPinned={false} id={'1'} />
            </StoreContextProvider>
        );
    },
    isSnippet: true,
    environmentProps: {
        canvasHeight: 117,
    },
});

