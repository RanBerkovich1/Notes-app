import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { Theme } from '@radix-ui/themes';

function App() {
    const router = useMemo(() => createBrowserRouter(routes), []);

    return (
        <Theme>
            <RouterProvider router={router} />
        </Theme>
    );
}

export default App;
