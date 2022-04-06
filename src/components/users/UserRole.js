import Select from "../common/form/Select";
import React, {useEffect, useState} from "react";
import Loading from "../common/Loading";
import RoleService from "../roles/RoleService";
import {sortArray} from "../../utils/arrayUtils";
import {useParams} from "react-router-dom";
import UserService from "./UserService";

const UserRole = (props) => {

    const params = useParams();
    const userService = new UserService();
    const roleService = new RoleService();

    const [user, setUser] = useState({});
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const userId = params.id;
        const user = {...user};
        user.userId =userId;
        setUser(user);

        roleService.getRoles().then(data => {
            const roles = sortArray(data, 'name');
            setRoles(roles);
        })
    }, []);

    const handleCreate = (e) => {
        const userId = params.id;;
        user.userId = userId;
        userService.createUserRole(user).then(data => {
            window.location.href = `/users/${data.userId}/edit`;
        });
    }

    const handleCancel = (e) => {
        window.location.href = `/users/${user.userId}/roles`;
    }

    const handleFormChange = (user) => {
        setUser(user);
    }

    const onFormChange = (e) => {
        let user = {...props.user};
        user[e.target.id] = e.target.value;
        handleFormChange(user)
    }

    const isFormValid = () => {
        let formData = user;

        if (!formData.roleId) {
            return false;
        }
        return true;
    }

    if (!roles) {
        return <Loading />
    }

    return (
        <div className="p-4">
            <h1>Add User Role</h1>

            <form onChange={onFormChange}>
                <Select
                    label="Roles"
                    id="roleId"
                    name="name"
                    options={roles}
                    selected={user.roleId}
                    required={true}
                />
            </form>

            <div className="mb-3">
                <button type="button" className="btn btn-outline-primary float-end" onClick={handleCreate} disabled={!isFormValid()}>Create</button>
                <button type="button" className="btn btn-outline-secondary float-end me-1" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default UserRole;
