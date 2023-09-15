export const SKILL = 'SKILL'
export const SKILL_SUCCES = 'SKILL_SUCCES'
export const SKILL_FAILURE = 'SKILL_FAILURE'

export const ADD_SKILL = 'ADD_SKILL'
export const ADD_SKILL_SUCCES = 'ADD_SKILL_SUCCES'
export const ADD_SKILL_FAILURE = 'ADD_SKILL_FAILURE'

export const UPDATE_SKILL = 'UPDATE_SKILL'
export const UPDATE_SKILL_SUCCES = 'UPDATE_SKILL_SUCCES'
export const UPDATE_SKILL_FAILURE = 'UPDATE_SKILL_FAILURE'

export const DELETE_SKILL = 'DELETE_SKILL'
export const DELETE_SKILL_SUCCES = 'DELETE_SKILL_SUCCES'
export const DELETE_SKILL_FAILURE = 'DELETE_SKILL_FAILURE'
export const SkillList = (params, callback) => {
    return {
        type: SKILL,
        params,
        callback
    }

}
export const SkillsListSuccess = (data) => {
    return {
        type: SKILL_SUCCES,
        data
    }

}
export const SkillsListFailure = (data) => {
    return {
        type: SKILL_FAILURE,
        data
    }

}
export const AddSkill = (params, callback) => {
    return {
        type: ADD_SKILL,
        params,
        callback
    }

}
export const AddSkillSuccess = (data) => {
    return {
        type: ADD_SKILL_SUCCES,
        data
    }

}
export const AddSkillFailure = (data) => {
    return {
        type: ADD_SKILL_FAILURE,
        data
    }

}

export const DeleteSkill = (params, callback) => {
    return {
        type: DELETE_SKILL,
        params,
        callback
    }

}
export const DeleteSkillSuccess = (data) => {
    return {
        type: DELETE_SKILL_SUCCES,
        data
    }

}
export const DeleteSkillFailure = (data) => {
    return {
        type: DELETE_SKILL_FAILURE,
        data
    }

}

export const UpdateSkill = (params, callback) => {
    return {
        type: UPDATE_SKILL,
        params,
        callback
    }

}
export const UpdateSkillSuccess = (data) => {
    return {
        type: UPDATE_SKILL_FAILURE,
        data
    }

}
export const UpdateSkillFailure = (data) => {
    return {
        type: UPDATE_SKILL_FAILURE,
        data
    }

}


