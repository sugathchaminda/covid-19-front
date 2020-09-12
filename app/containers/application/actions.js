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
} from '../../constants/action_types/application';

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

const getProvinceStat = data => ({
    type: GET_PROVINCE_STAT,
    data,
});

const getProvinceStatSuccess = response => ({
    type: GET_PROVINCE_STAT_SUCCESS,
    response,
});

const getProvinceStatFailed = error => ({
    type: GET_PROVINCE_STAT_FAILED,
    error,
});

export {
    getGeneralStat,
    getGeneralStatSuccess,
    getGeneralStatFailed,
    getDailyStat,
    getDailyStatSuccess,
    getDailyStatFailed,
    getProvinceStat,
    getProvinceStatSuccess,
    getProvinceStatFailed,
};
