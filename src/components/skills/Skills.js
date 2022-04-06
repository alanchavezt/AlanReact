import React from 'react';
import "./skills.css";

const Skills = (props) => {

    return (
        <section id="skills" className="skills section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Skills</h2>
                    <p>{props.skillsHighlight}</p>
                </div>

                <div className="row skills-content">
                    {props.skills ? props.skills.map((skill, index) => (
                        <div key={index} className="col-lg-6" data-aos="fade-up">
                            <div className="progress">
                                <span className="skill">{skill.skill} <i className="val">{skill.experience}</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>
                        </div>
                    )) : null}
                </div>

            </div>
        </section>
    );
}

export default Skills;
