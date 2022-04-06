// Password Create Entry Component
import {lazy} from "react";

const ChangePasswordForm = lazy(() => import('./ChangePasswordForm'));
const PasswordCreateEntry = lazy(() => import('./PasswordCreateEntry'));

const routes = [
    {name: "Change Password", Component: ChangePasswordForm, path: "/users/:id/password"},
    {name: "Create Password", Component: PasswordCreateEntry, path: "/users/:id/password/create"}
];

export default routes;
