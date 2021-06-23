import React from 'react';
import './Home.css';
import {Button} from "react-bootstrap";

function Home () {

    return (
        <div>
            <div>
                <h1>Welcome To My Personal Portfolio</h1>
                <p>The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.</p>
                <div className="form-group">
                    <button type="button" className="btn btn-primary">Learn more</button>
                </div>
            </div>

            <div>
                <h1>Projects</h1>
            </div>
            <div>
                <h1>Technologies</h1>
                <p>I've worked with a range a technologies in the web development world. From Back-end To Design</p>
            </div>
            <div>
                <h1>About me</h1>
                <p>The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.</p>
            </div>
            <div>
                <h1>Personal Achievements</h1>
            </div>
        </div>
    );
}

export default Home;
