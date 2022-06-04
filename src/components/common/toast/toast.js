import React, {useEffect, useState} from "react";
import checkIcon from "../assets/check.svg";
import errorIcon from "../assets/error.svg";
import infoIcon from "../assets/info.svg";
import warningIcon from "../assets/warning.svg";
import ToastContainer from "./ToastContainer";
import ReactDOM from "react-dom";
import * as uuid from 'uuid';

export const toast = {
    success,
    error,
    danger,
    info,
    warning
};

export const ToastType = {
    Success: 'Success',
    Error: 'Error',
    Danger: 'Danger',
    Info: 'Info',
    Warning: 'Warning'
}

// convenience methods
function success(message, options) {
    toastService({ ...options, type: ToastType.Success, message });
}

function error(message, options) {
    toastService({ ...options, type: ToastType.Error, message });
}

function danger(message, options) {
    toastService({ ...options, type: ToastType.Error, message });
}

function info(message, options) {
    toastService({ ...options, type: ToastType.Info, message });
}

function warning(message, options) {
    toastService({ ...options, type: ToastType.Warning, message });
}

const ToastWrapper = ({toast}) => {

    const [list, setList] = useState([]);
    let toastProperties = null;

    useEffect(() => {
        showToast(toast);
    }, [toast]);

    const showToast = toast => {
        const backgroundColor = {
            Success: '#5cb85c',
            Danger: '#d9534f',
            Info: '#5bc0de',
            Warning: '#f0ad4e'
        };

        switch(toast.type) {
            case 'Success':
                toastProperties = {
                    id: uuid.v4(),
                    title: toast.type,
                    description: toast.message,
                    backgroundColor: backgroundColor.Success,
                    icon: checkIcon
                }
                break;
            case 'Error':
                toastProperties = {
                    id: uuid.v4(),
                    title: toast.type,
                    description: toast.message,
                    backgroundColor: backgroundColor.Danger,
                    icon: errorIcon
                }
                break;
            case 'Danger':
                toastProperties = {
                    id: uuid.v4(),
                    title: toast.type,
                    description: toast.message,
                    backgroundColor: backgroundColor.Danger,
                    icon: errorIcon
                }
                break;
            case 'Info':
                toastProperties = {
                    id: uuid.v4(),
                    title: toast.type,
                    description: toast.message,
                    backgroundColor: backgroundColor.Info,
                    icon: infoIcon
                }
                break;
            case 'Warning':
                toastProperties = {
                    id: uuid.v4(),
                    title: toast.type,
                    description: toast.message,
                    backgroundColor: backgroundColor.Warning,
                    icon: warningIcon
                }
                break;

            default:
                setList([]);
        }

        setList([...list, toastProperties]);
    }

    return (
        <ToastContainer
            toastList={list}
            position={toast.position}
            autoDelete={toast.autoDelete}
            dismissTime={toast.dismissTime}
            setList={setList}
        />
    );
}

// core toast method
const toastService = (toast) => {

    const container = document.getElementById("toast-placeholder");

    return ReactDOM.render(
        <ToastWrapper toast={toast}/>,
        container
    );
}
