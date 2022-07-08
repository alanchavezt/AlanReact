import React, { useState } from 'react';
import SignInService from "../../services/SignInService";
import {setUserSession} from '../../utils/Common';
import InputText from "../common/form/InputText";
import "./SignIn.css";

const SignIn = (props) => {

    const signInService = new SignInService();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const username = useFormInput('');
    // const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSignIn = () => {
        setError(null);
        setLoading(true);

        // axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
        signInService.signIn({email: email, password: password}).then(data => {
            setLoading(false);
            setUserSession(data.token, data.user);
            // todo: check the difference between push and href
            // props.history.push('/dashboard');
            window.location.href = "/dashboard";
        }).catch(error => {
            setLoading(false);
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });
    }

    return (
        <div className="container" style={{padding: "40px"}}>
            <div className="SignIn">
                <form>
                    <h1>Sign In</h1>
                    {/*<p>(Access without token only)</p>*/}

                    <InputText
                        label="Email address"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e => setEmail(e.target.value))}
                        required={true}
                    />
                    <InputText
                        label="Password"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e => setPassword(e.target.value))}
                        required={true}
                    />

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    <div className="d-grid col">
                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-lg btn-block"
                            value={loading ? 'Loading...' : 'Login'}
                            onClick={handleSignIn}
                            disabled={loading}
                        >Sign In
                        </button>
                    </div>

                    {/*<div>*/}
                    {/*    Username<br/>*/}
                    {/*    <input type="text" {...username} autoComplete="new-password"/>*/}
                    {/*</div>*/}
                    {/*<div style={{ marginTop: 10 }}>*/}
                    {/*    Password<br />*/}
                    {/*    <input type="password" {...password} autoComplete="new-password"/>*/}
                    {/*</div>*/}

                    {/*{error && (*/}
                    {/*    <React.Fragment>*/}
                    {/*        <small style={{ color: 'red' }}>{error}</small>*/}
                    {/*        <br />*/}
                    {/*    </React.Fragment>*/}
                    {/*)}*/}

                    {/*<br />*/}
                    {/*<input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleSignIn} disabled={loading} /><br/>*/}
                </form>
            </div>
        </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    }
}

export default SignIn;
