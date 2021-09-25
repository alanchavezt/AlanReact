import * as ReactDOM from "react-dom";
import React from "react";
import {ConfirmModal} from "./ConfirmModal";

const confirm = (text, callback) => {
    let corePanel = document.getElementById("modal-placeholder");
    let callbackContainer = (response) => {
        if (callback) {
            callback(response);
        }
        ReactDOM.unmountComponentAtNode(corePanel);
    }

    ReactDOM.render(
        <ConfirmModal
            title="Confirm"
            message={text}
            type="confirm"
            show={true}
            callback={callbackContainer}
        />, corePanel
    );
};

export {confirm};
