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
                            <Link to={`/roles/${role.roleId}/edit`}>
                                    <span className="pl-md-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                            <path
                                                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                        </svg>
                                    </span>
                            </Link>
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
                        <td colSpan="9">No roles</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default RoleListEntry;
