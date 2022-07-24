// main libraries
import React, { useState } from 'react';

// component
import BarChart from './BarChart';
import WorldMapChart from './WorldMapChart';

import './pollCharts.css';

// mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BarChartIcon from '@mui/icons-material/BarChart';
import SignpostIcon from '@mui/icons-material/Signpost';

const PollCharts = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderBarChartOrWorldMapChart = () => {
    if (value === 0) {
      return <BarChart poll={props.poll} />;
    } else if (value === 1) {
      return <WorldMapChart poll={props.poll} />;
    }
  };

  return (
    <div className='poll-charts-wrapper'>
      <Tabs value={value} onChange={handleChange} aria-label='icon tabs example'>
        <Tab icon={<BarChartIcon />} aria-label='BarChart' />
        <Tab icon={<SignpostIcon />} aria-label='WorldMapChart' />
      </Tabs>
      <div className='bar-chart-or-world-map-chart' style={{ width: '100%' }}>
        {renderBarChartOrWorldMapChart()}
      </div>
    </div>
  );
};

export default PollCharts;
