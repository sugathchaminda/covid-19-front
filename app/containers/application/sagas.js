import { takeEvery, put, call } from 'redux-saga/effects';
import browserStorage from '../../helpers/browserStorage';
import {
    GET_GENERAL_STAT,
    GET_DAILY_STAT,
    GET_PROVINCE_STAT,
} from '../../constants/action_types/application';
import {
    getGeneralStatSuccess,
    getGeneralStatFailed,
    getDailyStatSuccess,
    getDailyStatFailed,
    getProvinceStatSuccess,
    getProvinceStatFailed,
} from './actions';
import httpRequests from '../../helpers/httpRequests';
import util from '../../helpers/util';

export function* getGeneralStat() {
    try {
        util.blockUi();

        const result = yield call(httpRequests.getGeneralStatData);

        util.unblockUi();

        if (result.data.status) {
            const { data: { generalStats } } = result;

            browserStorage.setLocalStorage('generalStat', generalStats);
            yield put(getGeneralStatSuccess(generalStats));
        } else {
            yield put(getGeneralStatFailed(result.data.message));
        }
    } catch (error) {
        util.unblockUi();
        // eslint-disable-next-line no-console
        console.log('error->getGeneralStat ', error);

        if (error.isAxiosError) {
            const offlineGeneralStat = browserStorage.getLocalStorage('generalStat');
            yield put(getGeneralStatSuccess(offlineGeneralStat));
        } else {
            yield put(getGeneralStatFailed(error));
        }
    }
}

export function* getDailyStat() {
    try {
        util.blockUi();

        const result = yield call(httpRequests.getDailyStatData);

        util.unblockUi();

        if (result.data.status) {
            const { data: { dailyStats } } = result;

            browserStorage.setLocalStorage('dailyStat', dailyStats);
            yield put(getDailyStatSuccess(dailyStats));
        } else {
            yield put(getDailyStatFailed(result.data.message));
        }
    } catch (error) {
        util.unblockUi();
        // eslint-disable-next-line no-console
        console.log('error->getDailyStat ', error);

        if (error.isAxiosError) {
            const offlineDailyStat = browserStorage.getLocalStorage('dailyStat');
            yield put(getDailyStatSuccess(offlineDailyStat));
        } else {
            yield put(getDailyStatFailed(error));
        }
    }
}

export function* getProvinceStat() {
    try {
        util.blockUi();

        const result = yield call(httpRequests.getProvinceStatData);

        util.unblockUi();

        if (result.data.status) {
            const { data: { provinceStats } } = result;

            browserStorage.setLocalStorage('provinceStat', provinceStats);
            yield put(getProvinceStatSuccess(provinceStats));
        } else {
            yield put(getProvinceStatFailed(result.data.message));
        }
    } catch (error) {
        util.unblockUi();
        // eslint-disable-next-line no-console
        console.log('error->getProvinceStat ', error);

        if (error.isAxiosError) {
            const offlineProvinceStat = browserStorage.getLocalStorage('provinceStat');
            yield put(getProvinceStatSuccess(offlineProvinceStat));
        } else {
            yield put(getProvinceStatFailed(error));
        }
    }
}


export default function* dashboardSagas() {
    yield* [
        takeEvery(GET_GENERAL_STAT, getGeneralStat),
        takeEvery(GET_DAILY_STAT, getDailyStat),
        takeEvery(GET_PROVINCE_STAT, getProvinceStat),
    ];
}
