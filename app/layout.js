import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import SafeComContext from './contexts/scContext';
import Header from './components/common/header';
import HeaderFront from './components/common/headerFront';
import Footer from './components/common/footer';
import util from './helpers/util';


const Layout = ({ children }) => {
    const safeComContext = useContext(SafeComContext);
    const { safeNotification, setShowDashboardLayout, showDashboardLayout } = safeComContext;

    useEffect(() => {
        const { type, message } = safeNotification;

        if (message) {
            switch (type) {
                case 'info':
                    NotificationManager.info(message);
                    break;
                case 'success':
                    NotificationManager.success(message);
                    break;
                case 'warning':
                    NotificationManager.warning(message);
                    break;
                case 'error':
                    NotificationManager.error(message);
                    break;
                default:
                    NotificationManager.info(message);
            }
        }
    }, [safeNotification]);

    useEffect(() => {
        if (util.isDashboardLayout()) {
            setShowDashboardLayout(true);
        } else {
            setShowDashboardLayout(false);
        }
    }, []);

    let header;

    if (showDashboardLayout) {
        header = <Header />;
    } else {
        header = <HeaderFront />;
    }

    return (
        <div>
            {header}
            <div
                className="container-fluid landing-customer-container"
                id="main-content-block"
            >
                {children}
            </div>
            <Footer />
            <NotificationContainer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;
