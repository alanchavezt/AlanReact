import React from 'react';
import './Home.css';
import Resume from "../Resume/Resume";
import {About} from "../about";
import {Button} from "react-bootstrap";
import Hero from "../hero/Hero";
import Skills from "../skills/Skills";
import {resume} from "../Resume/resumeMock";
import Loading from "../common/Loading";

const Home = (props) => {
    if (!resume) {
        return <Loading/>;
    }

    return (
        <div >
            <div>
                <Hero/>

                {/*<div className={"container"}>*/}
                {/*    <h1>Welcome To My Personal Portfolio</h1>*/}
                {/*    <p>The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.</p>*/}
                {/*    <div className="mb-3">*/}
                {/*        <button type="button" className="btn btn-primary">Learn more</button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <h1>Projects</h1>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <h1>Technologies</h1>*/}
                {/*    <p>I've worked with a range a technologies in the web development world. From Back-end To Design</p>*/}
                {/*</div>*/}

                <About/>

                {/*<div>*/}
                {/*    <h1>Personal Achievements</h1>*/}
                {/*</div>*/}

                <Skills skills={resume.skills} skillsHighlight={resume.skillsHighlight}/>

                <Resume/>
            </div>
        </div>
    );
}

export default Home;
