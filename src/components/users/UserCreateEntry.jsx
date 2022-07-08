import React, {useEffect, useState} from 'react';
import './Users.css';
import UserFormEntry from './UserFormEntry';
import UserService from "../../services/UserService";
import Loading from "../common/Loading";
import {sortArray} from "../../utils/arrayUtils";
import RoleService from "../../services/RoleService";

const UserCreateEntry =  (props) => {

    const userService = new UserService();
    const roleService = new RoleService();

    const [user, setUser] = useState({});
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        roleService.getRoles().then(data => {
            const roles = sortArray(data, 'name');
            setRoles(roles);
        })
    }, []);

    const handleFormChange = (user) => {
        setUser(user);
    }

    const handleCreate = (e) => {
        userService.createUser(user).then(data => {
            window.location.href = `/users/${data.userId}/edit`;
        });
    }

    const handleCancel = (e) => {
        window.location.href = `/users`;
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
            <h1>Add User</h1>
            <UserFormEntry user={user} roles={roles} onChange={handleFormChange}/>

            <div className="mb-3">
                <button type="button" className="btn btn-outline-primary float-end" onClick={handleCreate} disabled={!isFormValid()}>Create</button>
                <button type="button" className="btn btn-outline-secondary float-end me-1" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default UserCreateEntry;

