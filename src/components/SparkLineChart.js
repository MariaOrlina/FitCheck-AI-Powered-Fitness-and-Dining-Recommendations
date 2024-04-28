// SparkLineChart.js
import React from 'react';
import { SparkLineChart } from '@mui/x-charts';

const CustomSparkLineChart = ({ data, height, plotType }) => {
  return (
    <SparkLineChart
      data={data}
      height={height}
      plotType={plotType}
    />
  );
};

export default CustomSparkLineChart;
