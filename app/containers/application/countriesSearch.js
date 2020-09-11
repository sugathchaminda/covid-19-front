import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
    getSearchCountries,
} from './actions';
import {
    selectGetSearchCountries,
    selectGetSearchCountriesSuccess,
    selectGetSearchCountriesError,
} from './selectors';

const CountriesSearch = ({ searchCountries, getSearchCountriesStatus, getSearchCountriesSuccess, getSearchCountriesError }) => {
    const [searchedCountries, setSearchedCountries] = useState('');
    const [searchCountryError, setSearchCountryError] = useState('');

    const initialValues = {
        searchTerm: '',
    };

    const validationSchema = Yup.object().shape({
        searchTerm: Yup.string()
            .max(2, 'Max two characters are allowed')
            .required('Search Term cannot be empty'),
    });

    useEffect(() => {
        if (getSearchCountriesStatus) {
            setSearchCountryError('');
            setSearchedCountries(getSearchCountriesSuccess);
        }
    }, [getSearchCountriesStatus, getSearchCountriesSuccess]);

    useEffect(() => {
        if (getSearchCountriesError) {
            setSearchCountryError(getSearchCountriesError);
            setSearchedCountries('');
        }
    }, [getSearchCountriesError]);

    return (
        <div>
            <div className="col-md-12 main-dashboard-component">
                <h2>Search Countries</h2>
                <div className="form-container">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            actions.setSubmitting(false);
                            const data = {
                                searchTerm: values.searchTerm,
                            };
                            searchCountries(data);
                        }}
                    >
                        {({
                            values,
                            errors,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            touched,
                        }) => (
                            <form
                                className="row"
                                onSubmit={e => {
                                    e.preventDefault();
                                    handleSubmit();
                                }}
                            >
                                <div
                                    className={`floating-label-component col-md-8 ${
                                        touched.searchTerm && errors.searchTerm ? 'error' : ''
                                    }`}
                                >
                                    <input
                                        type="text"
                                        name="searchTerm"
                                        id="searchTerm"
                                        className={`form-control floating-label-input ${
                                            touched.searchTerm && errors.searchTerm
                                                ? 'error-input'
                                                : ''
                                        }`}
                                        placeholder="Search Term"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.searchTerm}
                                    />
                                    <span className="floating-label left-15">
                                        Search Term
                                    </span>
                                    {touched.searchTerm && errors.searchTerm && (
                                        <span className="error-label">
                                            {errors.searchTerm}
                                        </span>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn sc-btn-primary col-md-4"
                                >
                                    Search Countries
                                </button>
                            </form>
                        )}
                    </Formik>
                    <div className="result-container">
                        {
                            searchedCountries && (
                                <label>Searched Countries are : {searchedCountries}</label>
                            )
                        }

                    </div>
                    <div>
                        {
                            searchCountryError && (
                                <span className="error-country">
                                    {searchCountryError}
                                </span>
                            )
                        }
                    </div>
                </div>
            </div>
            <Link className="back-btn" to="/dashboard"><span className="icon-arrow-left" />Back To Dashboard</Link>
        </div>
    );
};

CountriesSearch.propTypes = {
    searchCountries: PropTypes.func.isRequired,
    getSearchCountriesStatus: PropTypes.bool,
    getSearchCountriesSuccess: PropTypes.string,
    getSearchCountriesError: PropTypes.string,
};

CountriesSearch.defaultProps = {
    getSearchCountriesStatus: PropTypes.bool,
    getSearchCountriesSuccess: null,
    getSearchCountriesError: null,
};
const mapStateToProps = createStructuredSelector({
    getSearchCountriesStatus: selectGetSearchCountries(),
    getSearchCountriesSuccess: selectGetSearchCountriesSuccess(),
    getSearchCountriesError: selectGetSearchCountriesError(),
});

const mapDispatchToProps = dispatch => ({
    searchCountries: data => dispatch(getSearchCountries(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesSearch);
