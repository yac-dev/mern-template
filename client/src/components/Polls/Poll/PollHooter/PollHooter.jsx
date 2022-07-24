// main libraries
import React from 'react';

// css
import './pollHooter.css';

// mui
import Typography from '@mui/material/Typography';

const PollHooter = (props) => {
  return (
    <div className='poll-hooter-wrapper'>
      <Typography sx={{ fontSize: '14px' }} color='text.secondary'>
        {props.poll.totalVotes} votes&nbsp; {props.poll.totalComments} comments
      </Typography>
    </div>
  );
};

export default PollHooter;
