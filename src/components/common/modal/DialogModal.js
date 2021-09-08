import React from "react";
import {Button, Modal} from "react-bootstrap";

const DialogModal = (props) => {
    return (
        <Modal
            show={props.show}
            onHide={() => props.callback(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {props.children}
            </Modal.Body>

            <Modal.Footer>
                {/*<Button className="btn-primary" onClick={() => props.callback(true)}>Ok</Button>*/}
                {dialogButtons(props)}
            </Modal.Footer>
        </Modal>
    );
}

const dialogButtons = (props) => {
    return (
        <React.Fragment>
            <Button className="btn-primary" onClick={() => props.callback(true)}>Ok</Button>
            <Button className="btn-secondary" onClick={() => props.callback(false)}>Cancel</Button>
        </React.Fragment>
    );
}

export {DialogModal};
