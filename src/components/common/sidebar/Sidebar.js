import React from "react";
import "./Sidebar.css"
import {Link} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    {/*<div className="sidebar">*/}

                        {/* todo: this side panel should be render dynamically */}
                        <div className="sb-sidenav-menu-heading">Core</div>
                        <Link className="nav-link" to='/dashboard'>
                            <div className="sb-nav-link-icon">
                                <i className="fa-solid fa-gauge-high"/>
                            </div>Dashboard
                        </Link>
                        <Link className="nav-link" to='/roles'>
                            <div className="sb-nav-link-icon">
                                <i className="fa-solid fa-user-gear"/>
                            </div>Roles
                        </Link>
                        <Link className="nav-link" to='/users'>
                            <div className="sb-nav-link-icon">
                                <i className="fa-solid fa-users"/>
                            </div>Users

                            {/*<Link className="nav-link" to={`/users/${user.userId}/password`}>*/}
                            {/*    <div className="sb-nav-link-icon">*/}
                            {/*        <i className="fas fa-tachometer-alt"/>*/}
                            {/*    </div>Change Password*/}
                            {/*</Link>*/}

                            {/*<Link className="nav-link" to={`/users/${user.userId}/roles`}>*/}
                            {/*    <div className="sb-nav-link-icon">*/}
                            {/*        <i className="fas fa-tachometer-alt"/>*/}
                            {/*    </div>Roles*/}
                            {/*</Link>*/}
                        </Link>


                        {/*<div className="sb-sidenav-menu-heading">Interface</div>*/}
                        {/*<a className="nav-link collapsed" href="#" data-bs-toggle="collapse"*/}
                        {/*   data-bs-target="#collapseLayouts" aria-expanded="false"*/}
                        {/*   aria-controls="collapseLayouts">*/}
                        {/*    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>*/}
                        {/*    Layouts*/}
                        {/*    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i>*/}
                        {/*    </div>*/}
                        {/*</a>*/}
                    </div>

                {/*</div>*/}
            </div>
        </nav>
    );
};

export default Sidebar;
