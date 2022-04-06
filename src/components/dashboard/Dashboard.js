import React from 'react';
import {getUser, removeUserSession} from '../../utils/Common';
import "./Dashboard.css"

const Dashboard = (props) => {

    const user = getUser();

    const handleSingOut = () => {
        removeUserSession();
        // props.history.push('/signin');
        window.location.href = "/signin";
    }

    return (
        <div className="container">
            <h1 className="mt-4">Dashboard</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
            </ol>

            <div className="dashboard">
                <h2>Welcome {user.firstName} {user.lastName}!</h2>
                <button type="button" className="btn btn-outline-primary" onClick={handleSingOut}>Sign Out</button>
            </div>
        </div>
    );
}

export default Dashboard;
