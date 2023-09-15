import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import StudentReducers from './StudentReducers';
import SkillReducers from './SkillReducers';



export const reducers = combineReducers({
    LOGIN:LoginReducers,
    STUDENTS:StudentReducers,
    SKILL:SkillReducers
});
