import React, { useState } from 'react';
import { Button, Container, Typography, Box, Card, CardContent } from '@mui/material';
import { Line, Bar, Pie } from 'react-chartjs-2';
import Papa from 'papaparse';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

// Import ScatterChart and SparkLineChart components
import ScatterChart from './ScatterChart';
import SparkLineChart from './SparkLineChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ArcElement
);

function FileAnalytics() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  const colors = [
    ['rgba(255, 99, 132, 0.5)', 'rgba(255, 99, 132, 1)'],
    ['rgba(54, 162, 235, 0.5)', 'rgba(54, 162, 235, 1)'],
    ['rgba(255, 206, 86, 0.5)', 'rgba(255, 206, 86, 1)'],
    ['rgba(75, 192, 192, 0.5)', 'rgba(75, 192, 192, 1)'],
    ['rgba(153, 102, 255, 0.5)', 'rgba(153, 102, 255, 1)'],
    ['rgba(255, 159, 64, 0.5)', 'rgba(255, 159, 64, 1)']
  ];

  const handleFileRead = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
          const labels = Object.keys(results.data[0]);
          const data = labels.map(label => results.data.map(row => row[label]));
          setChartData({
            labels: labels,
            datasets: data.map((dataset, index) => ({
              label: labels[index],
              data: dataset,
              backgroundColor: colors[index % colors.length][0],
              borderColor: colors[index % colors.length][1],
              borderWidth: 1
            }))
          });
        }
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 6, mx: 2 }}>
        <Typography variant="h4" gutterBottom>Upload Your Data File</Typography>
        <Button
          variant="contained"
          component="label"
          sx={{ mb: 2 }}
        >
          Upload File
          <input
            type="file"
            hidden
            accept=".csv, application/json"
            onChange={handleFileRead}
          />
        </Button>
        <Card>
          <CardContent>
            <Typography gutterBottom>Line Chart</Typography>
            <Line data={chartData} />
          </CardContent>
        </Card>
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography gutterBottom>Bar Chart</Typography>
            <Bar data={chartData} />
          </CardContent>
        </Card>
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography gutterBottom>Pie Chart</Typography>
            <Pie data={chartData} />
          </CardContent>
        </Card>
        {/* Add Scatter Chart */}
        {chartData.datasets.length > 0 && (
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography gutterBottom>Scatter Chart</Typography>
              <ScatterChart
                width={600}
                height={300}
                series={[
                  {
                    label: 'Series A',
                    data: chartData.labels.map((label, index) => ({
                      x: index,
                      y: chartData.datasets[0].data[index],
                      id: label
                    }))
                  },
                  {
                    label: 'Series B',
                    data: chartData.labels.map((label, index) => ({
                      x: index,
                      y: chartData.datasets[1] ? chartData.datasets[1].data[index] : 0,
                      id: label
                    }))
                  }
                ]}
              />
            </CardContent>
          </Card>
        )}
        {/* Add Sparkline Chart */}
        {chartData.datasets.length > 0 && (
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography gutterBottom>Sparkline Chart</Typography>
              <Box sx={{ flexGrow: 1 }}>
                <SparkLineChart
                  data={chartData.datasets[0].data}
                  height={100}
                />
              </Box>
              {chartData.datasets.length > 1 && (
                <Box sx={{ flexGrow: 1 }}>
                  <SparkLineChart
                    plotType="bar"
                    data={chartData.datasets[1].data}
                    height={100}
                  />
                </Box>
              )}
            </CardContent>
          </Card>
        )}
      </Box>
    </Container>
  );
}

export default FileAnalytics;
