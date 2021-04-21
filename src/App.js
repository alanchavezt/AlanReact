import './App.css';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';

import { Header } from './components/common';
import { getToken, removeUserSession, setUserSession } from './utils/Common';

// Login Component
const Login = lazy(() => import('./components/login/Login'));

const PrivateRoute = lazy(() => import('./utils/PrivateRoute'));
const PublicRoute = lazy(() => import('./utils/PublicRoute'));

const Dashboard = lazy(() => import('./components/dashboard/Dashboard'));
const Home = lazy(() => import('./components/home/Home'));
const About = lazy(() => import('./components/about/About'));
const Shop = lazy(() => import('./components/shop/Shop'));
const Contact = lazy(() => import('./components/contact/Contact'));

const ItemView = lazy(() => import('./components/shop/ItemView'));

// Users Component
const UserListEntry = lazy(() => import('./components/users/UserListEntry'));
const UserCreateEntry = lazy(() => import('./components/users/UserCreateEntry'));
const UserViewEntry = lazy(() => import('./components/users/UserViewEntry'));
const UserEditEntry = lazy(() => import('./components/users/UserEditEntry'));

function App() {
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const token = getToken();
        if (!token) {
            return;
        }

        axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
            setUserSession(response.data.token, response.data.user);
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
                <Header></Header>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <PublicRoute path="/login" exact component={Login}/>
                        <PrivateRoute path="/dashboard" exact component={Dashboard}/>

                        <Route path="/" exact component={Home}/>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/shop" exact component={Shop}/>
                        <Route path="/contact" component={Contact}/>

                        {/*User routes*/}
                        <PrivateRoute path="/users" exact component={UserListEntry}/>
                        <Route path="/users/create" exact component={UserCreateEntry}/>
                        <Route path="/users/:id" exact component={UserViewEntry}/>
                        <PrivateRoute path="/users/:id/edit" exact component={UserEditEntry}/>

                        {/*Routing to an specific item*/}
                        <Route path="/shop/:id" component={ItemView}/>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
