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

    render () {
        if (!this.state.user) {
            return <Loading />
        }
        return (
            <div className="container">
                <h1>Edit User</h1>
                <UserFormEntry user={this.state.user} onChange={this.onFormChange}/>
                <div className="form-group">
                    <button type="button" className="btn btn-primary float-right">Save</button>
                    <button type="button" className="btn btn-danger float-right">Delete</button>
                </div>
            </div>
        );
    }
}
