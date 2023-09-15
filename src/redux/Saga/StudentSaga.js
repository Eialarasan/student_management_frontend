import { takeLatest, all, put } from 'redux-saga/effects';
import END_POINTS from '../../service/EndPoints';
import {doGet, doPost } from '../../service';
import Actions from '../action';

export function* studentListSaga({ params, callback }) {
    try {
        const response = yield doGet(END_POINTS.STUDENT_LIST, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.StudentsListSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.StudentsListFailure(error))

    }
}

export function* addStudentSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.ADD_STUDENT, params)
        yield put(Actions.AddStudentSuccess(response))
        if (callback) {
            callback(response)
        }
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.AddStudentFailure(error))

    }
}
export function* UpdateStudentSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.UPDATE_STUDENT, params)
        yield put(Actions.UpdateStudentSuccess(response))
        if (callback) {
            callback(response)
        }
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.UpdateStudentFailure(error))

    }
}

export function* DeleteStudentSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.DELETE_STUDENT, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.DeleteStudentSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.DeleteStudentFailure(error))
    }
}

export function* DashboardSaga({ params, callback }) {
    try {
        const response = yield doGet(END_POINTS.DASHBOARD, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.GetDashBoardSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.GetDashBoardFailure(error))
    }
}


export default function* studentWatcher() {
    yield all([
        takeLatest(Actions.STUDENT_LIST, studentListSaga),
        takeLatest(Actions.ADD_STUDENT, addStudentSaga),
        takeLatest(Actions.DELETE_STUDENT, DeleteStudentSaga),
        takeLatest(Actions.UPDATE_STUDENT, UpdateStudentSaga),
        takeLatest(Actions.DASHBOARD, DashboardSaga)

    ]);
}
