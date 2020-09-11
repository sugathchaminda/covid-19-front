import {
    GET_GENERAL_STAT,
    GET_GENERAL_STAT_FAILED,
    GET_GENERAL_STAT_SUCCESS,
} from '../constants/action_types/application';

const initialState = {
    generalStatState: false,
    generalStatStateResponse: {},
    generalStatStateError: null,
};

export default function dashboard(state = initialState, action) {
    switch (action.type) {
        case GET_GENERAL_STAT:
            return { ...state, generalStatState: false, generalStatStateResponse: {}, generalStatStateError: null };
        case GET_GENERAL_STAT_SUCCESS:
            return { ...state, generalStatState: true, generalStatStateResponse: action.response.data, generalStatStateError: null };
        case GET_GENERAL_STAT_FAILED:
            return { ...state, generalStatState: false, generalStatStateResponse: {}, generalStatStateError: action.error };
        default:
            return state;
    }
}