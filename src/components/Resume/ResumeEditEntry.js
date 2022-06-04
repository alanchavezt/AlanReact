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
    const [list, setList] = useState([]);
    let toastProperties = null;

    useEffect(()=>{
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

    const showToast = type => {
        switch(type) {
            case 'success':
                toastProperties = {
                    id: list.length + 1,
                    title: 'Success',
                    description: 'This is a success toast component',
                    backgroundColor: '#5cb85c',
                    icon: checkIcon
                }
                break;
            case 'danger':
                toastProperties = {
                    id: list.length + 1,
                    title: 'Danger',
                    description: 'This is a error toast component',
                    backgroundColor: '#d9534f',
                    icon: errorIcon
                }
                break;
            case 'info':
                toastProperties = {
                    id: list.length + 1,
                    title: 'Info',
                    description: 'This is an info toast component',
                    backgroundColor: '#5bc0de',
                    icon: infoIcon
                }
                break;
            case 'warning':
                toastProperties = {
                    id: list.length + 1,
                    title: 'Warning',
                    description: 'This is a warning toast component',
                    backgroundColor: '#f0ad4e',
                    icon: warningIcon
                }
                break;

            default:
                setList([]);
        }

        setList([...list, toastProperties]);
    }

    if (!resume) {
        return <Loading />
    }

    return (
        <div className="p-4">
            <h1>Edit Resume</h1>
            <button onClick={() => showToast("success")}>Success</button>
            <button onClick={() => showToast("danger")}>Danger</button>
            <button onClick={() => showToast("info")}>Info</button>
            <button onClick={() => showToast("warning")}>Warning</button>
            <ToastContainer
                toastList={list}
                position="bottom-right"
                autoDelete={true}
                dismissTime={3000}
                setList={setList}
            />

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
