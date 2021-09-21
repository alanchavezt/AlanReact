import React, {useEffect, useState} from "react";
import "./Avatar.css"
import Loading from "../Loading";
import {getUser} from "../../../utils/Common";

const Avatar = (props) => {

    const user = getUser();
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        let avatar;

        if(user){
            const firstName = user.firstName.charAt(0).toUpperCase();
            const lastName = user.lastName.charAt(0).toUpperCase();
            const initials = firstName.concat(lastName);

            avatar = generateAvatar(initials, "white", "#007398");
        }else {
            avatar = generateAvatar("", "white", "#007398");
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

    if(!avatar){
        return <Loading/>;
    }

    return (
        <img src={avatar} alt="Avatar" className="avatar" id="avatar"/>
    );
};

export default Avatar;
