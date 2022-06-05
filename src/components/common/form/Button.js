import React from "react";
import PropTypes from "prop-types";
import './button.css';

const Button = (props) => {

    return (
        <div>
            <button
                type={props.type}
                className={props.className}
                id={props.id}
                name={props.name || props.id}
                onClick={(e) => {
                    if (props.onClick) {
                        props.onClick(e);
                    }
                }}
                disabled={props.disabled}
            >{props.children}
            </button>
        </div>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default Button;