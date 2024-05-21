import { useMemo } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

export function FakeRouter(props: { children: React.ReactNode }) {
    const router = useMemo(
        () =>
            createMemoryRouter([
                {
                    path: '*',
                    element: props.children,
                },
            ]),
        [props.children],
    );

    return <RouterProvider router={router} />;
}
