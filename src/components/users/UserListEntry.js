import React, {useEffect, useState} from 'react';
import './Users.css';
import {Link} from "react-router-dom";
import UserService from "./UserService";
import Loading from '../common/Loading';
import {confirm} from "../common/modal/confirm";
import {sortArray} from "../../utils/arrayUtils";
import ACTModal from "../common/actModal/ACTModal";

const UserListEntry = (props) => {

    const userService = new UserService();
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        userService.getUsers().then(data => {
            const users = sortArray(data, 'firstName');
            setUsers(users);
        });
    }, []);

    const handleAdd = () => {
        window.location.href = "/users/create";
    }

    const handleDelete = (userId) => {
        confirm("Are you sure you want to delete this user?", (res) => {
            if (res) {
                userService.deleteUser(userId).then(data => {
                    window.location.pathname = `/users`;
                });
            }
        })
    }

    if (!users) {
        return <Loading/>;
    }

    return (
        <div className="p-4">
            <div className="row row-cols-2">
                <div className="col">
                    <h1>User List</h1>
                </div>

                <button onClick={() => setShow(true)}>Show Modal</button>
                <ACTModal
                    title={"My Modal"}
                    show={show}
                    onClose={() => setShow(false)}
                >
                    <p>This is the modal body</p>
                </ACTModal>

                <div className="col">
                    <button type="submit" className="btn btn-outline-primary float-end" onClick={handleAdd}>Add</button>
                </div>
            </div>

            <table className="table table-hover">
                <thead className="thead-dark">
                <tr>
                    <th colSpan="1">#</th>
                    <th colSpan="1">ID</th>
                    <th colSpan="1">Username</th>
                    <th colSpan="1">First Name</th>
                    <th colSpan="1">Middle Name</th>
                    <th colSpan="1">Last Name</th>
                    <th colSpan="1">Email</th>
                    <th colSpan="1">Action</th>
                </tr>
                </thead>
                <tbody>
                {users.length ? users.map((user, index) => (
                    <tr key={user.userId}>
                        <td>{(index + 1)}</td>
                        <td>{user.userId}</td>
                        <td>{user.username}</td>
                        <td><Link to={`/users/${user.userId}`}>{user.firstName}</Link></td>
                        <td>{user.middleName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>
                            <div className={"float-end"}>
                                <Link to={`/users/${user.userId}/edit`}>
                                    <i className="fa-regular fa-pen-to-square pe-2"/>
                                </Link>
                                <a className="pl-md-1 text-danger" style={{cursor: "pointer"}} onClick={() => handleDelete(user.userId)}>
                                    <i className="fa-regular fa-trash-can pe-2"/>
                                </a>
                            </div>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan="9">No users</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default UserListEntry;

