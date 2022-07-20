// Test Component
import {lazy} from 'react';

const Components = lazy(() => import('./Components'));

const routes = [
    {name: "Components", Component: Components, path: "/components"}
];

export default routes;
