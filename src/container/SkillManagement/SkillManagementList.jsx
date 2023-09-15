import React, { useEffect, useState } from "react";
import AddSkill from "./AddSkill";
import { useDispatch, useSelector } from "react-redux";
import action from "../../redux/action";
import { getLoading, getskillList } from "../../redux/reducer/SkillReducers";
import { toast } from "react-toastify";
import Loader from "../../component/Loader";

const SkillmanagementList = () => {
    const [openAddSkill, setopenAddSkill] = useState(false)
    const [editSkillModal, setEditSillModal] = useState(false)
    const [skillDetails, setSkillDetails] = useState({})
    const isLoading=useSelector(getLoading)
    const skillList = useSelector(getskillList)
    const dispatch = useDispatch()
    useEffect(() => {
        getSkillList()
    }, [])

    const getSkillList = () => {
        dispatch(action.SkillList())
    }

    const UpdateSkill = (data) => {
        setSkillDetails(data)
        setEditSillModal(true)
    }

    const deleteSkill = (id) => {
        const params = {
            id: id
        }
        const callback = (res) => {
            if (res?.response_code === 0) {
                getSkillList()
            } else {
                toast.error("Sorry something went wrong")
            }
        }
        dispatch(action.DeleteSkill(params, callback))
    }
    return (
        <div class="container-fluid  dashboard-content">
            {
                isLoading && <Loader />
            }
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="page-header">
                        <h2 class="pageheader-title">Skill List</h2>
                        <div class="page-breadcrumb">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card">
                        <ul class="navbar-nav ml-auto navbar-left-top">
                            <li class="nav-item">
                                <div className="d-flex">
                                    <div id="custom-search" class="top-search-bar">
                                        <button class="btn btn-primary btn-sm" onClick={() => setopenAddSkill(true)}>Add Skill</button>
                                    </div>
                                </div>
                            </li>

                        </ul>

                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered first">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Skill Name</th>
                                            <th>Action</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            skillList?.length > 0 && skillList?.map((o) => {

                                                return <tr>
                                                    <td>{o?.id}</td>
                                                    <td>{o?.SkillName}</td>
                                                    <td> <button class="btn btn-primary btn-sm" onClick={() => UpdateSkill(o)}>Edit</button></td>
                                                    <td> <button class="btn btn-primary btn-sm" onClick={() => deleteSkill(o?.id)}>Delete</button></td>

                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                openAddSkill && <AddSkill
                    openModal={openAddSkill}
                    onClose={() => {
                        setopenAddSkill(false)
                        getSkillList()
                    }} />
            }
            {
                editSkillModal && <AddSkill
                    skillDetails={skillDetails}
                    openModal={editSkillModal}
                    onClose={() => {
                        setopenAddSkill(false)
                        getSkillList()
                    }} />
            }
        </div>
    )
}
export default SkillmanagementList;