import './App.css';
import './css/styles.css';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import axios from 'axios';

import { Header } from './components/common';
import Sidebar from "./components/common/sidebar";

/** Authentication */
import { getToken, removeUserSession, setUserSession } from './utils/Common';

/** Routes */
import userRoutes from "./components/users/routes";

let routes = [];
routes.push(...userRoutes);



/** Breadcrumbs Component */
const Breadcrumbs = lazy(() => import('./components/common/breadcrumbs/Breadcrumbs'));

/** SignIn Component */
const SignUp = lazy(() => import('./components/signup/SignUp'));
const SignIn = lazy(() => import('./components/signin/SignIn'));

const PrivateRoute = lazy(() => import('./utils/PrivateRoute'));
const PublicRoute = lazy(() => import('./utils/PublicRoute'));

const Dashboard = lazy(() => import('./components/dashboard/Dashboard'));
const Home = lazy(() => import('./components/home/Home'));
const About = lazy(() => import('./components/about/About'));
const Shop = lazy(() => import('./components/shop/Shop'));
const Contact = lazy(() => import('./components/contact/Contact'));

const ItemView = lazy(() => import('./components/shop/ItemView'));


/** User Components */
const UserListEntry = lazy(() => import('./components/users/UserListEntry'));
const UserCreateEntry = lazy(() => import('./components/users/UserCreateEntry'));
const UserViewEntry = lazy(() => import('./components/users/UserViewEntry'));
const UserEditEntry = lazy(() => import('./components/users/UserEditEntry'));


/** Password */
const Security = lazy(() => import('./components/security/ChangePasswordForm'));


function App() {

    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const token = getToken();

        if (!token) {
            return;
        }

        axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
            // setUserSession(response.data.token, response.data.user);
            setAuthLoading(false);
        }).catch(error => {
            removeUserSession();
            setAuthLoading(false);
        });
    }, []);

    if (authLoading && getToken()) {
        return <div className="content">Checking Authentication...</div>
    }

    return (
        <div className="App">
            <Router>
                <Header/>
                <div id="layoutSidenav">
                    {/** todo: add the side bar to display the admin pages list */}
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu">
                                <div className="nav">
                                    {/*<Sidebar/>*/}


                                    {getToken() ?
                                        <React.Fragment>
                                            <div className="sb-sidenav-menu-heading">Core</div>
                                            <Link className="nav-link" to='/dashboard'>
                                                <div className="sb-nav-link-icon">
                                                    <i className="fas fa-tachometer-alt"/>
                                                </div>Dashboard
                                            </Link>
                                            <Link className="nav-link" to='/users'>
                                                <div className="sb-nav-link-icon">
                                                    <i className="fas fa-tachometer-alt"/>
                                                </div>Users
                                            </Link>
                                        </React.Fragment>
                                        : null
                                    }

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
                            </div>
                        </nav>
                    </div>

                    <section id="layoutSidenav_content">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path="/signup" exact element={<SignUp/>}/>

                                {/*<PublicRoute path="/signin" exact component={SignIn}/>*/}
                                <Route
                                    path="/signin"
                                    exact
                                    element={
                                       <PublicRoute>
                                           <SignIn/>
                                       </PublicRoute>
                                    }
                                />

                                {/*<PrivateRoute path="/dashboard" exact component={Dashboard}/>*/}
                                <Route
                                    path="/dashboard"
                                    exact
                                    element={
                                        <PrivateRoute>
                                            <Dashboard/>
                                        </PrivateRoute>
                                    }
                                />

                                <Route path="/" exact element={<Home/>}/>
                                <Route path="/home" exact element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/shop" exact element={<Shop/>}/>
                                <Route path="/contact" element={<Contact/>}/>

                                {/** User routes */}
                                {/*<Route exact path="/users" element={<UserListEntry/>}/>*/}
                                {/*/!*<PrivateRoute path="/users" component={UserListEntry}/>*!/*/}
                                {/*<Route exact path="/users/create" element={<UserCreateEntry/>}/>*/}
                                {/*<Route exact path="/users/:id" element={<UserViewEntry/>}/>*/}
                                {/*<Route exact path="/users/:id/edit" element={<UserEditEntry/>}/>*/}
                                {/*/!*<PrivateRoute exact path="/users/:id/edit" component={UserEditEntry}/>*!/*/}

                                {/** Password routes */}
                                <Route exact path="/users/:id/password" element={<Security/>}/>

                                {routes.map(({ path, name, Component }, key) => (
                                    <Route
                                        exact
                                        path={path}
                                        key={key}
                                        element={
                                            <div className="container">
                                                <Component/>
                                            </div>
                                        }
                                    />
                                ))}

                                {/*{routes.map(({ path, name, Component }, key) => (*/}
                                {/*    <Route*/}
                                {/*        exact*/}
                                {/*        path={path}*/}
                                {/*        key={key}*/}
                                {/*        render={props => {*/}
                                {/*            const crumbs = routes*/}
                                {/*                // Get all routes that contain the current one.*/}
                                {/*                .filter(({ path }) => props.match.path.includes(path))*/}
                                {/*                // Swap out any dynamic routes with their param values.*/}
                                {/*                // E.g. "/users/:userId" will become "/users/1"*/}
                                {/*                .map(({ path, ...rest }) => ({*/}
                                {/*                    path: Object.keys(props.match.params).length*/}
                                {/*                        ? Object.keys(props.match.params).reduce(*/}
                                {/*                            (path, param) => path.replace(*/}
                                {/*                                `:${param}`, props.match.params[param]*/}
                                {/*                            ), path*/}
                                {/*                        )*/}
                                {/*                        : path,*/}
                                {/*                    ...rest*/}
                                {/*                }));*/}

                                {/*            // console.log(`Generated crumbs for ${props.match.path}`);*/}
                                {/*            crumbs.map(({ name, path }) => console.log({ name, path }));*/}

                                {/*            return (*/}
                                {/*                <div className="container" style={{padding: "40px"}}>*/}
                                {/*                    <Breadcrumbs crumbs={crumbs}/>*/}
                                {/*                    <Component {...props} />*/}
                                {/*                </div>*/}
                                {/*            );*/}
                                {/*        }}*/}
                                {/*    />*/}
                                {/*))}*/}

                                {/** Routing to an specific item */}
                                <Route path="/shop/:id" element={<ItemView/>}/>
                            </Routes>
                        </Suspense>
                    </section>
                </div>
            </Router>
        </div>
    );
}

export default App;
