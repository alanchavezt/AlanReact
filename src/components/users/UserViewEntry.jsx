import React, { useState, useEffect } from 'react';
import './Users.css';
import UserService from "./UserService";
import Loading from '../common/Loading';

export default class UserViewEntry extends React.Component {

    userService = new UserService();

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.userService.getUser(this.props.match.params.id).then(data => {
            let user = data;
            this.setState({user});
        });
    }

    render () {
        if (!this.state.user) {
            return <Loading />
        }
        return (
            <div style={{paddingTop: "40px"}}>
                <h1>User</h1>
                <form>
                    <div className="form-group">
                        <label className="float-left" htmlFor="userId">User ID</label>
                        <input type="text" className="form-control" id="userId" value={this.state.user.userId} readOnly={true}/>
                    </div>
                    <div className="form-group">
                        <label className="float-left" htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" value={this.state.user.username} readOnly={true}/>
                    </div>
                    <div className="form-group">
                        <label className="float-left" htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" value={this.state.user.password} readOnly={true}/>
                    </div>
                    <div className="form-group">
                        <label className="float-left" htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" value={this.state.user.firstName} readOnly={true}/>
                    </div>
                    <div className="form-group">
                        <label className="float-left" htmlFor="middleName">Middle Name</label>
                        <input type="text" className="form-control" id="middleName" value={this.state.user.middleName || ""} readOnly={true}/>
                    </div>
                    <div className="form-group">
                        <label className="float-left" htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName"value={this.state.user.lastName} readOnly={true}/>
                    </div>
                    <div className="form-group">
                        <label className="float-left" htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.user.email || ""} readOnly={true}/>
                        <small id="emailHelp" className="form-text text-muted float-right">We'll never share your email
                            with anyone else.</small>
                    </div>
                    {/*<div className="form-group">*/}
                    {/*    <label className="float-left" htmlFor="phone">Phone</label>*/}
                    {/*    <input type="text" className="form-control" id="phone" value={this.state.user.phone} readOnly={true}/>*/}
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                    {/*    <label className="float-left" htmlFor="website">Website</label>*/}
                    {/*    <input type="text" className="form-control" id="website" value={this.state.user.website} readOnly={true}/>*/}
                    {/*</div>*/}
                </form>
            </div>
        );
    }
}
