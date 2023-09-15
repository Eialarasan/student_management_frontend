import { all,fork} from 'redux-saga/effects'
import loginWatcher from './LoginSaga'
import studentWatcher from './StudentSaga'
import skillWatcher from './SkillSaga'


export default function* sagaWatchers() {
    yield all([
        fork(loginWatcher),
        fork(studentWatcher),
        fork(skillWatcher)

    ])
}