import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import action from "../../redux/action";
import { getskillList } from "../../redux/reducer/SkillReducers";

const AddStudent = ({ openModal, onClose, studDetails }) => {
    const [studentName, setStudentName] = useState('')
    const [studentSkill, setStudentSkill] = useState('')
    const [skillLevel, setSkillLevel] = useState('')
    const [error, setError] = useState({})
    const skillList = useSelector(getskillList)
    const dispatch = useDispatch()
    const toggle = (val) => {
        onClose();
    }

    const getSkillList = () => {
        dispatch(action.SkillList())
    }
    useEffect(() => {
        setStudentName(studDetails?.studentName)
        setSkillLevel(studDetails?.Studentskills[0]?.percentage)
        setStudentSkill(studDetails?.Studentskills[0]?.SkillId)
        getSkillList()
    }, [])

    const submit = () => {
        if (!studentName) {
            setError({ studentName: 'Please enter student name' })
        } else if (!studentSkill) {
            setError({ studentSkill: "Please select student skill" })
        } else if (!skillLevel) {
            setError({ skillLevel: "Please enter skill level" })
        } else {
            const callback = (res) => {
                if (res?.response_code === 0) {
                    setSkillLevel("")
                    setStudentName("")
                    setStudentSkill("")
                    setError("")
                    onClose()
                } else {
                    toast.error("Sorry Something went wrong")
                }
            }
            if (studDetails?.id) {
                const params = {
                    "id": studDetails?.id,
                    "studentName": studentName,
                    "skillId": studentSkill,
                    "percentage": skillLevel
                }
                dispatch(action.UpdateStudent(params, callback))
            } else {
                const params = {
                    "studentName": studentName,
                    "skillId": studentSkill,
                    "percentage": skillLevel
                }
                dispatch(action.AddStudent(params, callback))
            }
        }
    }

    return (
        <Modal show={openModal} centered={true}>
            <ModalHeader>
                <h5 >Add Student</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={() => toggle(false)} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </ModalHeader>
            <ModalBody>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Student Name</label>
                    <input id="inputText3" type="text" class="form-control" value={studentName} placeholder="Enter a name"
                        onChange={(e) => {
                            setStudentName(e?.target?.value)
                        }} />
                    {error.studentName && <p style={{ 'color': 'red' }}>{error.studentName}</p>}
                </div>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Student Skill</label>
                    <select className="form-control" value={studentSkill} onChange={(e) => setStudentSkill(e?.target?.value)}>
                        <option>
                            Select Skill
                        </option>
                        {skillList?.map((o) => {
                            return <option value={o?.id}>
                                {o?.SkillName}
                            </option>
                        })
                        }
                    </select>
                    {error.studentSkill && <p style={{ 'color': 'red' }}>{error.studentSkill}</p>}
                </div>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Skill Level</label>
                    <input id="inputText3" type="text" class="form-control" value={skillLevel} placeholder="Enter a name"
                        onChange={(e) => {
                            setSkillLevel(e?.target?.value)
                        }} />
                    {error.skillLevel && <p style={{ 'color': 'red' }}>{error.skillLevel}</p>}
                </div>
            </ModalBody>
            <ModalFooter>
                <button class="btn btn-primary btn-sm" onClick={() => submit()}>Submit</button>
            </ModalFooter>
        </Modal >
    )
}
export default AddStudent