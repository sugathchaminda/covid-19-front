import React, { useCallback, useState, useEffect, useContext } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SafeComContext from '../../contexts/scContext';
import { userLogout } from '../../containers/login/actions';
import {
    selectUserLogoutStatus,
    selectUserLoginStatus,
} from '../../containers/login/selectors';


const Header = ({ logout, structuredSelectUserLogoutStatus, structuredSelectUserLoginStatus }) => {
    const safeComContext = useContext(SafeComContext);
    const { setShowDashboardLayout, showDashboardLayout } = safeComContext;

    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const toggleProfileDropdown = () => setProfileDropdownOpen(prevState => !prevState);

    const userDoLogout = useCallback(() => {
        logout();
    }, []);

    useEffect(() => {
        if (structuredSelectUserLogoutStatus) {
            setShowDashboardLayout(false);
            window.location = '/login';
        }
    }, [structuredSelectUserLogoutStatus]);

    return (
        <div className="header-wrap">
            COVID-19 : Live Situational Analysis Dashboard of Sri Lanka
            {showDashboardLayout && (
                <div className="right-section">
                    <Dropdown className="item" isOpen={profileDropdownOpen} toggle={toggleProfileDropdown} direction="down">
                        <DropdownToggle className="item btn sc-btn-white profile">
                            Profile
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick={() => userDoLogout()}>Logout</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            )}
        </div>
    );
};

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    structuredSelectUserLogoutStatus: PropTypes.bool,
    structuredSelectUserLoginStatus: PropTypes.bool,
};

Header.defaultProps = {
    structuredSelectUserLogoutStatus: false,
    structuredSelectUserLoginStatus: false,
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(userLogout()),
});

const mapStateToProps = createStructuredSelector({
    structuredSelectUserLogoutStatus: selectUserLogoutStatus(),
    structuredSelectUserLoginStatus: selectUserLoginStatus(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
