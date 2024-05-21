import { createBoard } from '@wixc3/react-board';
import { TrashDropdownMenu } from '../../../components/dropdown-menu/trash-dropdown-menu';
import { StoreContextProvider } from '../../../data-management/store-context-provider';
import { FakeDataService } from '../../../data-management/fake-data/fake-data-service';

export default createBoard({
    name: 'Dropdown menu - Trash screen',
    Board: () => {
        const notes = [
            {
                title: 'Todo',
                description: 'kid, shopping, swimming',
                deletedAt: new Date(),
                id: '1',
            },
        ];
        const storageService = new FakeDataService(notes);
        return (
            <StoreContextProvider value={storageService}>
                <TrashDropdownMenu id={'1'} />
            </StoreContextProvider>
        );
    },
});
