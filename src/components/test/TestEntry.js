import React, {useState} from 'react';
import ACTModal from "../common/actModal/ACTModal";

const TestEntry = (props) => {

    const [show, setShow] = useState(false);

    return (
        <div className="p-4">
            <h1>Test Component</h1>

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
    );
}

export default TestEntry;