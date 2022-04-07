import React from "react";
import PropTypes from "prop-types";

const TextArea = (props) => {

    return (
        <div className="mb-3">
            <label className="float-start" htmlFor={props.id}>{props.label}</label>
            <textarea
                className={`form-control ${props.className}`}
                id={props.id}
                name={props.name || props.id}
                cols={props.cols}
                rows={props.rows}
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

TextArea.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    cols: PropTypes.number,
    rows: PropTypes.number,
    value: PropTypes.any,
    onChange: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool
}

TextArea.defaultProps = {
    label: "",
    className: "",
    cols: 30,
    rows: 10,
    onChange: null,
    onKeyUp: null,
    placeholder: "",
    required: false,
    disabled: false,
    readOnly: false
}

export default TextArea;
