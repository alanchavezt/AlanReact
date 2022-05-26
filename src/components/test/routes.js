// Test Component
import {lazy} from 'react';

const TestEntry = lazy(() => import('./TestEntry'));

const routes = [
    {name: "Test", Component: TestEntry, path: "/tests"}
];

export default routes;