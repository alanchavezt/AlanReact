import React from "react";
import PropTypes from "prop-types";

const InputText = (props) => {

    return (
        <div className="mb-3">
            <label className="float-start" htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                className={`form-control ${props.className}`}
                id={props.id}
                name={props.name || props.id}
                value={props.value || ""}
                onChange={(e) => {
                    if (props.onChange) {
                        props.onChange(e);
                    }
                }}
                onKeyUp={props.onKeyUp}
                placeholder={props.placeholder}
                required={props.required}
                disabled={props.disabled}
                readOnly={props.readOnly}
            />
        </div>
    );
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

export default InputText;
