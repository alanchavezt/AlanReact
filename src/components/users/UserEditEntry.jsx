import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import './Users.css';
import UserFormEntry from './UserFormEntry';
import UserService from "../../services/UserService";
import Loading from "../common/Loading";
import {confirm} from "../common/modal/confirm";
import RoleService from "../../services/RoleService";
import {sortArray} from "../../utils/arrayUtils";

const UserEditEntry = (props) => {

    const params = useParams();
    const userService = new UserService();
    const roleService = new RoleService();

    const [modalShow, setModalShow] = useState(false);
    const [user, setUser] = useState();
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const userId = params.id;
        userService.getUser(userId).then(data => {
            setUser(data);
        });

        roleService.getRoles().then(data => {
            const roles = sortArray(data, 'name');
            setRoles(roles);
        })
    },[]);

    const handleFormChange = (user) => {
        setUser(user);
    }

    const handleSave = (e) => {
        userService.updateUser(user).then(data => {
            setUser(data);
            window.location.href = "/users";
        });
    }

    const handleDelete = (e) => {
        const userId = user.userId;
        confirm("Are you sure you want to delete this user?", (res) => {
            if (res) {
                userService.deleteUser(userId).then(data => {
                    window.location.pathname = `/users`;
                });
            }
        })
    }

    const isFormValid = () => {
        let formData = user;

        if (!formData.username) {
            return false;
        }
        if (!formData.firstName) {
            return false;
        }
        if (!formData.lastName) {
            return false;
        }
        if (!formData.email) {
            return false;
        }
        return true;
    }

    if (!user || !roles || !roles.length) {
        return <Loading />
    }

    return (
        <div className="p-4">
            <h1>Edit User</h1>
            <UserFormEntry user={user} roles={roles} onChange={handleFormChange}/>

            <div className="mb-3">
                <button type="button" className="btn btn-outline-primary float-end" onClick={handleSave} disabled={!isFormValid()}>Save</button>
                <button type="button" className="btn btn-outline-danger float-end me-1" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default UserEditEntry;
