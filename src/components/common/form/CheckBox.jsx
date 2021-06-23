import React from "react";
import {PropTypes} from "prop-types";

export default class CheckBox extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="form-group form-check">
                <input
                    type={this.props.type}
                    className={`form-check-input ${this.props.className}`}
                    id={this.props.id}
                    name={this.props.name || this.props.id}
                    checked={this.props.checked}
                    onChange={(e) => {
                        if (this.props.onChange) {
                            this.props.onChange(e);
                        }
                    }}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    readOnly={this.props.readOnly}
                />
                <label className="form-check-label" htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        );
    }
}

CheckBox.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool
}

CheckBox.defaultProps = {
    label: " ",
    type: "checkbox",
    className: "",
    checked: false,
    onChange: null,
    onKeyUp: null,
    required: false,
    disabled: false,
    readOnly: false
}
