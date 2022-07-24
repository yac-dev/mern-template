// main libraries
import React from 'react';
import { connect } from 'react-redux';

// mui
import MuiAlert from '@mui/material/Alert';

// ac
import { removeAlert } from '../../actionCreators/alerts';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const SnackBar = (props) => {
  const onClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.removeAlertActionCreator(props.id);
  };

  return (
    <>
      <Alert
        onClose={(event, reason) => onClose(event, reason)}
        elevation={6}
        sx={{ width: '100%' }}
        severity={props.snackBarType}
      >
        {props.message}
      </Alert>
    </>
  );
};

export default connect(null, { removeAlert })(SnackBar);
