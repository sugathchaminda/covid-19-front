import { takeEvery, put, call } from 'redux-saga/effects';
import browserStorage from '../../helpers/browserStorage';
import {
    GET_COUNTRIES_DISTANCE,
    GET_GENERAL_STAT,
} from '../../constants/action_types/application';
import {
    getCountryDistanceSuccess,
    getCountryDistanceFailed,
    getGeneralStatSuccess,
    getGeneralStatFailed,
} from './actions';
import httpRequests from '../../helpers/httpRequests';
import util from '../../helpers/util';


export function* getCountryDistance(data) {
    try {
        const result = yield call(httpRequests.getCountriesData);
        if (result.status === 200) {
            const distance = util.getDistanceOfCountries(result.data, data.data);
            if (distance) {
                browserStorage.setLocalStorage('distance', distance);
                yield put(getCountryDistanceSuccess(distance));
            } else {
                yield put(getCountryDistanceFailed('Entered country codes have not matched'));
            }
        } else {
            yield put(getCountryDistanceFailed('Unable to fetch the country'));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error->getCountryDistance ', error);
        yield put(getCountryDistanceFailed(error));
    }
}


export function* getGeneralStat() {
    try {
        util.blockUi();

        const result = yield call(httpRequests.getGeneralStatData);

        util.unblockUi();

        if (result.data.status) {
            yield put(getGeneralStatSuccess(result));
        } else {
            yield put(getGeneralStatFailed(result.data.message));
        }
    } catch (error) {
        util.unblockUi();

        yield put(getGeneralStatFailed(error));
    }
}


export default function* dashboardSagas() {
    yield* [
        takeEvery(GET_COUNTRIES_DISTANCE, getCountryDistance),
        takeEvery(GET_GENERAL_STAT, getGeneralStat),
    ];
}
