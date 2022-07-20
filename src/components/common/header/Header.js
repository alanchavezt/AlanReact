import React from 'react';

import { Navbar } from '../../common';
import {getToken} from "../../../utils/Common";
import {Link} from "react-router-dom";
import Avatar from "../avatar";
import './Header.css';

const Header = (props) => {
    return (
        <div>
            <div className="flex-header-container">
                <div className="flex-header-row flex-header-item-left">
                    <div className="header-top__logo">
                        {/*<a href="/" className="header-logo">AC</a>*/}
                        <span className="header-logo">AC</span>
                        <span className={"header-logo-small"}><b>WhiteTower</b></span>
                    </div>
                </div>

                <div className="flex-header-row flex-header-item-middle">
                    <Navbar/>
                </div>

                <div className="flex-header-row flex-header-item-right">
                    {!getToken() ?
                        <div className="navbar-links">
                            <ul>
                                <li>
                                    <Link className="navbar-item" to='/signin'>
                                        <span>Sign In</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="navbar-item" to='/signup'>
                                        <span>Sign up</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        : null
                    }

                    {getToken() ? <div className="navbar-item"><Avatar/></div> : null}
                </div>
            </div>
        </div>
    );
}

export default Header;
