import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import action from "../../redux/action";
import { getDashboard } from "../../redux/reducer/StudentReducers";

const Dashboard=()=>{
    const dispatch=useDispatch()
    const dashboardSelector=useSelector(getDashboard)
    const{dashboardData,totalStudents}=dashboardSelector||{}
    useEffect(()=>{
        dispatch(action.GetDashBoard())
    },[])
    return (
        <div >
            <div class="dashboard-influence">
                <div class="container-fluid dashboard-content">
                    <h1>Dashboard</h1>

                    <div class="row">

                    </div>
                    <div class="row">
                    {dashboardData?.length>0&& dashboardData?.map((o) => {
                         
                        return <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-inline-block">
                                            <h5 class="text-muted">{o?.skillName}</h5>
                                            <h2 class="mb-0"> {o?.count!=="NaN%"?o?.count:"0%"}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                    })}
                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-inline-block">
                                        <h5 class="text-muted">Total Students</h5>
                                        <h2 class="mb-0"> {totalStudents}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard