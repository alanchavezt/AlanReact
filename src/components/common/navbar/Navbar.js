import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import {getToken} from "../../../utils/Common";
import Avatar from "../avatar";

const Navbar = (props) => {

    return (
        <div className="navbar">
            <div className="navbar-top-item">
                <Link className="navbar-item" to='/home'>
                    <span>Home</span>
                </Link>
                <Link className="navbar-item" to='/about'>
                    <span>About</span>
                </Link>
                <Link className="navbar-item" to='/portfolio'>
                    <span>Portfolio</span>
                </Link>
                <Link className="navbar-item" to='/shop'>
                    <span>Shop</span>
                </Link>
                <Link className="navbar-item" to='/blog'>
                    <span>Blog</span>
                </Link>
                <Link className="navbar-item" to='/contact'>
                    <span>Contact</span>
                </Link>
            </div>

            <div className="navbar-top-item">
                {!getToken() ?
                    <React.Fragment>
                        <Link className="navbar-item" to='/signin'>
                            <span>Sign In</span>
                        </Link>
                        <Link className="navbar-item" to='/signup'>
                            <span>Sign up</span>
                        </Link>
                    </React.Fragment>
                    : null
                }

                {getToken() ? <div className="navbar-item"><Avatar/></div> : null}
            </div>

            {/*<div className="navbar-top-item">*/}
            {/*    {getToken() ? <div className="navbar-item"><Avatar/></div> : null}*/}
            {/*</div>*/}
        </div>
    );
};

export default Navbar;