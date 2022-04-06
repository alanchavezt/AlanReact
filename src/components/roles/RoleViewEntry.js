import {useParams} from "react-router-dom";
import RoleService from "./RoleService";
import React, {useEffect, useState} from "react";
import Loading from "../common/Loading";

const RoleViewEntry = (props) => {

    const params = useParams();
    const roleService = new RoleService();
    const [role, setRole] = useState();

    useEffect(() => {
        const roleId = params.id;
        roleService.getRole(roleId).then(data => {
            setRole(data);
        });
    }, []);

    if (!role) {
        return <Loading />
    }

    return (
        <div className="p-4">
            <h1>Role</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="roleId">Role ID</label>
                    <input type="text" className="form-control" id="roleId" value={role.roleId} readOnly={true}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={role.name} readOnly={true}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" value={role.description} readOnly={true}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="createdAt">Created At</label>
                    <input type="text" className="form-control" id="createdAt" value={role.createdAt} readOnly={true}/>
                </div>
            </form>
        </div>
    );
};

export default RoleViewEntry;
