import React, {useState} from 'react';
import ACTModal from "../common/actModal/ACTModal";
import {toast} from "../common/toast/toast";
import Button from "../common/form/Button";
import Timer from "../common/timer/Timer";
import Spinner from "../common/spinner/Spinner";
import './Components.css';

const Components = (props) => {

    const [show, setShow] = useState(false);

    const handleShowToast = (type) => {
        const message = "This is a message to test the Toast Component";
        const options = {
            position: "bottom-right",
            autoDelete: true,
            dismissTime: 3000
        };

        switch (type) {
            case 'Success':
                toast.success(message, options);
                break;
            case 'Error':
                toast.error(message, options);
                break;
            case 'Info':
                toast.info(message, options);
                break;
            case 'Warning':
                toast.warning(message, options);
                break;
            default:
                break;
        }
    }

    return (
        <div className="p-4">
            <div className="p-4">
                <h1>Modal Component</h1>
                <h4>This is the test for the new ACTModal</h4>

                <div className={"act-row"}>
                    <Button className={"act-btn act-btn-primary"} onClick={() => setShow(true)}>Show Modal</Button>
                </div>

                <ACTModal
                    title={"My Modal"}
                    show={show}
                    onClose={() => setShow(false)}
                >
                    <p>This is the modal body</p>
                </ACTModal>
            </div>

            <div className="p-4">
                <h1>Toast Component</h1>
                <h4>This is the test for the toast component</h4>

                <div className={"act-row"}>
                    <Button className={"act-btn act-btn-outline-success"} onClick={() => handleShowToast('Success')}>Show Success</Button>
                    <Button className={"act-btn act-btn-outline-error"} onClick={() => handleShowToast('Error')}>Show Error</Button>
                    <Button className={"act-btn act-btn-outline-info"} onClick={() => handleShowToast('Info')}>Show Info</Button>
                    <Button className={"act-btn act-btn-outline-warning"} onClick={() => handleShowToast('Warning')}>Show Warning</Button>
                </div>
            </div>

            <div className="p-4">
                <h1>Button Component</h1>
                <h4>This is the test for the button component</h4>

                <div className={"act-row"}>
                    <Button type={"button"} className={"act-btn act-btn-primary"}>Primary</Button>
                    <Button type={"button"} className={"act-btn act-btn-secondary"}>Secondary</Button>
                    <Button type={"button"} className={"act-btn act-btn-success"}>Success</Button>
                    <Button type={"button"} className={"act-btn act-btn-error"}>Error</Button>
                    <Button type={"button"} className={"act-btn act-btn-info"}>Info</Button>
                    <Button type={"button"} className={"act-btn act-btn-warning"}>Warning</Button>
                    <Button type={"button"} className={"act-btn act-btn-light"}>Light</Button>
                    <Button type={"button"} className={"act-btn act-btn-dark"}>Dark</Button>
                </div>

                <div className={"act-row"}>
                    <Button type={"button"} className={"act-btn act-btn-outline-primary"}>Primary</Button>
                    <Button type={"button"} className={"act-btn act-btn-outline-secondary"}>Secondary</Button>
                    <Button type={"button"} className={"act-btn act-btn-outline-success"}>Success</Button>
                    <Button type={"button"} className={"act-btn act-btn-outline-error"}>Error</Button>
                    <Button type={"button"} className={"act-btn act-btn-outline-info"}>Info</Button>
                    <Button type={"button"} className={"act-btn act-btn-outline-warning"}>Warning</Button>
                    <Button type={"button"} className={"act-btn act-btn-outline-light"}>Light</Button>
                    <Button type={"button"} className={"act-btn act-btn-outline-dark"}>Dark</Button>
                </div>
            </div>

            <div className="p-4">
                <h1>Timer Component</h1>
                <h4>This is the test for the Timer component</h4>

                <Timer/>
            </div>

            <div className="p-4">
                <h1>Loader Component</h1>
                <h4>This is the test for the Loader component</h4>

                <div className={"act-row"}>
                    <Spinner/>
                </div>
            </div>
        </div>
    );
}

export default Components;
