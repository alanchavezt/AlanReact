import React, {useRef} from "react";
import PropTypes from "prop-types";
import {Modal, Button} from "react-bootstrap";
import "bootstrap";

class BootstrapModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isVisible: props.isVisible};
        this.elementRef = null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let newState = {...prevState};
        if (this.props.isVisible !== prevProps.isVisible) {
            newState.isVisible = this.props.isVisible;
        }
        return newState;
    }

    renderMain = () => {

    }

    renderConfirm() {
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <span style={{float: "right"}}>
                        <button
                            className="close"
                            type="button"
                            data-dismiss="modal"
                            style={{marginTop: "0"}}
                            onClick={() => {
                                this.setState({hidden: true});
                                this.props.callback(false);
                            }}>&times;
                        </button>
                    </span>
                    <span className="modal-title" style={{fontSize: "12px", overflowWrap: "normal"}}>{this.props.title}</span>
                </Modal.Header>
                <Modal.Body>{this.props.message}</Modal.Body>
                <Modal.Footer>{this.renderFooter()}</Modal.Footer>
            </Modal.Dialog>
        );
    }

    renderAlert() {
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <span style={{float: "right"}}>
                        <button
                            className="close"
                            type="button"
                            data-dismiss="modal"
                            style={{marginTop: "0"}}
                            onClick={() => {
                                this.setState({isVisible: false});
                                this.props.callback(false);
                            }}>&times;
                        </button>
                    </span>
                    <span className="modal-title" style={{fontSize: "12px", overflowWrap: "normal"}}>{this.props.message}</span>
                </Modal.Header>
                <Modal.Body>{this.props.message}</Modal.Body>
                <Modal.Footer>{this.renderFooter()}</Modal.Footer>
            </Modal.Dialog>
        );
    }

    renderDialog = () => {
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <span style={{float: "right"}}>
                        <button
                            className="close"
                            type="button"
                            data-dismiss="modal"
                            style={{marginTop: "0"}}
                            onClick={() => {
                                this.setState({hidden: true});
                                this.props.callback(false);
                            }}>&times;
                        </button>
                    </span>
                    <span className="modal-title" style={{fontSize: "12px", overflowWrap: "normal"}}>{this.props.title}</span>
                </Modal.Header>
                <Modal.Body>{this.renderComponent()}</Modal.Body>
                <Modal.Footer>{this.renderFooter()}</Modal.Footer>
            </Modal.Dialog>
        );
    }

    onDataChange = (response) => {
        this.setState({data: response});
    }

    renderComponent = () => {
        if (this.props.children) {
            return this.props.children;
        }
        return React.createElement(this.props.component, {...this.props, ref: React.forwardRef(this.props.component), onChange: this.onDataChange});
    }

    renderFooter = () => {
        if (this.props.buttons) {
            if (typeof this.props.buttons === "function") {
                return this.props.buttons(this);
            } else {
                return this.props.buttons;
            }
        } else if (this.props.type === "dialog") {
            return this.renderDefaultDialogButtons();
        } else if (this.props.type === "confirm") {
            return this.renderDefaultConfirmButtons();
        } else if (this.props.type === "alert") {
            return this.renderDefaultAlertButtons();
        }
    }

    renderDefaultConfirmButtons = () => {
        return (
            <React.Fragment>
                <Button
                    onClick={(e) => {
                        this.setState({hidden: true});
                        this.props.callback(true);
                    }}
                    bsStyle="primary">OK
                </Button>
                <Button
                    onClick={(e) => {
                        this.setState({hidden: true});
                        this.props.callback(false);
                    }}
                    bsStyle="default">Cancel
                </Button>
            </React.Fragment>
        );
    }

    renderDefaultAlertButtons = () => {
        return (
            <Button
                onClick={(e) => {
                    this.setState({hidden: true});
                    this.props.callback(true);
                }}
                bsStyle="primary">OK
            </Button>
        );
    }

    renderDefaultDialogButtons = () => {
        return (
            <React.Fragment>
                <Button
                    onClick={(e) => {
                        this.setState({hidden: true});
                        this.props.callback(this.state.data || true);
                    }}
                    bsStyle="primary">OK
                </Button>
                <Button
                    onClick={(e) => {
                        this.setState({hidden: true});
                        this.props.callback(false);
                    }}
                    bsStyle="default">Cancel
                </Button>
            </React.Fragment>
        );
    }

    render() {
        if (!this.props.isVisible) {
            return null;
        }
        if (this.props.type === "confirm") {
            return this.renderConfirm();
        } else if (this.props.type === "dialog") {
            return this.renderDialog();
        } else if (this.props.type === "alert") {
            return this.renderAlert();
        } else {
            return (
                <div className="c-els-modal">
                    <div className="c-els-modal__window u-els-width-1o2">
                        <span
                            className="c-els-modal__close"
                            onClick={() => {
                                this.setState({hidden: true});
                                this.props.callback(false);
                            }}>
                            <svg title="Close" className="o-els-icon-svg o-els-icon-svg--1x">
                                <use xlinkHref="/image/gizmo.xml#delete" />
                            </svg>
                        </span>
                        Invalid Modal Type
                    </div>
                </div>
            );
        }
    }
}

BootstrapModal.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    showSaveButton: PropTypes.bool,
    showCancelButton: PropTypes.bool,
    type: PropTypes.oneOf(["confirm", "dialog", "alert"]),
    callback: PropTypes.func,
    component: PropTypes.any,
    children: PropTypes.any,
    data: PropTypes.object,
    buttons: PropTypes.any,
    isVisible: PropTypes.bool
}

BootstrapModal.defaultProps = {
    callback: () => {console.log("callback not defined")}
}

export {BootstrapModal};
