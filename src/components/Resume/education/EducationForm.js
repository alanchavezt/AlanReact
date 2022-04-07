import React, {useState} from "react";
import {Form} from "react-bootstrap";
import InputText from "../../common/form/InputText";
import TextArea from "../../common/form/TextArea";

const EducationForm = (props) => {

    const [education, setDegree] = useState({});

    const onFormEducationChange = (e) => {
        let updatedDegree = {...education};
        updatedDegree[e.target.name] = e.target.value;
        setDegree(updatedDegree);
        props.onChange(updatedDegree);
    }

    return (
        <Form onChange={onFormEducationChange}>
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
        </Form>
    );
}

export default EducationForm;
