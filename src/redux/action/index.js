import * as Login from './LoginAction'
import * as Student from './StudentAction'
import * as Skill from './SkillAction'

export default {
    ...Login,
    ...Student,
    ...Skill
}