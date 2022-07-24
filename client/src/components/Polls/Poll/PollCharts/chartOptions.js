const labels = ['red vans', 'blue vans', 'green vans', 'gray vans'];
const images = [
  'https://i.stack.imgur.com/2RAv2.png',
  'https://i.stack.imgur.com/Tq5DA.png',
  'https://i.stack.imgur.com/3KRtW.png',
  'https://i.stack.imgur.com/iLyVi.png',
];

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: false,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: true,
      color: 'black',
      // topに数字を載せたい時よう
      // formatter: Math.round,
      // anchor: 'end',
      // align: 'start',
    },
    // labels: {
    //   render: 'image',
    //   images: [
    //     { src: 'https://www.chartjs.org/docs/latest/favicon.ico', height: '16', width: '16' },
    //     { src: 'https://www.chartjs.org/docs/latest/favicon.ico', height: '16', width: '16' },
    //     { src: 'https://www.chartjs.org/docs/latest/favicon.ico', height: '16', width: '16' },
    //     { src: 'https://www.chartjs.org/docs/latest/favicon.ico', height: '16', width: '16' },
    //   ],
    // },
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        drawBorder: false,
        display: false,
      },
      ticks: {
        color: 'black',
      },
    },
  },
  maintainAspectRatio: false,
};

export default options;
