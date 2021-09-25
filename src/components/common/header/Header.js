import React from 'react';
import { Navbar } from '../../common';
import './Header.css';

const Header = (props) => {
    return (
        <section className="header">
            {/*Header Top section*/}
            <section className="header-top">
                <section className="header-top__logo">
                    <a href="/" className="header-logo">AC</a>
                </section>

                <section className="header-top__navbar">
                    <Navbar/>
                </section>
            </section>

            {/*Header Bottom Section*/}
            {/*<section className="header-bottom">*/}
            {/*    <section className="header-bottom__phone">*/}
            {/*        333333333*/}
            {/*    </section>*/}
            {/*    <section className="header-bottom__email">*/}
            {/*        resume@gmail.com*/}
            {/*    </section>*/}

            {/*</section>*/}
        </section>
    );
}

export default Header;
