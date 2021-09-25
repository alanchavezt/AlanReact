import React from 'react';
import './Users.css';
import UserFormEntry from './UserFormEntry';
import UserService from "./UserService";
import Loading from "../common/Loading";
import {confirm} from "../common/modal/confirm";

export default class UserEditEntry extends React.Component {

    userService = new UserService();

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        };
    }

    componentDidMount() {
        this.userService.getUser(this.props.match.params.id).then(data => {
            let user = data;
            this.setState({user});
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
        confirm("Are you sure you want to delete this user?", (res) => {
            if (res) {
                this.userService.deleteUser(userId).then(data => {
                    window.location.pathname = `/users`;
                });
            }
        })
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
            <div style={{paddingTop: "20px"}}>
                <h1>Edit User</h1>
                <UserFormEntry user={this.state.user} onChange={this.onFormChange}/>
                <div className="form-group">
                    <button type="button" className="btn btn-outline-primary float-right" onClick={this.handleSave} disabled={!this.isFormValid()}>Save</button>
                    <button type="button" className="btn btn-outline-danger float-right mr-1" onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        );
    }
}
