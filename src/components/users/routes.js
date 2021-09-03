// User Component
import {lazy} from "react";

const UserListEntry = lazy(() => import('./UserListEntry'));
const UserCreateEntry = lazy(() => import('./UserCreateEntry'));
const UserViewEntry = lazy(() => import('./UserViewEntry'));
const UserEditEntry = lazy(() => import('./UserEditEntry'));

const routes = [
    {name: "Users", Component: UserListEntry, path: "/users"},
    {name: "Create", Component: UserCreateEntry, path: "/users/create"},
    {name: "View", Component: UserViewEntry, path: "/users/:id"},
    {name: "Edit", Component: UserEditEntry, path: "/users/:id/edit"}
];

export default routes;
