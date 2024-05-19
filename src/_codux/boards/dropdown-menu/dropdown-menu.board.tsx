import { createBoard } from '@wixc3/react-board';
import { HomeDropdownMenu } from '../../../components/dropdown-menu/home-dropdown-menu';
import { StoreContextProvider } from '../../../data-management/store-context-provider';
import { FakeDataService } from '../../../data-management/fake-data/fake-data-service';

export default createBoard({
    name: 'Dropdown menu - Home screen',
    Board: () => {
        const notes = [
            {
                title: 'Todo',
                description: 'kid, shopping, swimming',
                id: '1',
            },
        ];
        const storageService = new FakeDataService(notes);
        return (
            <StoreContextProvider value={storageService}>
                <HomeDropdownMenu
                    isPinned={false}
                    id={'1'}
                    description={'kid, shopping, swimming'}
                    title={'Todo'}
                />
            </StoreContextProvider>
        );
    },
    environmentProps: {
        canvasWidth: 15,
    },
});
