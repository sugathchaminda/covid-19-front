import { createSelector } from 'reselect';

const selectCountryManagementState = state => state.countryManagement;

const selectGetCountryDistance = () => createSelector(
    selectCountryManagementState,
    currentState => currentState.selectCountryDistanceStatus,
);

const selectGetCountryDistanceSuccess = () => createSelector(
    selectCountryManagementState,
    currentState => currentState.selectCountryDistanceResponse,
);

const selectGetCountryDistanceError = () => createSelector(
    selectCountryManagementState,
    currentState => currentState.selectCountryDistanceError,
);


// ////////////////////////
const selectDashboardManagementState = state => state.dashboard;

const selectGetGeneralStat = () => createSelector(
    selectDashboardManagementState,
    currentState => currentState.generalStatState,
);

const selectGetGeneralStatSuccess = () => createSelector(
    selectDashboardManagementState,
    currentState => currentState.generalStatStateResponse,
);

const selectGetGeneralStatError = () => createSelector(
    selectDashboardManagementState,
    currentState => currentState.generalStatStateError,
);

const selectGetDailyStat = () => createSelector(
    selectDashboardManagementState,
    currentState => currentState.dailyStatState,
);

const selectGetDailyStatSuccess = () => createSelector(
    selectDashboardManagementState,
    currentState => currentState.dailyStatStateResponse,
);

const selectGetDailyStatError = () => createSelector(
    selectDashboardManagementState,
    currentState => currentState.dailyStatStateError,
);

// /////////////////////


export {
    selectGetCountryDistance,
    selectGetCountryDistanceSuccess,
    selectGetCountryDistanceError,
    selectGetGeneralStat,
    selectGetGeneralStatSuccess,
    selectGetGeneralStatError,
    selectGetDailyStat,
    selectGetDailyStatSuccess,
    selectGetDailyStatError,

};
