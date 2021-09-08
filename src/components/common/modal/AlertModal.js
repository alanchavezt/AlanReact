import React from "react";
import {Button, Modal} from "react-bootstrap";

const AlertModal = (props) => {
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
                <p>{props.message}</p>
            </Modal.Body>

            <Modal.Footer>
                {/*<Button className="btn-primary" onClick={() => props.callback(true)}>Ok</Button>*/}
                {alertButtons(props)}
            </Modal.Footer>
        </Modal>
    );
}

const alertButtons = (props) => {
    return (
        <React.Fragment>
            <Button className="btn-primary" onClick={() => props.callback(true)}>Ok</Button>
        </React.Fragment>
    );
}

export {AlertModal};
