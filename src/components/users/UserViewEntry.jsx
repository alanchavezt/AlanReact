import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Users.css';
import UserService from "./UserService";
import Loading from '../common/Loading';

const UserViewEntry = (props) => {

    const params = useParams();
    const userService = new UserService();
    const [user, setUser] = useState();

    useEffect(() => {
        const userId = params.id;
        userService.getUser(userId).then(data => {
            setUser(data);
        });
    }, []);

    if (!user) {
        return <Loading />
    }

    return (
        <div style={{paddingTop: "20px"}}>
            <h1>User</h1>
            <form>
                <div className="form-group">
                    <label className="float-left" htmlFor="userId">User ID</label>
                    <input type="text" className="form-control" id="userId" value={user.userId} readOnly={true}/>
                </div>
                <div className="form-group">
                    <label className="float-left" htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" value={user.username} readOnly={true}/>
                </div>
                <div className="form-group">
                    <label className="float-left" htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" value={user.password} readOnly={true}/>
                </div>
                <div className="form-group">
                    <label className="float-left" htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" value={user.firstName} readOnly={true}/>
                </div>
                <div className="form-group">
                    <label className="float-left" htmlFor="middleName">Middle Name</label>
                    <input type="text" className="form-control" id="middleName" value={user.middleName || ""} readOnly={true}/>
                </div>
                <div className="form-group">
                    <label className="float-left" htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName"value={user.lastName} readOnly={true}/>
                </div>
                <div className="form-group">
                    <label className="float-left" htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={user.email || ""} readOnly={true}/>
                    <small id="emailHelp" className="form-text text-muted float-right">We'll never share your email
                        with anyone else.</small>
                </div>
                {/*<div className="form-group">*/}
                {/*    <label className="float-left" htmlFor="phone">Phone</label>*/}
                {/*    <input type="text" className="form-control" id="phone" value={user.phone} readOnly={true}/>*/}
                {/*</div>*/}
                {/*<div className="form-group">*/}
                {/*    <label className="float-left" htmlFor="website">Website</label>*/}
                {/*    <input type="text" className="form-control" id="website" value={user.website} readOnly={true}/>*/}
                {/*</div>*/}
            </form>
        </div>
    );
}

export default UserViewEntry;
