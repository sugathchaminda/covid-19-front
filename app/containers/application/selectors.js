import { createSelector } from 'reselect';

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

const selectGetProvinceStat = () => createSelector(
    selectDashboardManagementState,
    currentState => currentState.provinceStatState,
);

const selectGetProvinceStatSuccess = () => createSelector(
    selectDashboardManagementState,
    currentState => currentState.provinceStatStateResponse,
);

const selectGetProvinceStatError = () => createSelector(
    selectDashboardManagementState,
    currentState => currentState.provinceStatStateError,
);

// /////////////////////


export {
    selectGetGeneralStat,
    selectGetGeneralStatSuccess,
    selectGetGeneralStatError,
    selectGetDailyStat,
    selectGetDailyStatSuccess,
    selectGetDailyStatError,
    selectGetProvinceStat,
    selectGetProvinceStatSuccess,
    selectGetProvinceStatError,

};
