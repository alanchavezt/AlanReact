import {useParams} from "react-router-dom";
import RoleService from "../../services/RoleService";
import React, {useEffect, useState} from "react";
import {confirm} from "../common/modal/confirm";
import Loading from "../common/Loading";
import RoleFormEntry from "./RoleFormEntry";

const RoleEditEntry = (props) => {

    const params = useParams();
    const roleService = new RoleService();
    const [modalShow, setModalShow] = useState(false);
    const [role, setRole] = useState();

    useEffect(() => {
        const roleId = params.id;
        roleService.getRole(roleId).then(data => {
            setRole(data);
        });
    },[]);

    const handleFormChange = (role) => {
        setRole(role);
    }

    const handleSave = (e) => {
        roleService.updateRole(role).then(data => {
            setRole(data);
            window.location.href = "/roles";
        });
    }

    const handleDelete = (e) => {
        const roleId = role.roleId;
        confirm("Are you sure you want to delete this role?", (res) => {
            if (res) {
                roleService.deleteRole(roleId).then(data => {
                    window.location.pathname = `/roles`;
                });
            }
        })
    }

    const isFormValid = () => {
        let formData = role;

        if (!formData.name) {
            return false;
        }
        if (!formData.description) {
            return false;
        }
        return true;
    }

    if (!role) {
        return <Loading />
    }

    return (
        <div className="p-4">
            <h1>Edit Role</h1>
            <RoleFormEntry role={role} onChange={handleFormChange}/>

            <div className="mb-3">
                <button type="button" className="btn btn-outline-primary float-end" onClick={handleSave} disabled={!isFormValid()}>Save</button>
                <button type="button" className="btn btn-outline-danger float-end me-1" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default RoleEditEntry;
