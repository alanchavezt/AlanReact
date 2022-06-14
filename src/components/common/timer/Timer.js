import React, { useState, useEffect } from 'react';
import Button from "../form/Button";
import'./timer.css';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className="">
            <div className="time">
                <span>
                    {seconds}
                </span>
            </div>

            <div className="act-row">
                <Button
                    className={`act-btn act-btn-outline-primary`}
                    onClick={toggle}
                >{isActive ? 'Pause' : 'Start'}
                </Button>

                <button className="act-btn act-btn-outline-secondary" onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;