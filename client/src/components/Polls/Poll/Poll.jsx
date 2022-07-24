// main libraries
import React from 'react';

// css
import './poll.css';

// component
import PollHeader from './PollHeader/PollHeader';
import PollInfo from './PollInfo/PollInfo';
// import PollChart from './PollCharts/BarChart';
import PollCharts from './PollCharts/PollCharts';
import PollResults from './PollResults/PollResults';
import PollHooter from './PollHooter/PollHooter';

// mui
import Card from '@mui/material/Card';

const Poll = (props) => {
  return (
    <>
      <div className='poll-wrapper'>
        <PollHeader poll={props.poll} />
        <PollInfo poll={props.poll} />
        <PollResults poll={props.poll} />
        <PollHooter poll={props.poll} />
      </div>
    </>
  );
};

export default Poll;
