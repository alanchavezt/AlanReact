import * as ReactDOM from "react-dom";
import React from "react";
import {AlertModal} from "./AlertModal";

const alert = (text, callback) => {
    let corePanel = document.getElementById("modal-placeholder");
    let callbackContainer = (response) => {
        if (callback) {
            callback(response);
        }
        ReactDOM.unmountComponentAtNode(corePanel);
    }

    ReactDOM.render(
        <AlertModal
            title="Alert"
            message={text}
            type="alert"
            show={true}
            callback={callbackContainer}
        />, corePanel
    );
}

export {alert};
