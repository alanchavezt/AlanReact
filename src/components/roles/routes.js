// Role Component
import {lazy} from "react";

const RoleListEntry = lazy(() => import('./RoleListEntry'));

const routes = [
    {name: "Roles", Component: RoleListEntry, path: "/roles"},
    // {name: "Create", Component: RoleCreateEntry, path: "/roles/create"},
    // {name: "View", Component: RoleViewEntry, path: "/roles/:id"},
    // {name: "Edit", Component: RoleEditEntry, path: "/roles/:id/edit"}
];

export default routes;
