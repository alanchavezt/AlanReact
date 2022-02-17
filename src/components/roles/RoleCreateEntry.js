import RoleService from "./RoleService";
import React, {useState} from "react";
import Loading from "../common/Loading";
import RoleFormEntry from "./RoleFormEntry";

const RoleCreateEntry = (props) => {

    const roleService = new RoleService();
    const [role, setRole] = useState({});

    const handleFormChange = (role) => {
        setRole(role);
    }

    const handleCreate = (e) => {
        roleService.createRole(role).then(data => {
            window.location.href = `/roles/${data.roleId}/edit`;
        });
    }

    const handleCancel = (e) => {
        window.location.href = `/roles`;
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
            <h1>Add Role</h1>
            <RoleFormEntry role={role} onChange={handleFormChange}/>

            <div className="mb-3">
                <button type="button" className="btn btn-outline-primary float-end" onClick={handleCreate} disabled={!isFormValid()}>Create</button>
                <button type="button" className="btn btn-outline-secondary float-end me-1" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default RoleCreateEntry;
