// User Component
import {lazy} from "react";

const UserListEntry = lazy(() => import('./UserListEntry'));
const UserCreateEntry = lazy(() => import('./UserCreateEntry'));
const UserViewEntry = lazy(() => import('./UserViewEntry'));
const UserEditEntry = lazy(() => import('./UserEditEntry'));
const UserRoles = lazy(() => import('./UserRoles'));

const routes = [
    {name: "Users", Component: UserListEntry, path: "/users"},
    {name: "Create", Component: UserCreateEntry, path: "/users/create"},
    {name: "View", Component: UserViewEntry, path: "/users/:id"},
    {name: "Edit", Component: UserEditEntry, path: "/users/:id/edit"},
    {name: "Roles", Component: UserRoles, path: "/users/:id/roles"}
];

export default routes;
