import React, {useState} from "react";
import Loading from "../../common/Loading";
import ACModal from "../../common/modal/ACModal";
import {confirm} from "../../common/modal/confirm";
import EducationForm from "./EducationForm";

const EducationList = (props) => {

    const [show, setShow] = useState(false);
    const [education, setEducation] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [index, setIndex] = useState();

    const handleClose = () => {
        setEducation({});
        setIsEditing(false);
        setShow(false)
    };

    const handleShow = () => setShow(true);

    const handleFormEducationChange = (education) => {
        setEducation(education);
    }

    const handleAddEducation = () => {
        handleShow();
    }

    const handleEditEducation = (index, education) => {
        setIndex(index);
        setEducation(education);
        setIsEditing(true);
        handleShow();
    }

    const handleCreateEducation = () => {
        let educationList = [...props.education];
        educationList.push(education);
        props.onChange(educationList);
        setEducation({});
        handleClose();
    }

    const handleUpdateEducation = () => {
        let educationList = [...props.education];
        educationList[index] = education;
        props.onChange(educationList);
        setEducation({});
        setIsEditing(false);
        handleClose();
    }

    const handleDeleteEducation = (index) => {
        confirm("Are you sure you want to delete this education?", (res) => {
            if (res) {
                let educationList = props.education.filter((e,i) => i !== index);
                props.onChange(educationList);
            }
        })
    }

    if (!props.education || !props.education.length) {
        return <Loading/>;
    }

    return (
        <div className="p-4">
            <div className="row row-cols-2">
                <div className="col">
                    <h1>Education List</h1>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-outline-primary float-end" onClick={handleAddEducation}>Add</button>
                </div>
            </div>

            <table className="table table-hover">
                <thead className="thead-dark">
                <tr>
                    <th colSpan="1">#</th>
                    <th colSpan="1">ID</th>
                    <th colSpan="1">School</th>
                    <th colSpan="1">Degree</th>
                    <th colSpan="1">Start Date</th>
                    <th colSpan="1">End Date</th>
                    <th colSpan="1">State</th>
                    <th colSpan="1">City</th>
                    <th colSpan="1">Description</th>
                    <th colSpan="1">Action</th>
                </tr>
                </thead>
                <tbody>
                {props.education.length ? props.education.map((ed, index) => (
                    <tr key={index}>
                        <td>{(index + 1)}</td>
                        <td>{ed.educationId}</td>
                        <td>{ed.school}</td>
                        <td>{ed.degree}</td>
                        <td>{ed.startDate}</td>
                        <td>{ed.endDate}</td>
                        <td>{ed.state}</td>
                        <td>{ed.city}</td>
                        <td>{ed.description}</td>
                        <td>
                            <div className={"float-end"}>
                                <a className="pl-md-1" style={{cursor: "pointer"}} onClick={() => handleEditEducation(index, ed)}>
                                    <i className="fa-regular fa-pen-to-square pe-2"/>
                                </a>
                                <a className="pl-md-1 text-danger" style={{cursor: "pointer"}} onClick={() => handleDeleteEducation(index)}>
                                    <i className="fa-regular fa-trash-can pe-2"/>
                                </a>
                            </div>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan="9">No Education</td>
                    </tr>
                )}
                </tbody>
            </table>

            <ACModal
                title={isEditing ? "Edit Education" : "Add Education"}
                show={show}
                onHide={handleClose}
                callback={(res) => {
                    if (!res) {
                        return;
                    }
                    if (isEditing) {
                        handleUpdateEducation();
                        setIsEditing(false);
                    } else {
                        handleCreateEducation();
                    }
                }}
            >
                <EducationForm
                    education={education}
                    onChange={(ed) => {
                        handleFormEducationChange(ed);
                    }}
                />
            </ACModal>
        </div>
    )
}

export default EducationList;
