import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getToken } from './Common';

// handle the private routes
function PrivateRoute({ children, ...rest }) {
    return (
        getToken() ? children : <Navigate to={{pathname: '/signin', state: {from: rest.location}}}/>
    );
}

// function PrivateRoute({ component: Component, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => {
//                 return (
//                     getToken() ? <Component {...props}/> : <Redirect to={{pathname: '/signin', state: {from: props.location}}}/>
//                 );
//             }}
//         />
//     )
// }



export default PrivateRoute;
