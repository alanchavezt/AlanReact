import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import './Toast.css';

const Toast = props => {
    const { toastList, position, autoDelete, dismissTime, setList } = props;

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete && toastList.length) {
                deleteToast(toastList[0].id);
            }
        }, dismissTime);

        return () => {
            clearInterval(interval);
        }
    }, [toastList, autoDelete, dismissTime, deleteToast]);

    const deleteToast = useCallback(id => {
        const toastListItem = toastList.filter(e => e.id !== id);
        setList(toastListItem);
    }, [toastList, setList]);

    return (
        <>
            <div className={`notification-container ${position}`}>
                {
                    toastList.map((toast, i) =>
                        <div
                            key={i}
                            className={`notification toast-container ${position}`}
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            <button onClick={() => deleteToast(toast.id)}>X</button>
                            <div className="notification-image">
                                <img src={toast.icon} alt="" />
                            </div>
                            <div>
                                <p className="notification-title">{toast.title}</p>
                                <p className="notification-message">{toast.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

Toast.propTypes = {
    toastList: PropTypes.array.isRequired,
    position: PropTypes.string,
    autoDelete: PropTypes.bool,
    dismissTime: PropTypes.number
}

export default Toast;
