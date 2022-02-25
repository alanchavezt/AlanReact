import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Users.css';
import UserService from "./UserService";
import Loading from '../common/Loading';
import {sortArray} from "../../utils/arrayUtils";
import RoleService from "../roles/RoleService";

const UserViewEntry = (props) => {

    const params = useParams();
    const userService = new UserService();
    const roleService = new RoleService();

    const [user, setUser] = useState();
    const [roles, setRoles] = useState([]);
    const [userRole, setUserRole] = useState({});

    useEffect(() => {
        const userId = params.id;
        userService.getUser(userId).then(data => {
            const user = {...data};
            setUser(data);

            /** todo: The user role should be already sent back by the API */
            roleService.getRoles().then(data => {
                const roles = sortArray(data, 'name');
                setRoles(roles);

                const userRole = roles.find(role => role.roleId === user.roleId);
                setUserRole(userRole)
            })
        });
    }, []);

    if (!user || !roles.length || !userRole) {
        return <Loading />
    }

    return (
        <div className="p-4">
            <h1>User</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="userId">User ID</label>
                    <input type="text" className="form-control" id="userId" value={user.userId} readOnly={true}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" value={user.username} readOnly={true}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" value={user.firstName} readOnly={true}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="middleName">Middle Name</label>
                    <input type="text" className="form-control" id="middleName" value={user.middleName || ""} readOnly={true}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName"value={user.lastName} readOnly={true}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={user.email || ""} readOnly={true}/>
                    <small id="emailHelp" className="form-text text-muted float-right">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="mb-3">
                    <label htmlFor="role">Role</label>
                    <input type="text" className="form-control" id="role" value={userRole.name || ""} readOnly={true}/>
                </div>
                {/*<div className="mb-3">*/}
                {/*    <label htmlFor="phone">Phone</label>*/}
                {/*    <input type="text" className="form-control" id="phone" value={user.phone} readOnly={true}/>*/}
                {/*</div>*/}
                {/*<div className="mb-3">*/}
                {/*    <label htmlFor="website">Website</label>*/}
                {/*    <input type="text" className="form-control" id="website" value={user.website} readOnly={true}/>*/}
                {/*</div>*/}
            </form>
        </div>
    );
}

export default UserViewEntry;
