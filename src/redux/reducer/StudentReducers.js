import Actions from '../action';

const initialState = {
    isLoading: false,
    error: null,
    studentList: [],
    dashboard: [],
}

const StudentReducers = (state = initialState, action) => {

    switch (action.type) {
        case Actions.STUDENT_LIST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.STUDENT_LIST_SUCCES: {
            return {
                ...state,
                isLoading: false,
                studentList: action.data?.response,
                error: false
            };
        }
        case Actions.STUDENT_LIST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                studentList: [],
                error: action.error,
            };
        }

        case Actions.ADD_STUDENT: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.ADD_STUDENT_SUCCES: {
            return {
                ...state,
                isLoading: false,
                addStudent: action.data,
                error: false
            };
        }
        case Actions.ADD_STUDENT_FAILURE: {
            return {
                ...state,
                isLoading: false,
                addStudent: undefined,
                error: action.error,
            };
        }

        case Actions.UPDATE_STUDENT: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.UPDATE_STUDENT_SUCCES: {
            return {
                ...state,
                isLoading: false,
                updateStudent: action.data,
                error: false
            };
        }
        case Actions.UPDATE_STUDENT_FAILURE: {
            return {
                ...state,
                isLoading: false,
                updateStudent: undefined,
                error: action.error,
            };
        }
        case Actions.DELETE_STUDENT: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.DELETE_STUDENT_SUCCES: {
            return {
                ...state,
                isLoading: false,
                error: false
            };
        }
        case Actions.DELETE_STUDENT_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        }
        case Actions.DASHBOARD: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.DASHBOARD_SUCCES: {
            return {
                ...state,
                isLoading: false,
                dashboard:action.data?.response,
                error: false
            };
        }
        case Actions.DASHBOARD_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        }

        default:
            return state;
    }
};

export const getStudentList = (state) => state?.STUDENTS?.studentList
export const getDashboard = (state) => state?.STUDENTS?.dashboard
export const getLoading = (state) => state?.STUDENTS?.isLoading


export default StudentReducers;
