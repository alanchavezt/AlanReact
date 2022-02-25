import React from "react";
import PropTypes from "prop-types";

const Select = (props) => {

    return (
        <div className="mb-3">
            <label className="float-left" htmlFor={props.id}>{props.label}</label>
            <select
                className={`form-select ${props.className}`}
                id={props.id}
                name={props.name || props.id}
                value={props.selected || ""}
                placeholder={props.placeholder}
                required={props.required}
                disabled={props.disabled}
                readOnly={props.readOnly}
                onChange={(e) => {
                    if (props.onChange) {
                        props.onChange(e);
                    }
                }}
            >
                {props.options.map( option => (
                    <option key={option[props.id]} value={option[props.id]}>{option[props.name]}</option>
                ))}
            </select>

        </div>
    );
}

Select.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    selected: PropTypes.string,
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
    selected: null,
    onChange: null,
    onKeyUp: null,
    placeholder: "",
    required: false,
    disabled: false,
    readOnly: false
}

export default Select;
