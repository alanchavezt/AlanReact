import React from "react";
import './resume.css';
import resume from "./local-json/myResumeFile.json";
import Loading from "../common/Loading";

const ResumeViewEntry = (props) => {
    if (!resume) {
        return <Loading/>;
    }
    return (
        <section id="resume" className="resume">
            <div className="container">

                <div className="section-title">
                    <h2>Resume</h2>
                    <p>{resume.objective}</p>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Summary</h3>
                        <div className="resume-item pb-0">
                            <h4>{resume.firstName} {resume.middleName ? resume.middleName : null} {resume.lastName}</h4>
                            <p><em>{resume.summary}</em></p>
                            <ul>
                                <li>{resume.address}</li>
                                <li>{resume.phone}</li>
                                <li>{resume.email}</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        {resume.education.map((e, index) => (
                            <div key={index} className="resume-item">
                                <h4>{e.degree}</h4>
                                <h5>{e.startDate} - {e.endDate}</h5>
                                <p><em>{e.school}, {e.city}, {e.state}</em></p>
                                <p>{e.description}</p>
                            </div>
                        ))}

                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        {resume.experience.map((exp, index) => (
                            <div key={index} className="resume-item">
                                <h4>{exp.jobTitle}</h4>
                                <h5>{exp.startDate} - {exp.endDate ? exp.endDate : "Present"}</h5>
                                <p><em>{exp.employer}, {exp.city}, {exp.state}</em></p>
                                <ul>
                                    {exp.jobDescription.map((description, index) => (
                                        <li key={index}>{description}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ResumeViewEntry;
