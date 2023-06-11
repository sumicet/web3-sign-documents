import { Skeleton } from '@chakra-ui/react';
import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from 'src/App';
import Home from 'src/pages/Home';
import { Error } from '../Error';

// TODO: Add sentry wrapper.

const router = createBrowserRouter([
    {
        element: <App />,
        /**
         * Hack to force the error to render inside the layout.
         * @see https://github.com/remix-run/react-router/discussions/9553#discussioncomment-4907035
         */
        errorElement: <App outlet={<Error />} />,
        children: [
            {
                path: '/',
                // TODO add a skeleton component.
                element: (
                    <Suspense fallback={<Skeleton boxSize="100%" />}>
                        <Home />
                    </Suspense>
                ),
            },
        ],
    },
]);

export function Routes() {
    return <RouterProvider router={router} />;
}
