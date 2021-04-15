import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../../utils/Common';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import "./Login.css";

function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // handle button click of login form
    const handleLogin = () => {
        setError(null);
        setLoading(true);

        axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            props.history.push('/dashboard');
        }).catch(error => {
            setLoading(false);
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });
    }

    return (
        <div className="Login">
            Login<br/>
            <small>(Access without token only)</small><br/><br/>
            <div>
                Username<br/>
                <input type="text" {...username} autoComplete="new-password"/>
            </div>
            <div style={{ marginTop: 10 }}>
                Password<br />
                <input type="password" {...password} autoComplete="new-password"/>
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br/>
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

export default Login;



// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//
//     function validateForm() {
//         return email.length > 0 && password.length > 0;
//     }
//
//     function handleSubmit(event) {
//         event.preventDefault();
//     }
//
//     return (
//         <div className="Login">
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group size="lg" controlId="email">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                         autoFocus
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </Form.Group>
//                 <Form.Group size="lg" controlId="password">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </Form.Group>
//                 <Button block size="lg" type="submit" disabled={!validateForm()}>
//                     Login
//                 </Button>
//             </Form>
//         </div>
//     );
// }
