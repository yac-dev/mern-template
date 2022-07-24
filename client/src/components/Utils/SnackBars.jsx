// main libraries
import React from 'react';
import { connect } from 'react-redux';

// mui
import Stack from '@mui/material/Stack';

// component
import SnackBar from './SnackBar';

const SnackBars = (props) => {
  const renderAlerts = () => {
    if (props.alerts.length) {
      const alertsSnackBars = props.alerts.map((alert) => {
        return <SnackBar open={true} id={alert.id} snackBarType={alert.alertType} message={alert.message} />;
      });

      return (
        <div style={{ position: 'absolute', top: '55px', right: '20px' }}>
          <Stack spacing={2}>{alertsSnackBars}</Stack>
        </div>
      );
    }
  };
  return <>{renderAlerts()}</>;
};

const mapStateToProps = (state) => {
  return { alerts: state.alerts };
};

export default connect(mapStateToProps)(SnackBars);
