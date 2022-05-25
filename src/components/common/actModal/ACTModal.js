import React, {useEffect} from 'react';
import './ACTModal.css';

const ACTModal = props =>  {

    if (!props.show) {
        return null;
    }

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

    return (
        <div className={`act-modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
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
    );

}

export default ACTModal;