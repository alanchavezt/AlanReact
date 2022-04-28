import React, {useState} from "react";
import InputText from "../../common/form/InputText";
import TextArea from "../../common/form/TextArea";
import * as uuid from 'uuid';

const EducationForm = (props) => {

    const handleFormEducationChange = (e) => {
        let updatedDegree = {...props.education};

        if (updatedDegree && !updatedDegree.educationId) {
            updatedDegree.educationId = uuid.v4();
        }

        updatedDegree[e.target.name] = e.target.value;
        props.onChange(updatedDegree);
    }

    return (
        <form onChange={handleFormEducationChange}>
            <InputText
                label="School"
                type="text"
                placeholder="school"
                id={"school"}
                name={"school"}
                value={props.education.school}
                required={true}
            />
            <InputText
                label="Degree"
                type="text"
                placeholder="Degree"
                id={"degree"}
                name={"degree"}
                value={props.education.degree}
            />
            <InputText
                label="Start Date"
                type="text"
                placeholder="Start Date"
                id={"startDate"}
                name={"startDate"}
                value={props.education.startDate}
            />
            <InputText
                label="End Date"
                type="text"
                placeholder="End Date"
                id={"endDate"}
                name={"endDate"}
                value={props.education.endDate}
            />
            <InputText
                label="State"
                type="text"
                placeholder="State"
                id={"state"}
                name={"state"}
                value={props.education.state}
            />
            <InputText
                label="City"
                type="text"
                placeholder="City"
                id={"city"}
                name={"city"}
                value={props.education.city}
            />
            <TextArea
                label="Description"
                id="description"
                name="description"
                cols={30}
                rows={3}
                value={props.education.description}
            />
        </form>
    );
}

export default EducationForm;
