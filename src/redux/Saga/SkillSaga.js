import { takeLatest, all, put } from 'redux-saga/effects';
import END_POINTS from '../../service/EndPoints';
import {doGet, doPost } from '../../service';
import Actions from '../action';

export function* skillListSaga({ params, callback }) {
    try {
        const response = yield doGet(END_POINTS.SKILL_LIST, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.SkillsListSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.SkillsListFailure(error))

    }
}

export function* addSkillSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.ADD_SKILL, params)
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
export function* UpdateSKillSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.UPDATE_SKILL, params)
        yield put(Actions.UpdateSkillSuccess(response))
        if (callback) {
            callback(response)
        }
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.UpdateSkillFailure(error))

    }
}

export function* DeleteSkillSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.DELETE_SKILL, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.DeleteSkillSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.DeleteSkillFailure(error))
    }
}



export default function* skillListWatcher() {
    yield all([
        takeLatest(Actions.SKILL, skillListSaga),
        takeLatest(Actions.ADD_SKILL, addSkillSaga),
        takeLatest(Actions.DELETE_SKILL, DeleteSkillSaga),
        takeLatest(Actions.UPDATE_SKILL, UpdateSKillSaga)
    ]);
}
