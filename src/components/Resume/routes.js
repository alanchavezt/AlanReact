// Resume Components
import {lazy} from "react";

const ResumeEditEntry = lazy(() => import('./ResumeEditEntry'));

const routes = [
    {name: "Resume Edit", Component: ResumeEditEntry, path: "/resume/edit"}
]

export default routes;
