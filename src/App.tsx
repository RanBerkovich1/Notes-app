import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { Theme } from '@radix-ui/themes';
import { StoreContextProvider } from './data-management/store-context-provider';
import { LocalStorageService } from './data-management/local-storage/local-storage-service';
import * as RadixToast from '@radix-ui/react-toast';
import { ToastContainer } from './components/toast-container/toast-container';

function App() {
    const router = useMemo(() => createBrowserRouter(routes), []);
    const localStorageService = useMemo(() => new LocalStorageService(), []);

    return (
        <Theme>
            <StoreContextProvider value={localStorageService}>
                <RadixToast.Provider>
                    <RouterProvider router={router} />
                    <ToastContainer />
                </RadixToast.Provider>
            </StoreContextProvider>
        </Theme>
    );
}

export default App;
