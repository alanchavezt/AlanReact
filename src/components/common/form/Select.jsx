import React from "react";
import {PropTypes} from "prop-types";

export default class Select extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="mb-3">
                <label className="float-left" htmlFor={this.props.id}>{this.props.label}</label>
                <select
                    className={`form-control ${this.props.className}`}
                    id={this.props.id}
                    name={this.props.name || this.props.id}
                    onChange={(e) => {
                        if (this.props.onChange) {
                            this.props.onChange(e);
                        }
                    }}
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    readOnly={this.props.readOnly}
                >
                    {this.props.options.map( option => (
                        <option></option>
                    ))}
                </select>

            </div>
        );
    }
}

Select.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool
}

Select.defaultProps = {
    label: "",
    className: "",
    options: [],
    onChange: null,
    onKeyUp: null,
    placeholder: "",
    required: false,
    disabled: false,
    readOnly: false
}
