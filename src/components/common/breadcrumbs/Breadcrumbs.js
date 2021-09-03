import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ crumbs }) => {
    // Don't render a single breadcrumb.
    if (crumbs.length <= 1) {
        return null;
    }
    return (
        <div>
            {/* Link back to any previous steps of the breadcrumb. */}
            {crumbs.map(({ name, path }, key) =>
                key + 1 === crumbs.length ? (
                    <span key={key}>{name}</span>
                ) : (
                    <React.Fragment>
                        <Link key={key} to={path}>{name}</Link>
                        <span> / </span>
                    </React.Fragment>
                )
            )}
        </div>
    );
};

export default Breadcrumbs;
