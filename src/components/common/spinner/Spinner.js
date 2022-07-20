import React from "react";
import "./Spinner.css";

const Spinner = () => {
    return (
        <div className="spinner">
            Loading
            <div className="spinner-sector spinner-sector-red"/>
            <div className="spinner-sector spinner-sector-blue"/>
            <div className="spinner-sector spinner-sector-green"/>
        </div>
    );
}

export default Spinner;
