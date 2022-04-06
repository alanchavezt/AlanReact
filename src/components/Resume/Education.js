import React from "react";
import Loading from "../common/Loading";
import {Link} from "react-router-dom";

const Education = (props) => {
    if (!props.education || !props.education.length) {
        return <Loading/>;
    }

    const handleAddEducation = () => {

    }

    const handleDeleteEducation = (userId) => {
        // confirm("Are you sure you want to delete this user?", (res) => {
        //     if (res) {
        //         userService.deleteUser(userId).then(data => {
        //             window.location.pathname = `/users`;
        //         });
        //     }
        // })
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
                        <td>{ed.school}</td>
                        <td>{ed.degree}</td>
                        <td>{ed.startDate}</td>
                        <td>{ed.endDate}</td>
                        <td>{ed.state}</td>
                        <td>{ed.city}</td>
                        <td>{ed.description}</td>
                        <td>
                            <div className={"float-end"}>
                                <Link to={`/resume/education/edit`}>
                                    <i className="fa-regular fa-pen-to-square pe-2"/>
                                </Link>
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
        </div>
    )
}

export default Education;
