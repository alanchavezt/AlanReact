import * as ReactDOM from "react-dom";
import React from "react";
import {DialogModal} from "./DialogModal";

const dialog = (options) => {
    let corePanel = document.getElementById("modal-placeholder");
    let callbackContainer = (response) => {
        if (options.callback) {
            options.callback(response);
        }
        ReactDOM.unmountComponentAtNode(corePanel);
    }

    ReactDOM.render(
        <DialogModal
            title={options.title}
            component={options.component}
            type="dialog"
            callback={callbackContainer}
            buttons={options.buttons}
            isVisible={true}
        />, corePanel
    );
};

export {dialog};
