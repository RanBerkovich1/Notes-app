import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { Theme } from '@radix-ui/themes';
import { StoreContextProvider } from './data-management/store-context-provider';
import { LocalStorageService } from './data-management/local-storage/local-storage-service';

function App() {
    const router = useMemo(() => createBrowserRouter(routes), []);
    const localStorageService = useMemo(() => new LocalStorageService(), []);

    return (
        <Theme>
            <StoreContextProvider value={localStorageService}>
                <RouterProvider router={router} />
            </StoreContextProvider>
        </Theme>
    );
}

export default App;
