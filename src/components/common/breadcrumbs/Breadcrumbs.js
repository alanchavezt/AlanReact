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

