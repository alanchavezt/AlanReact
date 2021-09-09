import React from 'react';
import {getUser, removeUserSession} from '../../utils/Common';
import "./Dashboard.css"

function Dashboard(props) {

    const user = getUser();

    const handleSingOut = () => {
        removeUserSession();
        props.history.push('/signin');
    }

    return (
        <div className="container">
            <div className="dashboard">
                <h1>Welcome {user.firstName} {user.lastName}!</h1>
                <button type="button" className="btn btn-outline-primary" onClick={handleSingOut}>Sign Out</button>
            </div>
        </div>
    );
}

export default Dashboard;
