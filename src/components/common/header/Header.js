import React from 'react';
import { Navbar } from '../../common';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            {/*Header Top section*/}
            <div className="header-top">
                <div className="header-top__logo">
                    {/*<a href="/" className="header-logo">AC</a>*/}
                    <span className="header-logo">AC</span>
                    <span className={"header-logo-small"}><b>WhiteTower</b></span>
                </div>

                <div className="header-top__navbar">
                    <Navbar/>
                </div>
            </div>

            {/*Header Bottom Section*/}
            {/*<div className="header-bottom">*/}
            {/*    <div className="header-bottom__phone">*/}
            {/*        333333333*/}
            {/*    </section>*/}
            {/*    <div className="header-bottom__email">*/}
            {/*        resume@gmail.com*/}
            {/*    </section>*/}

            {/*</section>*/}
        </div>
    );
}

export default Header;

// TODO figure out how to use the sections style in the header without being affected by the other section styles
// return (
//     <section className="header">
//         {/*Header Top section*/}
//         <section className="header-top">
//             <section className="header-top__logo">
//                 <a href="/" className="header-logo">AC</a>
//             </section>
//
//             <section className="header-top__navbar">
//                 <Navbar/>
//             </section>
//         </section>
//
//         {/*Header Bottom Section*/}
//         {/*<section className="header-bottom">*/}
//         {/*    <section className="header-bottom__phone">*/}
//         {/*        333333333*/}
//         {/*    </section>*/}
//         {/*    <section className="header-bottom__email">*/}
//         {/*        resume@gmail.com*/}
//         {/*    </section>*/}
//
//         {/*</section>*/}
//     </section>
// );
