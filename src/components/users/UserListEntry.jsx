import React, {useEffect, useState} from 'react';
import './Users.css';
import {Link} from "react-router-dom";
import UserService from "./UserService";
import Loading from '../common/Loading';

export default class UserListEntry extends React.Component {

    userService = new UserService();

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.userService.getUsers().then(data => {
            let users = data;
            this.setState({users});
        });
    }

    onAddClick = () => {
        window.location.href = "/users/create";
    }

    render () {
        if (!this.state.users) {
            return <Loading />
        }
        return (
            <div style={{paddingTop: "40px"}}>
                <div className="row row-cols-2">
                    <div className="col"><h1 className="float-left">User List</h1></div>
                    <div className="col">
                        <button type="submit" className="btn btn-outline-primary float-right" onClick={this.onAddClick}>Add</button>
                    </div>
                </div>

                <table className="table table-hover">
                    <thead className="thead-dark">
                    <tr>
                        <th colSpan="1">#</th>
                        <th colSpan="1">ID</th>
                        <th colSpan="1">Username</th>
                        <th colSpan="1">Password</th>
                        <th colSpan="1">First Name</th>
                        <th colSpan="1">Middle Name</th>
                        <th colSpan="1">Last Name</th>
                        <th colSpan="1">Email</th>
                        <th colSpan="1">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.length ? this.state.users.map((user, index) => (
                        <tr key={user.userId}>
                            <td>{(index + 1)}</td>
                            <td>{user.userId}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td><Link to={`users/${user.userId}`}>{user.firstName}</Link></td>
                            <td>{user.middleName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`users/${user.userId}/edit`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path
                                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                </Link>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="9">There is not users</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}
