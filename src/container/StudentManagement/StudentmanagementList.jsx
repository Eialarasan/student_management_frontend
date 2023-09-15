import React, { useEffect, useState } from "react";
import AddStudent from "./AddStudent";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, getStudentList } from "../../redux/reducer/StudentReducers";
import action from "../../redux/action";
import { toast } from "react-toastify";
import Loader from "../../component/Loader";

const StudentManagement = () => {
    const [openAddStudentModal,setOpenAddStudentModal]=useState(false)
    const [openEditStudentModal, setOpenEditStudentModal] = useState(false)
    const [studDetails, setStudDetails] = useState({})
    const [search,setSearch]=useState("")
    const studentList=useSelector(getStudentList)
    const isLoading=useSelector(getLoading)
    const dispatch=useDispatch()

    useEffect(()=>{
      getStudentDetails()
    },[search])
    
     
    const getStudentDetails=()=>{
        const params={
            search
        }
        dispatch(action.StudentList(params))
    }
    const UpdateStudent=(data)=>{
      setStudDetails(data)
      setOpenEditStudentModal(true)
    }

    const deleteStudent=(id)=>{
        const params={
           id: id
        }
        const callback=(res)=>{
            if(res?.response_code===0){
                getStudentDetails()
            }else{
                toast.error("Sorry something went wrong")
            }
        }
        dispatch(action.DeleteStudent(params,callback))
    }
    return (
        <div class="container-fluid  dashboard-content">
            {
                isLoading && <Loader/>
            }
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="page-header">
                        <h2 class="pageheader-title">Student List</h2>
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
                                        <input class="form-control" type="text" 
                                        value={search} onChange={(e) => {
                                            setSearch(e.target.value)
                                            
                                        }} 
                                        placeholder="Search by Name" />
                                    </div>
                                    <div id="custom-search" class="top-search-bar">
                                        <button class="btn btn-primary btn-sm" onClick={()=>setOpenAddStudentModal(true)}>Add Student</button>
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
                                            <th>Name</th>
                                            <th>Skill Name</th>
                                            <th>Skill Level</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                     {
                                      studentList?.length>0&&  studentList?.map((o)=>{
                                          const { Studentskills }=o
                                            return <tr>
                                            <td>{o?.id}</td>
                                            <td>{o?.studentName}</td>
                                                <td>{Studentskills[0]?.Skill?.SkillName}</td>
                                                <td>{Studentskills[0]?.percentage}</td>
                                                <td> <button class="btn btn-primary btn-sm" onClick={() => UpdateStudent(o)}>Edit</button></td>
                                                <td> <button class="btn btn-primary btn-sm" onClick={() => deleteStudent(o?.id)}>Delete</button></td>
                                            </tr>
                                        })
                                        }{
                                            studentList?.length === 0 && <tr className="tr-shadow">
                                                <td colSpan="10" className="text-center">
                                                    No record found
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                openAddStudentModal&&<AddStudent 
                openModal={openAddStudentModal} 
                onClose={()=>{
                    setOpenAddStudentModal(false)
                    getStudentDetails()
                }}/>
            }
            {
                openEditStudentModal && <AddStudent 
                openModal={openEditStudentModal}
                onClose={() =>{
                 setOpenEditStudentModal(false)
                 getStudentDetails()
                }} 
                studDetails={studDetails}/>
            }
        </div>
    )
}
export default StudentManagement;