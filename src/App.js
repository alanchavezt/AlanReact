import React, { useState, useEffect, Suspense, lazy } from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import axios from 'axios';

import './App.css';
import './css/styles.css';

import { Header } from './components/common';
import {Sidebar} from "./components/common/sidebar";

/** Authentication */
import { getToken, removeUserSession, setUserSession } from './utils/Common';

/** Routes */
import userRoutes from "./components/users/routes";
import roleRoutes from "./components/roles/routes";
import securityRoutes from "./components/security/routes";
import resumeRoutes from "./components/Resume/routes";
import testRoutes from "./components/test/routes";

/** Assets */
import checkIcon from "./components/common/assets/check.svg";
import errorIcon from "./components/common/assets/error.svg";
import infoIcon from "./components/common/assets/info.svg";
import warningIcon from "./components/common/assets/warning.svg";

/** Toast */
import {toast} from "./components/common/toast/toast";
import SidebarRight from "./components/common/sidebar/SidebarRight";

let routes = [];
routes.push(...userRoutes);
routes.push(...roleRoutes);
routes.push(...securityRoutes);
routes.push(...resumeRoutes);
routes.push(...testRoutes);



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


function App() {

    const [authLoading, setAuthLoading] = useState(true);
    const options = {
        position: "bottom-right",
        autoDelete: true,
        dismissTime: 3000
    };

    useEffect(() => {
        const token = getToken();

        if (!token) {
            return;
        }

        axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
            // setUserSession(response.data.token, response.data.user);
            const message = "This user is verified!";
            toast.success(message, options);
            setAuthLoading(false);
        }).catch(error => {
            removeUserSession();
            const message = "Something went wrong!";
            toast.error(message, options);
            setAuthLoading(false);
        });
    }, []);

    if (authLoading && getToken()) {
        return <div className="content">Checking Authentication...</div>
    }

    return (
        <div className="App">
            <main>
                <Router>

                    <header className={"header"}>
                        <Header/>
                    </header>


                    <div id="layoutSidenav">

                        {/** todo: add the side bar to display the admin pages list, once authenticated */}
                        {getToken() ?
                            <>
                                <div className={"ac-sidebar"} id="layoutSidenav_nav">
                                    <Sidebar/>
                                </div>
                                {/*<div id="layoutSidenav_nav_right">*/}
                                {/*    <SidebarRight/>*/}
                                {/*</div>*/}
                            </>

                            : null
                        }

                        <section className={"ac-content"} id="layoutSidenav_content">
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
                                    {/*<PrivateRoute path="/users" component={UserListEntry}/>*/}
                                    {/*<Route exact path="/users/create" element={<UserCreateEntry/>}/>*/}
                                    {/*<Route exact path="/users/:id" element={<UserViewEntry/>}/>*/}
                                    {/*<Route exact path="/users/:id/edit" element={<UserEditEntry/>}/>*/}
                                    {/*<PrivateRoute exact path="/users/:id/edit" component={UserEditEntry}/>*/}

                                    {/** Password routes */}
                                    {/*<Route exact path="/users/:id/password" element={<Security/>}/>*/}


                                    {/** Rendering routes dynamically */}
                                    {routes.map(({ path, name, Component }, key) => (
                                        <Route
                                            exact
                                            path={path}
                                            key={key}
                                            element={
                                                <div className="container">
                                                    {/*todo check how to pass down the props without manually doing it, maybe do the crumbs on top and just pass down the crumbs*/}
                                                    <Breadcrumbs routes={routes} currentPath={path}/>
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

                                    {/** Routing to a specific item */}
                                    <Route path="/shop/:id" element={<ItemView/>}/>
                                </Routes>
                            </Suspense>
                        </section>
                    </div>
                </Router>

                <footer className={"footer"}>
                    <small>&copy; Copyright 2022, Example Corporation. All Rights Reserved</small>
                </footer>
            </main>
        </div>
    );
}

export default App;
