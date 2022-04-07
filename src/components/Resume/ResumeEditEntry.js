import React, {useEffect, useState} from "react";
import resumeJson from "./local-json/resume.json";
import Loading from "../common/Loading";
import InputText from "../common/form/InputText";
import TextArea from "../common/form/TextArea";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";
// import fs from "fs";

const ResumeEditEntry = (props) => {

    const [resume,setResume] = useState([]);

    useEffect(()=>{
        getResume()
    },[])

    const getResume=()=>{
        let resume = resumeJson;
        setResume(resume);
    }

    const onFormChange = (e) => {
        let updatedResume = {...resume};
        updatedResume[e.target.name] = e.target.value;
        setResume(updatedResume);
    }

    const handleSave = (e) => {
        const updatedResume = JSON.stringify(resume);

        // TODO figure out how to use the file system library with React
        // fs.writeFile('./myFile.json', updatedResume, function(err) {
        //     if (err) {
        //         return console.log(err);
        //     }
        //     console.log("The file was saved!");
        // });
    }

    const isFormValid = () => {
        let formData = resume;

        if (!formData) {
            return false;
        }
        return true;
    }

    if (!resume) {
        return <Loading />
    }

    return (
        <div className="p-4">
            <h1>Edit Resume</h1>

            <form onChange={onFormChange}>
                <InputText
                    label="First Name"
                    id="firstName"
                    name="firstName"
                    value={resume.firstName}
                    required={true}
                />
                <InputText
                    label="Middle Name"
                    id="middleName"
                    name="middleName"
                    value={resume.middleName}
                    required={true}
                />
                <InputText
                    label="Last Name"
                    id="lastName"
                    name="lastName"
                    value={resume.lastName}
                    required={true}
                />
                <InputText
                    label="Address"
                    id="address"
                    name="address"
                    value={resume.address}
                    required={true}
                />
                <InputText
                    label="Phone"
                    id="phone"
                    name="phone"
                    value={resume.phone}
                    required={true}
                />
                <InputText
                    label="Email address"
                    id="email"
                    name="email"
                    value={resume.email}
                    required={true}
                />
                <TextArea
                    label="Summary"
                    id="summary"
                    name="summary"
                    cols={30}
                    rows={10}
                    value={resume.summary}
                    required={true}
                />
                <TextArea
                    label="Objective"
                    id="objective"
                    name="objective"
                    cols={30}
                    rows={10}
                    value={resume.objective}
                    required={true}
                />
            </form>

            <Education education={resume.education}/>

            <Experience experience={resume.experience}/>

            <Skills skills={resume.skills}/>

            <div className="mb-3">
                <button type="button" className="btn btn-outline-primary float-end" onClick={handleSave} disabled={!isFormValid()}>Save</button>
            </div>
        </div>
    )
};

export default ResumeEditEntry;
