import React, {useEffect, useState} from 'react';
import './Users.css';
import UserFormEntry from './UserFormEntry';
import UserService from "./UserService";
import Loading from "../common/Loading";

export default class UserEditEntry extends React.Component {

    userService = new UserService();

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.userService.getUser(this.props.match.params.id).then(data => {
            let user = data;
            this.setState({user});
            console.log(user);
        });
    }

    onFormChange = (user) => {
        this.setState({user});
    }

    handleSave = (e) => {
        const user = this.state.user;

        this.userService.updateUser(user).then(data => {
            this.setState({user: data});
            window.location.href = "/users";
        });
    }

    handleDelete = (e) => {
        const userId = this.state.user.userId;

        this.userService.deleteUser(userId).then(data => {
            // window.location.href = "/users";
            window.location.pathname = `/users`;
        });

        // confirm("Are you sure you want to delete this user?", (res) => {
        //     if (res) {
        //         this.http.delete(`/api/edit/user/${this.props.itemSummaries.user.id}`).then(res => {
        //             window.location.pathname = `/admin/user/admin/all`;
        //         });
        //     }
        // })
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
            <div className="container" style={{padding: "40px"}}>
                <h1>Edit User</h1>
                <UserFormEntry user={this.state.user} onChange={this.onFormChange}/>
                <div className="form-group">
                    <button type="button" className="btn btn-primary float-right" onClick={this.handleSave} disabled={!this.isFormValid()}>Save</button>
                    <button type="button" className="btn btn-danger float-right" onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        );
    }
}
