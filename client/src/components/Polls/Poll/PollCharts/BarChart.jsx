// main libraries
import React, { useRef, useEffect } from 'react';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

// css
import './barChart.css';

import chartOptions from './chartOptions';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
// const createChartLabels = () => {
//   const labels = [];
//   for (let i = 0; i < props.poll.options.length; i++) {
//     labels.push(props.poll.options[i].content);
//   }
//   return labels;
// };

// const createChartDatasets = () => {
//   const datasets = [];
//   for (let i = 0; i < props.poll.options.length; i++) {
//     datasets.push(props.poll.options[i].totalVotes);
//   }
//   return datasets;
// };

// const renderChart = () => {
//     // const chartLabels = createChartLabels();
//     // const chartDatasets = createChartDatasets();
//     const data = {
//       labels: [1, 2, 3, 4, 5],
//       datasets: [
//         {
//           data: [1, 2, 3, 4, 5],
//           // green blue orange yellow violet red indigo
//           backgroundColor: [
//             'rgba(81, 219, 57)',
//             'rgb(92, 126, 237)',
//             'rgb(219, 116, 57)',
//             'rgb(214, 219, 57)',
//             'rgb(173, 57, 219)',
//             'rgb(219, 57, 57)',
//             'rgb(219, 57, 119)',
//           ],
//           borderWidth: 1,
//           hoverOffset: 30,
//           borderRadius: Number.MAX_VALUE,
//           borderSkipped: false,
//         },
//       ],
//     };

//   return <Bar data={data} options={options} />;
// };

// return <Bar data={data} options={chartOptions} />;
// return (
//  <>{renderChart()}</>
// );

const PollChart = (props) => {
  return (
    <>
      <Badge
        badgeContent={'62%'}
        color='success'
        // anchorOrigin={{
        //   vertical: 'bottom',
        //   horizontal: 'right',
        // }}
      >
        {/* <div style={{ fontSize: '30px', color: 'red' }}>JavaScripT&nbsp;&nbsp;</div> */}
        <Chip label='JavaScripT' sx={{ fontSize: '30px', padding: '5px', color: 'red' }} />
      </Badge>
    </>
  );
};

export default PollChart;
