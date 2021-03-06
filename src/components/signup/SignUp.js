import React, {useState} from "react";
import InputText from "../common/form/InputText";
import SignUpService from "../../services/SignUpService";
import "./SignUp.css";

const SignUp = (props) => {

    const signUpService = new SignUpService();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };

        signUpService.signUpUser(user).then(data => {
            window.location.href = `/signin`;
        });
    }

    return (
        <div className="container" style={{padding: "40px"}}>
            <div className="SignUp">
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <InputText
                        label="First Name"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required={true}
                    />
                    <InputText
                        label="Last Name"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e => setLastName(e.target.value))}
                        required={true}
                    />
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
                    <InputText
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e => setConfirmPassword(e.target.value))}
                        required={true}
                    />
                    <button type="submit" className="btn btn-outline-primary btn-lg btn-block" disabled={!validateForm()}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
