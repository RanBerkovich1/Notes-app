import { createBoard } from '@wixc3/react-board';
import { HomeDropdownMenu } from '../../../components/dropdown-menu/home-dropdown-menu';
import { StoreContextProvider } from '../../../data-management/store-context-provider';
import { FakeDataService } from '../../../data-management/fake-data/fake-data-service';



export default createBoard({
    name: 'ContextMenu - Home screen',
    Board: () => {
        const storageService = new FakeDataService([]); 
        return (
            <StoreContextProvider value={storageService}>
                <HomeDropdownMenu isPinned={false} id={'1'} description={''} title={''} />
            </StoreContextProvider>
        );
    },
    isSnippet: true,
    environmentProps: {
        canvasHeight: 117,
    },
});

