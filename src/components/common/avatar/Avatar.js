import React, {useEffect, useState} from "react";
import "./Avatar.css"
import Loading from "../Loading";
import {getUser, removeUserSession} from "../../../utils/Common";

const Avatar = (props) => {

    const user = getUser();
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        let avatar;

        if(user){
            const firstName = user.firstName.charAt(0).toUpperCase();
            const lastName = user.lastName.charAt(0).toUpperCase();
            const initials = firstName.concat(lastName);

            avatar = generateAvatar(initials, "white", "#6c757d"); // #007398
        }else {
            avatar = generateAvatar("", "white", "#6c757d");
        }

        setAvatar(avatar);
    });

    const generateAvatar = (text, foregroundColor = "white", backgroundColor = "black") => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = 200;
        canvas.height = 200;

        // Draw background
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw text
        context.font = "bold 100px Assistant";
        context.fillStyle = foregroundColor;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(text, canvas.width / 2, canvas.height / 2);

        return canvas.toDataURL("image/png");
    }

    const handleSingOut = () => {
        removeUserSession();
        // props.history.push('/signin');
        window.location.href = "/signin";
    }

    if(!avatar || !user){
        return <Loading/>;
    }

    return (
        <React.Fragment>
            <div className="dropdown">
                <div className="dropdown" data-bs-toggle="dropdown">
                    <img
                        id="avatar"
                        src={avatar}
                        alt="Avatar"
                        className="avatar"
                    />
                    <span className="dropdown-caret"/>
                </div>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="avatar">
                    <a className="dropdown-item" href="#" style={{display: "block"}}>
                        <span>Signed in as
                            <strong> {user.email}</strong>
                        </span>
                    </a>
                    <div role="none" className="dropdown-divider"/>
                    <a className="dropdown-item" href="#">Profile</a>
                    <div role="none" className="dropdown-divider"/>
                    <a className="dropdown-item" onClick={handleSingOut}>Sign Out</a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Avatar;
