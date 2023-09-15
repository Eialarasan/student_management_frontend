import Actions from '../action';

const initialState = {
    isLoading: false,
    error: null,
    skillList: []
}

const SkillReducers = (state = initialState, action) => {

    switch (action.type) {
        case Actions.SKILL: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.SKILL_SUCCES: {
            return {
                ...state,
                isLoading: false,
                skillList: action.data?.response,
                error: false
            };
        }
        case Actions.SKILL_FAILURE: {
            return {
                ...state,
                isLoading: false,
                skillList: [],
                error: action.error,
            };
        }

        case Actions.ADD_SKILL: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.ADD_SKILL_SUCCES: {
            return {
                ...state,
                isLoading: false,
                addSkill: action.data,
                error: false
            };
        }
        case Actions.ADD_SKILL_FAILURE: {
            return {
                ...state,
                isLoading: false,
                addSkill: undefined,
                error: action.error,
            };
        }

        case Actions.UPDATE_SKILL: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.UPDATE_SKILL_SUCCES: {
            return {
                ...state,
                isLoading: false,
                updateStudent: action.data,
                error: false
            };
        }
        case Actions.UPDATE_SKILL_FAILURE: {
            return {
                ...state,
                isLoading: false,
                updateStudent: undefined,
                error: action.error,
            };
        }
        case Actions.DELETE_SKILL: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.DELETE_SKILL_SUCCES: {
            return {
                ...state,
                isLoading: false,
                error: false
            };
        }
        case Actions.DELETE_SKILL_FAILURE: {
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

export const getskillList = (state) => state?.SKILL?.skillList
export const getLoading = (state) => state?.SKILL?.isLoading


export default SkillReducers;
