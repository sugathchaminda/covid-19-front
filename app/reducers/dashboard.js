import {
    GET_GENERAL_STAT,
    GET_GENERAL_STAT_FAILED,
    GET_GENERAL_STAT_SUCCESS,
    GET_DAILY_STAT,
    GET_DAILY_STAT_SUCCESS,
    GET_DAILY_STAT_FAILED,
    GET_PROVINCE_STAT,
    GET_PROVINCE_STAT_SUCCESS,
    GET_PROVINCE_STAT_FAILED,
} from '../constants/action_types/application';

const initialState = {
    generalStatState: false,
    generalStatStateResponse: {},
    generalStatStateError: null,
    dailyStatState: false,
    dailyStatStateResponse: {},
    dailyStatStateError: null,
    provinceStatState: false,
    provinceStatStateResponse: {},
    provinceStatStateError: null,
};

export default function dashboard(state = initialState, action) {
    switch (action.type) {
        case GET_GENERAL_STAT:
            return { ...state, generalStatState: false, generalStatStateResponse: {}, generalStatStateError: null };
        case GET_GENERAL_STAT_SUCCESS:
            return { ...state, generalStatState: true, generalStatStateResponse: action.response, generalStatStateError: null };
        case GET_GENERAL_STAT_FAILED:
            return { ...state, generalStatState: false, generalStatStateResponse: {}, generalStatStateError: action.error };
        case GET_DAILY_STAT:
            return { ...state, dailyStatState: false, dailyStatStateResponse: {}, dailyStatStateError: null };
        case GET_DAILY_STAT_SUCCESS:
            return { ...state, dailyStatState: true, dailyStatStateResponse: action.response, dailyStatStateError: null };
        case GET_DAILY_STAT_FAILED:
            return { ...state, dailyStatState: false, dailyStatStateResponse: {}, dailyStatStateError: action.error };
        case GET_PROVINCE_STAT:
            return { ...state, provinceStatState: false, provinceStatStateResponse: {}, provinceStatStateError: null };
        case GET_PROVINCE_STAT_SUCCESS:
            return { ...state, provinceStatState: true, provinceStatStateResponse: action.response, provinceStatStateError: null };
        case GET_PROVINCE_STAT_FAILED:
            return { ...state, provinceStatState: false, provinceStatStateResponse: {}, provinceStatStateError: action.error };
        default:
            return state;
    }
}
