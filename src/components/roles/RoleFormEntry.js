import Loading from "../common/Loading";
import React from "react";
import InputText from "../common/form/InputText";
import PropTypes from "prop-types";

const RoleFormEntry = (props) => {

    const onFormChange = (e) => {
        let role = {...props.role};
        role[e.target.name] = e.target.value;

        if (props.onChange) {
            props.onChange(role);
        }
    }

    if (!props.role) {
        return <Loading />
    }

    return (
        <form onChange={onFormChange}>
            <InputText
                label="Role ID"
                id="roleId"
                name="roleId"
                value={props.role.roleId}
                readOnly={true}
            />
            <InputText
                label="Name"
                id="name"
                name="name"
                value={props.role.name}
                required={true}
            />
            <InputText
                label="Description"
                id="description"
                name="description"
                value={props.role.description}
                required={true}
            />
        </form>
    );
}

RoleFormEntry.propTypes = {
    role: PropTypes.object
}

export default RoleFormEntry;
