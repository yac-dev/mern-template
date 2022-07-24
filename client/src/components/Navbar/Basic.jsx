// main libraries
import * as React from 'react';
import { connect } from 'react-redux';

// mui
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BarChartIcon from '@mui/icons-material/BarChart';
import { styled, alpha } from '@mui/material/styles';

// ac
import { setCreatePollModal } from '../../actionCreators/modals';
import { setSignupModal } from '../../actionCreators/modals';
import { setLoginModal } from '../../actionCreators/modals';

const Basic = (props) => {
  const renderAuthMenuOrToolBar = () => {
    if (props.auth.data) {
      return (
        <>
          <IconButton size='large' color='inherit' onClick={() => (window.location = '/')}>
            <HowToVoteIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton size='large' color='inherit' onClick={() => props.setCreatePollModal(true)}>
            <BorderColorIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton size='large' color='inherit'>
            <BarChartIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton size='large' color='inherit'>
            <AccountCircle sx={{ color: 'white' }} />
          </IconButton>
        </>
      );
    } else {
      return (
        <>
          <span style={{ color: 'white' }} onClick={() => props.setSignupModal(true)}>
            Signup
          </span>
          <span style={{ color: 'white' }} onClick={() => props.setLoginModal(true)}>
            Login
          </span>
        </>
      );
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' style={{ background: 'rgb(0, 30, 60)', boxShadow: 'none' }}>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: 'block', color: 'white' }}
            onClick={() => {
              window.location = '/';
            }}
          >
            Lampost
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>{renderAuthMenuOrToolBar()}</Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { setCreatePollModal, setSignupModal, setLoginModal })(Basic);
