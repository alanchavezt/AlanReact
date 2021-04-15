import React from 'react';
import './Users.css';
import Loading from "../common/Loading";

export default class UserFormEntry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };
    }

    onFormChange = (e) => {
        let user = this.state.user;
        user[e.target.name] = e.target.value;
        this.setState({user}, () => {
            if (this.props.onChange) {
                this.props.onChange(this.state.user);
            }
        });
    }

    render () {
        if (!this.state.user) {
            return <Loading />
        }
        return (
            <form onChange={this.onFormChange}>
                <div className="form-group">
                    <label className="float-left" htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" defaultValue={this.state.user.name}/>
                </div>
                {/*<div className="form-group">*/}
                {/*    <label className="float-left" htmlFor="lastName">Last Name</label>*/}
                {/*    <input type="text" className="form-control" id="lastName"/>*/}
                {/*</div>*/}
                <div className="form-group">
                    <label className="float-left" htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" defaultValue={this.state.user.username}/>
                </div>
                <div className="form-group">
                    <label className="float-left" htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" defaultValue={this.state.user.email}/>
                    <small id="emailHelp" className="form-text text-muted float-right">We'll never share your email with
                        anyone else.</small>
                </div>
                {/*<div className="form-group">*/}
                {/*    <label className="float-left" htmlFor="password">Password</label>*/}
                {/*    <input type="password" className="form-control" id="password"/>*/}
                {/*</div>*/}
                <div className="form-group">
                    <label className="float-left" htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" defaultValue={this.state.user.phone}/>
                </div>
                <div className="form-group">
                    <label className="float-left" htmlFor="website">Website</label>
                    <input type="text" className="form-control" id="website" defaultValue={this.state.user.website}/>
                </div>
            </form>
        );
    }
}

// UserFormEntry.propTypes = {
//     user: PropTypes.object
// }
