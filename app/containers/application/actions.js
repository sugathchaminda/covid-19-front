import {
    GET_COUNTRIES_DISTANCE,
    GET_COUNTRIES_DISTANCE_SUCCESS,
    GET_COUNTRIES_DISTANCE_FAILED,
    GET_GENERAL_STAT,
    GET_GENERAL_STAT_FAILED,
    GET_GENERAL_STAT_SUCCESS,
    GET_DAILY_STAT,
    GET_DAILY_STAT_SUCCESS,
    GET_DAILY_STAT_FAILED,
    CLEAR_COUNTRY_DATA,
} from '../../constants/action_types/application';


const getCountryDistance = data => ({
    type: GET_COUNTRIES_DISTANCE,
    data,
});

const getCountryDistanceSuccess = response => ({
    type: GET_COUNTRIES_DISTANCE_SUCCESS,
    response,
});

const getCountryDistanceFailed = error => ({
    type: GET_COUNTRIES_DISTANCE_FAILED,
    error,
});


const clearCountryData = response => ({
    type: CLEAR_COUNTRY_DATA,
    response,
});

// need to remove //

const getGeneralStat = data => ({
    type: GET_GENERAL_STAT,
    data,
});

const getGeneralStatSuccess = response => ({
    type: GET_GENERAL_STAT_SUCCESS,
    response,
});

const getGeneralStatFailed = error => ({
    type: GET_GENERAL_STAT_FAILED,
    error,
});

const getDailyStat = data => ({
    type: GET_DAILY_STAT,
    data,
});

const getDailyStatSuccess = response => ({
    type: GET_DAILY_STAT_SUCCESS,
    response,
});

const getDailyStatFailed = error => ({
    type: GET_DAILY_STAT_FAILED,
    error,
});
// need to remove //

export {
    getCountryDistance,
    getCountryDistanceSuccess,
    getCountryDistanceFailed,
    getGeneralStat,
    getGeneralStatSuccess,
    getGeneralStatFailed,
    clearCountryData,
    getDailyStat,
    getDailyStatSuccess,
    getDailyStatFailed,
};
