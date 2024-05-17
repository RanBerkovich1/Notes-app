import { useMemo } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { LocalStorageService } from '../../data-management/local-storage/local-storage-service';
import { StoreContextProvider } from '../../data-management/store-context-provider';
import { routes } from '../../routes';

export function PagewithNavigation(props: { path?: string }) {
    const router = createMemoryRouter(routes, { initialEntries: [props.path ?? '/'] });
    const localStorageService = useMemo(() => new LocalStorageService(), []);

    return (
        <StoreContextProvider value={localStorageService}>
            <RouterProvider router={router} />
        </StoreContextProvider>
    );
}
