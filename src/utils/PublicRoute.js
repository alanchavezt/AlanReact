import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import { getToken } from './Common';

// handle the public routes
function PublicRoute({ children }) {
    return (
        !getToken() ? children : <Navigate to={{pathname: '/dashboard'}}/>
    );
}

// function PublicRoute({ component: Component, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => {
//                 return (
//                     !getToken() ? <Component {...props} /> : <Redirect to={{pathname: '/dashboard'}}/>
//                 );
//             }}
//         />
//     )
// }

export default PublicRoute;
