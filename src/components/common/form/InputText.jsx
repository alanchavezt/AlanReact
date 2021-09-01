import React from "react";
import {PropTypes} from "prop-types";

export default class InputText extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="form-group">
                {/*todo: check why the label goes to the middle when removing the "float-left" class*/}
                <label className="float-left" htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    type={this.props.type}
                    className={`form-control ${this.props.className}`}
                    id={this.props.id}
                    name={this.props.name || this.props.id}
                    value={this.props.value || ""}
                    onChange={(e) => {
                        if (this.props.onChange) {
                            this.props.onChange(e);
                        }
                    }}
                    onKeyUp={this.props.onKeyUp}
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    readOnly={this.props.readOnly}
                />
            </div>
        );
    }
}

InputText.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool
}

InputText.defaultProps = {
    label: "",
    type: "text",
    className: "",
    onChange: null,
    onKeyUp: null,
    placeholder: "",
    required: false,
    disabled: false,
    readOnly: false
}
