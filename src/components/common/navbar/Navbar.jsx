import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar () {

    return (
        <section className="navbar">
            <Link className="navbar-item" to='/home'>
                <span>Home</span>
            </Link>
            <Link className="navbar-item" to='/dashboard'>
                <span>Dashboard</span>
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
            <Link className="navbar-item" to='/users'>
                <span>Users</span>
            </Link>
            <Link className="navbar-item" to='/login'>
                <span>Login</span>
            </Link>
            <Link className="navbar-item" to='/signup'>
                <span>Sign up</span>
            </Link>
        </section>
    );
}

export default Navbar;
