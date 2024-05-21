import { useMemo } from 'react';
import { Navigate, RouterProvider, createMemoryRouter } from 'react-router-dom';
import { Note } from '../../data-management/types';
import { FakeDataService } from '../../data-management/fake-data/fake-data-service';
import { StoreContextProvider } from '../../data-management/store-context-provider';
import * as RadixToast from '@radix-ui/react-toast';
import { ToastContainer } from '../../components/toast-container/toast-container';

interface PageWrapperProps {
    path?: string;
    routePath?: string;
    notes?: Note[];
    children: React.ReactNode;
}

export const PageWrapper = ({
    path = '/',
    routePath = '*',
    notes = [],
    children,
}: PageWrapperProps) => {
    const router = useMemo(() => {
        const routes = [{ path: routePath, element: children }];

        if (routePath !== '*') {
            routes.push({ path: '*', element: <Navigate to={path} /> });
        }

        return createMemoryRouter(routes, { initialEntries: [path] });
    }, [path, children]);

    const storageService = useMemo(() => new FakeDataService(notes), [notes]);

    return (
        <StoreContextProvider value={storageService}>
            <RadixToast.Provider>
                <RouterProvider router={router} />
                <ToastContainer />
            </RadixToast.Provider>
        </StoreContextProvider>
    );
};
