import React from 'react';
import './Users.css';
import Loading from "../common/Loading";
import InputText from "../common/form/InputText";
import {PropTypes} from "prop-types";
import CheckBox from "../common/form/CheckBox";

export default class UserFormEntry extends React.Component {

    constructor(props) {
        super(props);
    }

    onFormChange = (e) => {
        let user = this.props.user;
        user[e.target.name] = e.target.value;

        if (this.props.onChange) {
            this.props.onChange(this.props.user);
        }
    }

    render () {
        if (!this.props.user) {
            return <Loading />
        }
        return (
            <form onChange={this.onFormChange}>
                <InputText
                    label="User ID"
                    id="userId"
                    name="userId"
                    value={this.props.user.userId}
                    readOnly={true}
                />
                <InputText
                    label="Username"
                    id="username"
                    name="username"
                    value={this.props.user.username}
                    required={true}
                />
                <InputText
                    label="Password"
                    id="password"
                    name="password"
                    value={this.props.user.password}
                    required={true}
                />
                <InputText
                    label="First Name"
                    type="password"
                    id="firstName"
                    name="firstName"
                    value={this.props.user.firstName}
                    required={true}
                />
                <InputText
                    label="Middle Name"
                    id="middleName"
                    name="middleName"
                    value={this.props.user.middleName}
                    required={true}
                />
                <InputText
                    label="Last Name"
                    id="lastName"
                    name="lastName"
                    value={this.props.user.lastName}
                    required={true}
                />
                <InputText
                    label="Email address"
                    id="email"
                    name="email"
                    value={this.props.user.email}
                    required={true}
                />
                {/*<InputText*/}
                {/*    label="Phone"*/}
                {/*    id="phone"*/}
                {/*    name="phone"*/}
                {/*    value={this.props.user.phone}*/}
                {/*    onChange={this.onFormChange}*/}
                {/*    required={true}*/}
                {/*/>*/}
                {/*<InputText*/}
                {/*    label="Website"*/}
                {/*    id="website"*/}
                {/*    name="website"*/}
                {/*    value={this.props.user.website}*/}
                {/*    onChange={this.onFormChange}*/}
                {/*    required={true}*/}
                {/*/>*/}
                {/*<CheckBox*/}
                {/*    label="Check me out"*/}
                {/*    id="checkMeOut"*/}
                {/*    name="checkMeOut"*/}
                {/*    checked={true}*/}
                {/*    onChange={this.onFormChange}*/}
                {/*/>*/}
            </form>
        );
    }
}

UserFormEntry.propTypes = {
    user: PropTypes.object
}
