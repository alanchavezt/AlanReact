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
                    label="First Name"
                    id="firstName"
                    name="firstName"
                    value={this.props.user.firstName || this.props.user.name}
                    // onChange={this.onFormChange}
                    required={true}
                />
                <InputText
                    label="Last Name"
                    id="lastName"
                    name="lastName"
                    value={this.props.user.lastName || ""}
                    // onChange={this.onFormChange}
                    required={true}
                />
                <InputText
                    label="Username"
                    id="username"
                    name="username"
                    value={this.props.user.username}
                    // onChange={this.onFormChange}
                    required={true}
                />
                <InputText
                    label="Email address"
                    id="email"
                    name="email"
                    value={this.props.user.email}
                    // onChange={this.onFormChange}
                    required={true}
                />

                {/*<div className="form-group">*/}
                {/*    <label className="float-left" htmlFor="email">Email address</label>*/}
                {/*    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.props.user.email}/>*/}
                {/*    <small id="emailHelp" className="form-text text-muted float-right">We'll never share your email with*/}
                {/*        anyone else.</small>*/}
                {/*</div>*/}
                {/*<div className="form-group">*/}
                {/*    <label className="float-left" htmlFor="password">Password</label>*/}
                {/*    <input type="password" className="form-control" id="password"/>*/}
                {/*</div>*/}

                <InputText
                    label="Phone"
                    id="phone"
                    name="phone"
                    value={this.props.user.phone}
                    onChange={this.onFormChange}
                    required={true}
                />
                <InputText
                    label="Website"
                    id="website"
                    name="website"
                    value={this.props.user.website}
                    onChange={this.onFormChange}
                    required={true}
                />
                <CheckBox
                    label="Check me out"
                    id="checkMeOut"
                    name="checkMeOut"
                    checked={true}
                    onChange={this.onFormChange}
                />
            </form>
        );
    }
}

UserFormEntry.propTypes = {
    user: PropTypes.object
}
