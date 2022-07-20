import React, {useState} from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = (props) => {

    const [toggle, setToggle] = useState(false);

    const handleToggleClick = () => {
        setToggle(toggle => !toggle);
    }

    const active = toggle ? "active" : "";

    return (
        <div className="navbar">
            <a href="#" className="toggle-button" onClick={handleToggleClick}>
                <span className="bar"/>
                <span className="bar"/>
                <span className="bar"/>
            </a>
            <div className={`navbar-links ${active}`}>
                <ul>
                    <li>
                        <Link to='/home'>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/portfolio'>
                            <span>Portfolio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/shop'>
                            <span>Shop</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/blog'>
                            <span>Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
