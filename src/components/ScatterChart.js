// ScatterChart.js
import React from 'react';
import { Scatter } from 'react-chartjs-2';

const ScatterChart = ({ width, height, series }) => {
  const data = {
    datasets: series.map((s, index) => ({
      label: s.label,
      data: s.data,
      backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
      borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`,
      borderWidth: 1
    }))
  };

  return (
    <Scatter
      data={data}
      width={width}
      height={height}
    />
  );
};

export default ScatterChart;
