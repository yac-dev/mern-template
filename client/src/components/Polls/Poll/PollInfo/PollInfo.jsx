// main libraries
import React from 'react';
import { timeSince } from '../../../../utils/timeSince';

// css
import './pollInfo.css';

// mui
import Typography from '@mui/material/Typography';

const PollInfo = (props) => {
  return (
    <div className='poll-info-wrapper'>
      <Typography variant='h6' component='div'>
        {props.poll.title}
      </Typography>
      <div className='right-placed-info'>
        <Typography sx={{ fontSize: '14px' }} color='text.secondary'>
          asked {timeSince(new Date(props.poll.createdAt))} ago
        </Typography>
      </div>
    </div>
  );
};

export default PollInfo;
