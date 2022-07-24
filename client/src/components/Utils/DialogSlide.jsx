// main libraries
import React, { useState, forwardRef } from 'react';
import { connect } from 'react-redux';
import { setCreatePollModal } from '../../actionCreators/modals';

// mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

// ac
import { createPoll } from '../../actionCreators/polls';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const DialogSlide = (props) => {
  return (
    <div>
      <Dialog
        open={props.modalOpen}
        TransitionComponent={Transition}
        keepMounted
        // onClose={() => props.setCreatePollModal(false)}
        aria-describedby='alert-dialog-slide-description'
        PaperProps={props.style}
      >
        <DialogTitle>{props.title}</DialogTitle>
        {/* <DialogContentText id='alert-dialog-slide-description'>{props.text}</DialogContentText> */}
        <DialogContent>{props.children}</DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={() => props.onClose()}>
            Close
          </Button>
          <Button variant='contained' onClick={() => props.onSubmit()}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

export default connect(mapStateToProps, { setCreatePollModal, createPoll })(DialogSlide);
