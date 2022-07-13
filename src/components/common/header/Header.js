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
                    <div className="header-top__navbar">
                        <Navbar/>
                    </div>
                </div>

                <div className="flex-header-row flex-header-item-right">

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
                </div>
            </div>


            {/*Header Top section*/}
            {/*<div className="header-top">*/}



            {/*</div>*/}

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
