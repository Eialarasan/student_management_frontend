export const STUDENT_LIST = 'STUDENT_LIST'
export const STUDENT_LIST_SUCCES = 'STUDENT_LIST_SUCCES'
export const STUDENT_LIST_FAILURE = 'STUDENT_LIST_FAILURE'

export const ADD_STUDENT = 'ADD_STUDENT'
export const ADD_STUDENT_SUCCES = 'ADD_STUDENT_SUCCES'
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE'

export const UPDATE_STUDENT = 'UPDATE_STUDENT'
export const UPDATE_STUDENT_SUCCES = 'UPDATE_STUDENT_SUCCES'
export const UPDATE_STUDENT_FAILURE = 'UPDATE_STUDENT_FAILURE'

export const DELETE_STUDENT = 'DELETE_STUDENT'
export const DELETE_STUDENT_SUCCES = 'DELETE_STUDENT_SUCCES'
export const DELETE_STUDENT_FAILURE = 'DELETE_STUDENT_FAILURE'

export const DASHBOARD = 'DASHBOARD'
export const DASHBOARD_SUCCES = 'DASHBOARD_SUCCES'
export const DASHBOARD_FAILURE = 'DASHBOARD_FAILURE'
export const StudentList = (params, callback) => {
    return {
        type: STUDENT_LIST,
        params,
        callback
    }

}
export const StudentsListSuccess = (data) => {
    return {
        type: STUDENT_LIST_SUCCES,
        data
    }

}
export const StudentsListFailure = (data) => {
    return {
        type: STUDENT_LIST_FAILURE,
        data
    }

}
export const AddStudent = (params, callback) => {
    return {
        type: ADD_STUDENT,
        params,
        callback
    }

}
export const AddStudentSuccess = (data) => {
    return {
        type: ADD_STUDENT_SUCCES,
        data
    }

}
export const AddStudentFailure = (data) => {
    return {
        type: ADD_STUDENT_FAILURE,
        data
    }

}

export const DeleteStudent = (params, callback) => {
    return {
        type: DELETE_STUDENT,
        params,
        callback
    }

}
export const DeleteStudentSuccess = (data) => {
    return {
        type: DELETE_STUDENT_SUCCES,
        data
    }

}
export const DeleteStudentFailure = (data) => {
    return {
        type: DELETE_STUDENT_FAILURE,
        data
    }

}

export const UpdateStudent = (params, callback) => {
    return {
        type: UPDATE_STUDENT,
        params,
        callback
    }

}
export const UpdateStudentSuccess = (data) => {
    return {
        type: UPDATE_STUDENT_FAILURE,
        data
    }

}
export const UpdateStudentFailure = (data) => {
    return {
        type: UPDATE_STUDENT_FAILURE,
        data
    }

}
export const GetDashBoard = (params, callback) => {
    return {
        type: DASHBOARD,
        params,
        callback
    }

}
export const GetDashBoardSuccess = (data) => {
    return {
        type: DASHBOARD_SUCCES,
        data
    }

}
export const GetDashBoardFailure = (data) => {
    return {
        type: DASHBOARD_FAILURE,
        data
    }

}


