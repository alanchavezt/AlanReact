import React from "react";
import "./Sidebar.css"
import {NavLink} from "react-router-dom";
import "./SidebarRight.css";

const Sidebar = (props) => {
    return (
        <nav className="sb-sidenav sb-sidenav-dark_right" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    {/*<div className="sidebar">*/}

                        {/* todo: this side panel should be render dynamically */}
                        <div className="sb-sidenav-menu-heading">Core</div>
                        <NavLink className="nav-link" to='/password/reset'>
                            <div className="sb-nav-link-icon">
                                <i className="fa-solid fa-gauge-high"/>
                            </div>Change Password
                        </NavLink>
                        <NavLink className="nav-link" to='/password/create'>
                            <div className="sb-nav-link-icon">
                                <i className="fa-solid fa-user-gear"/>
                            </div>Create Password
                        </NavLink>
                    </div>

                {/*</div>*/}
            </div>
        </nav>
    );
};

export default Sidebar;
