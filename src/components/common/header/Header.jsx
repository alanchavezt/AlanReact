import React from 'react';
import { Navbar } from '../../common';

import './Header.css';

function Header () {
    return (
        <section className="header">
            {/*Header Top section*/}
            <section className="header-top">
                <section className="header-top__logo">
                    <a href="/" className="header-logo">AC</a>
                </section>
                {/*<hr style={{borderRight: "1px solid"}}/>*/}
                <section className="header-top__navbar">
                    <section className="header-top__navigation">
                        <Navbar/>
                    </section>
                    {/*<hr className="header-top__separator"/>*/}
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
