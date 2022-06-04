import React, {useEffect, useState} from "react";
import Loading from "../common/Loading";
import InputText from "../common/form/InputText";
import TextArea from "../common/form/TextArea";
import EducationList from "./education/EducationList";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";
import ToastContainer from "../common/toast/ToastContainer";
import checkIcon from '../common/assets/check.svg';
import errorIcon from '../common/assets/error.svg';
import infoIcon from '../common/assets/info.svg';
import warningIcon from '../common/assets/warning.svg';
import axios from "axios";

const ResumeEditEntry = (props) => {

    const [resume, setResume] = useState({});

    useEffect(() => {
        getResume()
    },[])

    const getResume=()=>{
        axios.get(`http://localhost:4000/getResume`).then(response => {
            const resume = response.data;
            setResume(resume);
            console.log(resume);
        }).catch(error => {
            console.log(error);
        })
    }

    const handleFormChange = (e) => {
        let updatedResume = {...resume};
        updatedResume[e.target.name] = e.target.value;
        setResume(updatedResume);
    }

    const handleKeyUp = (e) => {}

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

    const handleEducationListChange = (educationList) => {
        let updatedResume = {...resume};
        updatedResume.education = educationList;
        setResume(updatedResume);

        axios.post(`http://localhost:4000/writeFile`, updatedResume).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
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

            <form onChange={handleFormChange} onKeyUp={handleKeyUp}>
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
                    rows={5}
                    value={resume.summary}
                    required={true}
                />
                <TextArea
                    label="Objective"
                    id="objective"
                    name="objective"
                    cols={30}
                    rows={5}
                    value={resume.objective}
                    required={true}
                />
            </form>

            <EducationList education={resume.education} onChange={handleEducationListChange}/>

            <Experience experience={resume.experience}/>

            <Skills skills={resume.skills}/>

            <div className="mb-3">
                <button type="button" className="btn btn-outline-primary float-end" onClick={handleSave} disabled={!isFormValid()}>Save</button>
            </div>
        </div>
    )
};

export default ResumeEditEntry;
