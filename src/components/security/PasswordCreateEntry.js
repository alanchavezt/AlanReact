import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";
import InputText from "../common/form/InputText";
import UserPasswordService from "./UserPasswordService";

const PasswordCreateEntry = (props) => {

    const params = useParams();
    const userPasswordService = new UserPasswordService();

    const [user, setUser] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        let user = {...user};
        user.userId = params.id;
        setUser(user);
    },[]);

    const handleSave = (e) => {
        userPasswordService.createUserPassword(user).then(data => {
            // setUser(data);
            window.location.href = "/users";
        }).catch(error => {
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Password change went wrong. Please try again later.");
        });
    }

    const handleFormChange = (e) => {
        let newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    const handleCancel = (e) => {
        window.location.href = `/users`;
    }

    const isFormValid = () => {
        let formData = user;

        if (!formData.password) {
            return false;
        }
        if (!formData.confirmPassword) {
            return false;
        }
        return true;
    }

    if (!user) {
        return <Loading />
    }

    return (
        <div className="p-4">
            <h1>New Password</h1>

            <form onChange={handleFormChange}>
                <InputText
                    label="New Password"
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    required={true}
                />
                <InputText
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    required={true}
                />

                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
            </form>

            <div className="mb-3">
                <button type="button" className="btn btn-outline-primary float-end" onClick={handleSave} disabled={!isFormValid()}>Save</button>
                <button type="button" className="btn btn-outline-secondary float-end me-1" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

PasswordCreateEntry.propTypes = {
};

export default PasswordCreateEntry;
