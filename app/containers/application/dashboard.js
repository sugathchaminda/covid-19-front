import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import {
    getGeneralStat,
    getDailyStat,
    getProvinceStat,
} from './actions';
import {
    selectGetGeneralStat,
    selectGetGeneralStatSuccess,
    selectGetDailyStat,
    selectGetDailyStatSuccess,
    selectGetProvinceStat,
    selectGetProvinceStatSuccess,
} from './selectors';

const Dashboard = ({
    getGeneralStatFunc,
    getGeneralStatStatus,
    getGeneralStatSuccess,
    getDailyStatFunc,
    getDailyStatStatus,
    getDailyStatSuccess,
    getProvinceStatFunc,
    getProvinceStatStatus,
    getProvinceStatSuccess,
}) => {
    const [generalStatValues, setGeneralStatValues] = useState({
        activeCases: 0,
        totalCases: 0,
        totalDeaths: 0,
        suspected: 0,
        recovered: 0,
        recoveryRate: '',
        deathRate: '',
    });
    const [dailyStatValues, setDailyStatValues] = useState({
        recovered: 0,
        newCases: 0,
        newDeaths: 0,
    });
    const [provinceData, setProvinceData] = useState([]);

    useEffect(() => {
        getGeneralStatFunc();
        getDailyStatFunc();
        getProvinceStatFunc();
    }, [getGeneralStatFunc, getDailyStatFunc, getProvinceStatFunc]);

    useEffect(() => {
        if (getGeneralStatStatus) {
            const {
                active_cases: activeCases,
                total_cases: totalCases,
                total_deaths: totalDeaths,
                suspected, recovered,
                recovery_rate: recoveryRate,
                death_rate: deathRate,
            } = getGeneralStatSuccess[0];

            setGeneralStatValues({
                activeCases,
                totalCases,
                totalDeaths,
                suspected,
                recovered,
                recoveryRate,
                deathRate,
            });
        }
    }, [getGeneralStatStatus, getGeneralStatSuccess]);

    useEffect(() => {
        if (getDailyStatStatus) {
            const {
                recovered,
                new_cases: newCases,
                new_deaths: newDeaths,
            } = getDailyStatSuccess[0];

            setDailyStatValues({
                recovered,
                newCases,
                newDeaths,
            });
        }
    }, [getDailyStatStatus, getDailyStatSuccess]);

    useEffect(() => {
        if (getProvinceStatStatus) {
            let data = '';

            data = getProvinceStatSuccess.map((val, key) => {
                const { name, stat } = val;

                return (
                    <tr key={key}>
                        <td>{name}</td>
                        <td>{stat.recovered}</td>
                        <td>{stat.active_cases}</td>
                        <td>{stat.total_cases}</td>
                        <td>{stat.total_deaths}</td>
                        <td>{stat.suspected}</td>
                    </tr>
                );
            });
            setProvinceData(data);
        }
    }, [getProvinceStatStatus, getProvinceStatSuccess]);


    return (
        <div>
            <div className="row">
                <div className="col-md-3 col-sm-12 col-xs-12 side-block">
                    <h2>Total Figures (SL)</h2>
                    <div className="item">
                        <span className="title">Total Active Cases</span>
                        <span className="count">{generalStatValues.activeCases}</span>
                    </div>
                    <div className="item">
                        <span className="title">Total Confirmed Cases</span>
                        <span className="count">{generalStatValues.totalCases}</span>
                    </div>
                    <div className="item">
                        <span className="title">Deaths</span>
                        <span className="count">{generalStatValues.totalDeaths}</span>
                    </div>
                    <div className="item">
                        <span className="title">Suspected & Hospitalized</span>
                        <span className="count">{generalStatValues.suspected}</span>
                    </div>
                    <div className="item">
                        <span className="title">Recovered & Discharged</span>
                        <span className="count">{generalStatValues.recovered}</span>
                    </div>
                    <div className="item">
                        <span className="title">Recovery Rate</span>
                        <span className="count">{generalStatValues.recoveryRate}</span>
                    </div>
                    <div className="item">
                        <span className="title">Death Rate</span>
                        <span className="count">{generalStatValues.deathRate}</span>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 table-block">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Province</th>
                                <th>Recovered</th>
                                <th>Active</th>
                                <th>Total</th>
                                <th>Death</th>
                                <th>Suspected</th>
                            </tr>
                        </thead>
                        <tbody>
                            {provinceData}
                        </tbody>
                    </Table>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12 side-block">
                    <h2>Daily Figures (SL)</h2>
                    <div className="item">
                        <span className="title">New Cases</span>
                        <span className="count">{dailyStatValues.newCases}</span>
                    </div>
                    <div className="item">
                        <span className="title">Deaths</span>
                        <span className="count">{dailyStatValues.newDeaths}</span>
                    </div>
                    <div className="item">
                        <span className="title">Recovered & Discharged</span>
                        <span className="count">{dailyStatValues.recovered}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    getGeneralStatFunc: PropTypes.func.isRequired,
    getGeneralStatStatus: PropTypes.bool,
    getGeneralStatSuccess: PropTypes.object,
    getDailyStatFunc: PropTypes.func.isRequired,
    getDailyStatStatus: PropTypes.bool,
    getDailyStatSuccess: PropTypes.object,
    getProvinceStatFunc: PropTypes.func.isRequired,
    getProvinceStatStatus: PropTypes.bool,
    getProvinceStatSuccess: PropTypes.object,
};

Dashboard.defaultProps = {
    getGeneralStatStatus: PropTypes.bool,
    getGeneralStatSuccess: {},
    getDailyStatStatus: PropTypes.bool,
    getDailyStatSuccess: null,
    getProvinceStatStatus: PropTypes.bool,
    getProvinceStatSuccess: null,
};

const mapStateToProps = createStructuredSelector({
    getGeneralStatStatus: selectGetGeneralStat(),
    getGeneralStatSuccess: selectGetGeneralStatSuccess(),
    getDailyStatStatus: selectGetDailyStat(),
    getDailyStatSuccess: selectGetDailyStatSuccess(),
    getProvinceStatStatus: selectGetProvinceStat(),
    getProvinceStatSuccess: selectGetProvinceStatSuccess(),
});

const mapDispatchToProps = dispatch => ({
    getGeneralStatFunc: () => dispatch(getGeneralStat()),
    getDailyStatFunc: () => dispatch(getDailyStat()),
    getProvinceStatFunc: () => dispatch(getProvinceStat()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
