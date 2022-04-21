import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";

const ACModal = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (props.show) {
            handleShow();
        }
    })

    const handleShow = () => setShow(true);

    const handleClose = () => {
        setShow(false)
        props.onHide(false);
        handleCallback(false);
    }

    const handleCallback = (res) => {
        setShow(false)
        props.callback(res);
    }

    const renderComponent = () => {
        if (props.children) {
            return props.children
        }
        return props.component;
    }

    const renderFooter = () => {
        if (props.buttons) {
            return props.buttons;
        }
        return renderDefaultDialogButtons();
    }

    const renderDefaultDialogButtons = () => {
        return (
            <React.Fragment>
                <Button
                    variant="secondary"
                    onClick={handleClose}
                >Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => handleCallback(true)}
                >Save
                </Button>
            </React.Fragment>
        );
    }

    if (!show) {
        return null;
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {renderComponent()}
            </Modal.Body>
            <Modal.Footer>{renderFooter()}</Modal.Footer>
        </Modal>
    );
}

export default ACModal;
