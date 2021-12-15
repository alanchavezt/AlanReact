import React, {useState} from 'react';
import './Users.css';
import UserFormEntry from './UserFormEntry';
import UserService from "./UserService";
import Loading from "../common/Loading";

const UserCreateEntry =  (props) => {

    const userService = new UserService();
    const [user, setUser] = useState({});

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
        if (!formData.password) {
            return false;
        }
        if (!formData.firstName) {
            return false;
        }
        if (!formData.lastName) {
            return false;
        }
        return true;
    }

    if (!user) {
        return <Loading />
    }

    return (
        <div className="p-4">
            <h1>Add User</h1>
            <UserFormEntry user={user} onChange={handleFormChange}/>

            <div className="mb-3">
                <button type="button" className="btn btn-outline-primary float-end" onClick={handleCreate} disabled={!isFormValid()}>Create</button>
                <button type="button" className="btn btn-outline-secondary float-end me-1" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default UserCreateEntry;

