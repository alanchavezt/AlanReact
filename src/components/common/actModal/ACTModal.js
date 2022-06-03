import React, {useEffect} from 'react';
import {CSSTransition} from "react-transition-group";
import ReactDOM from "react-dom";
import './ACTModal.css';
import PropTypes from "prop-types";

const ACTModal = props =>  {

    const nodeTransitionRef = React.useRef();

    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown);

        return function cleanup() {
            document.removeEventListener('keydown', closeOnEscapeKeyDown);
        }
    }, [])

    return ReactDOM.createPortal(
        <CSSTransition
            nodeRef={nodeTransitionRef}
            in={props.show}
            unmountOnExit
            timeout={{enter: 0, exit: 300}}
        >
            <div className={"act-modal"} onClick={props.onClose} ref={nodeTransitionRef}>
                <div className={"act-modal-content"} onClick={e => e.stopPropagation()}>
                    <div className={"act-modal-header"}>
                        <h4 className={"act-modal-title"}>{props.title}</h4>
                    </div>
                    <div className={"act-modal-body"}>{props.children}</div>
                    <div className={"act-modal-footer"}>
                        <button className={"button"} onClick={props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    );
}

ACTModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default ACTModal;