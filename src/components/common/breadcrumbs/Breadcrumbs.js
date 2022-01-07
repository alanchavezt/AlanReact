import React from "react";
import {Link, useParams} from "react-router-dom";

const Breadcrumbs = ({ routes, currentPath }) => {
    const params = useParams();

    const crumbs = routes
        .filter(({ path }) => currentPath.includes(path))
        .map(({ path, ...rest }) => ({
            path: Object.keys(params).length
                ? Object.keys(params).reduce(
                    (path, param) => path.replace(
                        `:${param}`, params[param]
                    ), path
                )
                : path,
            ...rest
        }));

    crumbs.map(({ name, path }) => console.log({ name, path }));

    // Don't render a single breadcrumb.
    if (crumbs.length <= 1) {
        return null;
    }

    return (
        <div className="p-4 pb-0">
            {/* Link back to any previous steps of the breadcrumb. */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {crumbs.map(({ name, path }, key) =>
                        key + 1 === crumbs.length ? (
                            <li key={key} className="breadcrumb-item">
                                <span>{name}</span>
                            </li>
                        ) : (
                            <React.Fragment key={key}>
                                <li key={key} className="breadcrumb-item">
                                    <Link to={path}>{name}</Link>
                                </li>
                            </React.Fragment>
                        )
                    )}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
