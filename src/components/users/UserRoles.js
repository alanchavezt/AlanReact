import React, {useEffect, useState} from 'react';
import './Users.css';
import {Link, useParams} from "react-router-dom";
import UserService from "../../services/UserService";
import Loading from '../common/Loading';
import {confirm} from "../common/modal/confirm";
import {sortArray} from "../../utils/arrayUtils";

const UserRoles = (props) => {

    const params = useParams();
    const userService = new UserService();
    const [userId, setUserId] = useState("");
    const [userRoles, setUserRoles] = useState([]);

    useEffect(() => {
        const userId = params.id;
        setUserId(userId);

        userService.getUserRoles(userId).then(data => {
            const userRoles = sortArray(data, 'name');
            setUserRoles(userRoles);
        });
    }, []);

    const handleAdd = () => {
        window.location.href = `/users/${userId}/roles/create`;
    }

    const handleDelete = (userId) => {
        // confirm("Are you sure you want to delete this user?", (res) => {
        //     if (res) {
        //         userService.deleteUser(userId).then(data => {
        //             window.location.pathname = `/users`;
        //         });
        //     }
        // })
    }

    if (!userRoles) {
        return <Loading/>;
    }

    return (
        <div className="p-4">
            <div className="row row-cols-2">
                <div className="col">
                    <h1>User Roles</h1>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-outline-primary float-end" onClick={handleAdd}>Add</button>
                </div>
            </div>

            <table className="table table-hover">
                <thead className="thead-dark">
                <tr>
                    <th colSpan="1">#</th>
                    <th colSpan="1">Role ID</th>
                    <th colSpan="1">Name</th>
                    <th colSpan="1">Description</th>
                    <th colSpan="1">Created At</th>
                    <th colSpan="1">Action</th>
                </tr>
                </thead>
                <tbody>
                {userRoles.length ? userRoles.map((role, index) => (
                    <tr key={role.roleId}>
                        <td>{(index + 1)}</td>
                        <td>{role.roleId}</td>
                        <td>{role.name}</td>
                        <td>{role.description}</td>
                        <td>{role.createdAt}</td>
                        <td>
                            <a className="pl-md-1 text-danger" style={{cursor: "pointer"}} onClick={() => handleDelete(role.roleId)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fillRule="evenodd"
                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </a>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan="9">No user roles</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default UserRoles;

