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

    handleCreate = (e) => {
        const user = this.state.user;

        this.userService.createUser(user).then(data => {
            window.location.href = `/users/${data.userId}/edit`;
        });
    }

    isFormValid = () => {
        let formData = this.state.user;

        if (!formData.username) {
            return false;
        }
        if (!formData.password) {
            return false;
        }
        if (!formData.firstName) {
            return false;
        }
        if (!formData.lastName) {
            return false;
        }
        return true;
    }

    render () {
        if (!this.state.user) {
            return <Loading />
        }
        return (
            <div className="container">
                <h1>Add User</h1>
                <UserFormEntry user={this.state.user} onChange={this.onFormChange}/>
                <button type="submit" className="btn btn-primary float-right" onClick={this.handleCreate} disabled={!this.isFormValid()}>Create</button>
            </div>
        );
    }
}

