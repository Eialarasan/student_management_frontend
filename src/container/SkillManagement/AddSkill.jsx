import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import action from "../../redux/action";

const AddSkill = ({ openModal, onClose,skillDetails }) => {
    const [skillName, setskillName] = useState('')
    const [error, setError] = useState({})
    const dispatch = useDispatch()
    const toggle = (val) => {
        onClose();
    }
     
    useEffect(()=>{
      setskillName(skillDetails?.SkillName)
    },[])
    
    

    const submit = () => {
        if (!skillName) {
            setError({ skillName: 'Please enter skill name' })
        } else {
            const params={
                skillName
            }
            const callback=(res)=>{
               if(res?.response_code===0){
                onClose()
               }else{
                toast.error("Something went wrong")
               }
            }
            dispatch(action.AddSkill(params, callback))
            onClose()
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
                    <input id="inputText3" type="text" class="form-control" value={skillName} placeholder="Enter a name"
                        onChange={(e) => {
                            setskillName(e?.target?.value)
                        }} />
                    {error.skillName && <p style={{ 'color': 'red' }}>{error.skillName}</p>}
                </div>
               
            </ModalBody>
            <ModalFooter>
                <button class="btn btn-primary btn-sm" onClick={() => submit()}>Submit</button>

            </ModalFooter>
        </Modal >
    )
}
export default AddSkill