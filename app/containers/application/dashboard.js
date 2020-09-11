import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import {
    getGeneralStat,
} from './actions';
import {
    selectGetGeneralStat,
    selectGetGeneralStatSuccess,
} from './selectors';

const Dashboard = ({ getGeneralStatFunc, getGeneralStatStatus, getGeneralStatSuccess }) => {
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
    

    useEffect(() => {
        getGeneralStatFunc();
    }, [getGeneralStatFunc]);

    useEffect(() => {
        if (getGeneralStatStatus) {

            const {
                active_cases: activeCases,
                total_cases: totalCases,
                total_deaths: totalDeaths,
                suspected, recovered,
                recovery_rate: recoveryRate,
                death_rate: deathRate,
            } = getGeneralStatSuccess.generalStats[0];

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


    return (
        <div className="row">
            <div className="col-md-3 col-sm-12 col-xs-12">
                <div>
                    {generalStatValues.activeCases}
                </div>
                <div>
                    {generalStatValues.totalCases}
                </div>
                <div>
                    {generalStatValues.totalDeaths}
                </div>
                <div>
                    {generalStatValues.suspected}
                </div>
                <div>
                    {generalStatValues.recovered}
                </div>
                <div>
                    {generalStatValues.recoveryRate}
                </div>
                <div>
                    {generalStatValues.deathRate}
                </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
                <Table>
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
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
                <div>
                    a
                </div>
                <div>
                    b
                </div>
                <div>
                    c
                </div>
                <div>
                    d
                </div>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    getGeneralStatFunc: PropTypes.func.isRequired,
    getGeneralStatStatus: PropTypes.bool,
    getGeneralStatSuccess: PropTypes.number,
};

Dashboard.defaultProps = {
    getGeneralStatStatus: PropTypes.bool,
    getGeneralStatSuccess: null,
};

const mapStateToProps = createStructuredSelector({
    getGeneralStatStatus: selectGetGeneralStat(),
    getGeneralStatSuccess: selectGetGeneralStatSuccess(),
});

const mapDispatchToProps = dispatch => ({
    getGeneralStatFunc: () => dispatch(getGeneralStat()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
