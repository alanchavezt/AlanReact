import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";
import InputText from "../common/form/InputText";
import UserPasswordService from "./UserPasswordService";

const ChangePasswordForm = (props) => {

    const params = useParams();
    const userPasswordService = new UserPasswordService();
    const [user, setUser] = useState({});

    useEffect(() => {
        let user = {...user};
        user.userId = params.id;
        setUser(user);
    },[]);

    const handleSave = (e) => {
        userPasswordService.resetUserPassword(user).then(data => {
            setUser(data);
            window.location.href = "/users";
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

        if (!formData.currentPassword) {
            return false;
        }
        if (!formData.newPassword) {
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
            <h1>Change User Password</h1>

            <form onChange={handleFormChange}>
                <InputText
                    label="Current Password"
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={user.currentPassword}
                    required={true}
                />
                <InputText
                    label="New Password"
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={user.newPassword}
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
            </form>

            <div className="mb-3">
                <button type="button" className="btn btn-outline-primary float-end" onClick={handleSave} disabled={!isFormValid()}>Save</button>
                <button type="button" className="btn btn-outline-secondary float-end me-1" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

ChangePasswordForm.propTypes = {
};

export default ChangePasswordForm;
