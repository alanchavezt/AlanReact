import React, {useState} from 'react';
import './Users.css';
import Loading from "../common/Loading";
import InputText from "../common/form/InputText";
import PropTypes from "prop-types";
import CheckBox from "../common/form/CheckBox";

const UserFormEntry = (props) => {

    const onFormChange = (e) => {
        let user = {...props.user};
        user[e.target.name] = e.target.value;

        if (props.onChange) {
            props.onChange(user);
        }
    }

    if (!props.user) {
        return <Loading />
    }

    return (
        <form onChange={onFormChange}>
            <InputText
                // style={{display: props.user.userId ? "inline" : "none"}}
                label="User ID"
                id="userId"
                name="userId"
                value={props.user.userId}
                readOnly={true}
            />
            <InputText
                label="Username"
                id="username"
                name="username"
                value={props.user.username}
                required={true}
            />
            <InputText
                label="First Name"
                id="firstName"
                name="firstName"
                value={props.user.firstName}
                required={true}
            />
            <InputText
                label="Middle Name"
                id="middleName"
                name="middleName"
                value={props.user.middleName}
                required={true}
            />
            <InputText
                label="Last Name"
                id="lastName"
                name="lastName"
                value={props.user.lastName}
                required={true}
            />
            <InputText
                label="Email address"
                id="email"
                name="email"
                value={props.user.email}
                required={true}
            />
            {/*<InputText*/}
            {/*    label="Phone"*/}
            {/*    id="phone"*/}
            {/*    name="phone"*/}
            {/*    value={props.user.phone}*/}
            {/*    onChange={onFormChange}*/}
            {/*    required={true}*/}
            {/*/>*/}
            {/*<InputText*/}
            {/*    label="Website"*/}
            {/*    id="website"*/}
            {/*    name="website"*/}
            {/*    value={props.user.website}*/}
            {/*    onChange={onFormChange}*/}
            {/*    required={true}*/}
            {/*/>*/}
            {/*<CheckBox*/}
            {/*    label="Check me out"*/}
            {/*    id="checkMeOut"*/}
            {/*    name="checkMeOut"*/}
            {/*    checked={true}*/}
            {/*    onChange={onFormChange}*/}
            {/*/>*/}
        </form>
    );
}

UserFormEntry.propTypes = {
    user: PropTypes.object
};

export default UserFormEntry;
