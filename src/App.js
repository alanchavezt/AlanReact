import './App.css';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';

import { Header } from './components/common';

// Authentication
import { getToken, removeUserSession, setUserSession } from './utils/Common';

// Routes
import routes from "./components/users/routes";

// Breadcrumbs Component
const Breadcrumbs = lazy(() => import('./components/common/breadcrumbs/Breadcrumbs'));

// SignIn Component
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


function App() {
    const [authLoading, setAuthLoading] = useState(true);

    // useEffect(() => {
    //     const token = getToken();
    //     if (!token) {
    //         return;
    //     }
    //
    //     axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
    //         setUserSession(response.data.token, response.data.user);
    //         setAuthLoading(false);
    //     }).catch(error => {
    //         removeUserSession();
    //         setAuthLoading(false);
    //     });
    // }, []);
    //
    // if (authLoading && getToken()) {
    //     return <div className="content">Checking Authentication...</div>
    // }
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/signup" exact component={SignUp}/>
                        <PublicRoute path="/signin" exact component={SignIn}/>
                        <PrivateRoute path="/dashboard" exact component={Dashboard}/>

                        <Route path="/" exact component={Home}/>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/shop" exact component={Shop}/>
                        <Route path="/contact" component={Contact}/>

                        {/*User routes*/}
                        {/*<Route exact path="/users" component={UserListEntry}/>*/}
                        {/*/!*<PrivateRoute path="/users" component={UserListEntry}/>*!/*/}
                        {/*<Route exact path="/users/create" component={UserCreateEntry}/>*/}
                        {/*<Route exact path="/users/:id" component={UserViewEntry}/>*/}
                        {/*<Route exact path="/users/:id/edit" component={UserEditEntry}/>*/}
                        {/*/!*<PrivateRoute exact path="/users/:id/edit" component={UserEditEntry}/>*!/*/}

                        {routes.map(({ path, name, Component }, key) => (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={props => {
                                    const crumbs = routes
                                        // Get all routes that contain the current one.
                                        .filter(({ path }) => props.match.path.includes(path))
                                        // Swap out any dynamic routes with their param values.
                                        // E.g. "/users/:userId" will become "/users/1"
                                        .map(({ path, ...rest }) => ({
                                            path: Object.keys(props.match.params).length
                                                ? Object.keys(props.match.params).reduce(
                                                    (path, param) => path.replace(
                                                        `:${param}`, props.match.params[param]
                                                    ), path
                                                )
                                                : path,
                                            ...rest
                                        }));
                                    console.log(`Generated crumbs for ${props.match.path}`);
                                    crumbs.map(({ name, path }) => console.log({ name, path }));
                                    return (
                                        <div className="container" style={{padding: "40px"}}>
                                            <Breadcrumbs crumbs={crumbs}/>
                                            <Component {...props} />
                                        </div>
                                    );
                                }}
                            />
                        ))}

                        {/*Routing to an specific item*/}
                        <Route path="/shop/:id" component={ItemView}/>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
