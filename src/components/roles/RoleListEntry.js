import RoleService from "./RoleService";
import React, {useEffect, useState} from "react";
import {sortArray} from "../../utils/arrayUtils";
import Loading from "../common/Loading";
import {Link} from "react-router-dom";
import {confirm} from "../common/modal/confirm";

const RoleListEntry = (props) => {

    const roleService = new RoleService();
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        roleService.getRoles().then(data => {
            const roles = sortArray(data, 'name');
            setRoles(roles);
        })
    }, []);

    const handleAdd = () => {
        window.location.href = "/roles/create";
    }

    const handleDelete = (roleId) => {
        confirm("Are you sure you want to delete this role?", (res) => {
            if (res) {
                roleService.deleteRole(roleId).then(data => {
                    window.location.pathname = `/roles`;
                });
            }
        })
    }

    if (!roles) {
        return <Loading/>;
    }

    return (
        <div className="p-4">
            <div className="row row-cols-2">
                <div className="col">
                    <h1>Role List</h1>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-outline-primary float-end" onClick={handleAdd}>Add</button>
                </div>
            </div>

            <table className="table table-hover">
                <thead className="thead-dark">
                <tr>
                    <th colSpan="1">#</th>
                    <th colSpan="1">ID</th>
                    <th colSpan="1">Name</th>
                    <th colSpan="1">Description</th>
                    <th colSpan="1">Created At</th>
                    <th colSpan="1">Action</th>
                </tr>
                </thead>
                <tbody>
                {roles.length ? roles.map((role, index) => (
                    <tr key={role.roleId}>
                        <td>{(index + 1)}</td>
                        <td>{role.roleId}</td>
                        <td><Link to={`/roles/${role.roleId}`}>{role.name}</Link></td>
                        <td>{role.description}</td>
                        <td>{role.createdAt}</td>
                        <td>
                            <div className={"float-end"}>
                                <Link to={`/roles/${role.roleId}/edit`}>
                                    <i className="fa-regular fa-pen-to-square pe-2"/>
                                </Link>
                                <a className="pl-md-1 text-danger" style={{cursor: "pointer"}} onClick={() => handleDelete(role.roleId)}>
                                    <i className="fa-regular fa-trash-can pe-2"/>
                                </a>
                            </div>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan="9">No roles</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default RoleListEntry;
