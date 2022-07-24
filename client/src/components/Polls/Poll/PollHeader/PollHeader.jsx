// main libraries
import React from 'react';

// css
import './pollHeader.css';

// mui
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// utils
import { timeSince } from '../../../../utils/timeSince';

const PollHeader = (props) => {
  // なんでif statement必要になるか？？
  if (props.poll.creator) {
    return (
      <div className='poll-herder-wrapper'>
        <Avatar sx={{ marginRight: '10px' }}>{props.poll.creator.name}</Avatar>
        <div style={{}}>
          <Typography variant='body2'>{props.poll.creator.name}</Typography>
        </div>
      </div>
    );
  }
};

export default PollHeader;
