import React, {useState} from 'react';
import ACTModal from "../common/actModal/ACTModal";
import {toast} from "../common/toast/toast";

const TestEntry = (props) => {

    const [show, setShow] = useState(false);

    const handleShowToast = () => {
        const message = "This is a message to test the Toast Component";
        const options = {
            position: "bottom-right",
            autoDelete: true,
            dismissTime: 3000
        };

        toast.info(message, options);
    }

    return (
        <div className="p-4">
            <div className="p-4">
                <h1>Test Modal Component</h1>
                <h4>This is the test for the new ACTModal</h4>
                <button onClick={() => setShow(true)}>Show Modal</button>

                <ACTModal
                    title={"My Modal"}
                    show={show}
                    onClose={() => setShow(false)}
                >
                    <p>This is the modal body</p>
                </ACTModal>
            </div>

            <div className="p-4">
                <h1>Test Toast Component</h1>
                <h4>This is the test for the toast component</h4>
                <button onClick={handleShowToast}>Show Toast</button>
            </div>
        </div>
    );
}

export default TestEntry;