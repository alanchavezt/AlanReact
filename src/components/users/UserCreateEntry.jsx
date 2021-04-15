import React from 'react';
import './Users.css';
import UserFormEntry from './UserFormEntry';
import UserService from "./UserService";
import Loading from "../common/Loading";

export default class UserCreateEntry extends React.Component {

    userService = new UserService();

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    onFormChange = (user) => {
        this.setState({user});
    }

    render () {
        if (!this.state.user) {
            return <Loading />
        }
        return (
            <div className="container">
                <h1>Add User</h1>
                <UserFormEntry user={this.state.user} onChange={this.onFormChange}/>
                <button type="submit" className="btn btn-primary float-right">Save</button>
            </div>
        );
    }
}

