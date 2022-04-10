import React from "react";
import Loading from "../../common/Loading";
import {Link} from "react-router-dom";

const Experience = (props) => {
    if (!props.experience || !props.experience.length) {
        return <Loading/>;
    }

    const handleAddExperience = () => {

    }

    const handleDeleteExperience = (userId) => {
        // confirm("Are you sure you want to delete this user?", (res) => {
        //     if (res) {
        //         userService.deleteUser(userId).then(data => {
        //             window.location.pathname = `/users`;
        //         });
        //     }
        // })
    }

    return (
        <div className="pt-4">
            <div className="row row-cols-2">
                <div className="col">
                    <h1>Experience List</h1>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-outline-primary float-end" onClick={handleAddExperience}>Add</button>
                </div>
            </div>

            <table className="table table-hover">
                <thead className="thead-dark">
                <tr>
                    <th colSpan="1">#</th>
                    <th colSpan="1">Employer</th>
                    <th colSpan="1">Job Title</th>
                    <th colSpan="1">Start Date</th>
                    <th colSpan="1">End Date</th>
                    <th colSpan="1">State</th>
                    <th colSpan="1">City</th>
                    <th colSpan="1">Description</th>
                    <th colSpan="1">Action</th>
                </tr>
                </thead>
                <tbody>
                {props.experience.length ? props.experience.map((ex, index) => (
                    <tr key={index}>
                        <td>{(index + 1)}</td>
                        <td>{ex.employer}</td>
                        <td>{ex.jobTitle}</td>
                        <td>{ex.startDate}</td>
                        <td>{ex.endDate}</td>
                        <td>{ex.state}</td>
                        <td>{ex.city}</td>
                        {/* TODO list items for job description (map) */}
                        <td>
                            <ul>
                                {ex.jobDescription ? ex.jobDescription.map((d, index) => (
                                    <li key={index}>{d}</li>
                                )) : null}
                            </ul>
                        </td>
                        <td>
                            <div className={"float-end"}>
                                <Link to={`/resume/experience/edit`}>
                                    <i className="fa-regular fa-pen-to-square pe-2"/>
                                </Link>
                                <a className="pl-md-1 text-danger" style={{cursor: "pointer"}} onClick={() => handleDeleteExperience(index)}>
                                    <i className="fa-regular fa-trash-can pe-2"/>
                                </a>
                            </div>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan="9">No Experience</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default Experience;
