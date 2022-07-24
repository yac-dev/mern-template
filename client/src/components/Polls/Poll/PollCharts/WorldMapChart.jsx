// main libraries
import React from 'react';
import ReactMapGL from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from 'mapbox-gl';
// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

// css
import './worldMapChart.css';

const WorldMapChart = () => {
  return (
    <ReactMapGL
      initialViewState={{
        longitude: 17.071727,
        latitude: 47.040182,
        zoom: 1,
      }}
      mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
    ></ReactMapGL>
  );
};

export default WorldMapChart;
