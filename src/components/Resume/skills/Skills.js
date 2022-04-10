import React from "react";
import Loading from "../../common/Loading";
import {Link} from "react-router-dom";

const Skills = (props) => {
    if (!props.skills || !props.skills.length) {
        return <Loading/>;
    }

    const handleAddSkill = () => {

    }

    const handleDeleteSkill = (userId) => {
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
                    <h1>Skill List</h1>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-outline-primary float-end" onClick={handleAddSkill}>Add</button>
                </div>
            </div>

            <table className="table table-hover">
                <thead className="thead-dark">
                <tr>
                    <th colSpan="1">#</th>
                    <th colSpan="1">Skill</th>
                    <th colSpan="1">Experience</th>
                    <th colSpan="1">Action</th>
                </tr>
                </thead>
                <tbody>
                {props.skills.length ? props.skills.map((s, index) => (
                    <tr key={index}>
                        <td>{(index + 1)}</td>
                        <td>{s.skill}</td>
                        <td>{s.experience}</td>
                        <td>
                            <div className={"float-end"}>
                                <Link to={`/resume/skills/edit`}>
                                    <i className="fa-regular fa-pen-to-square pe-2"/>
                                </Link>
                                <a className="pl-md-1 text-danger" style={{cursor: "pointer"}} onClick={() => handleDeleteSkill(index)}>
                                    <i className="fa-regular fa-trash-can pe-2"/>
                                </a>
                            </div>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan="9">No Skills</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default Skills;
