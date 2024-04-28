import React, { useState } from 'react';
import { TextField, Button, Container, Typography, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { Line, Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';
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

function Analytics() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    activityLevel: '',
    workoutType: '',
    duration: '',
    distance: '',
    sets: '',
    reps: '',
    heartRate: '',
    caloriesConsumed: '',
    carbs: '',
    protein: '',
    fat: '',
    sleepDuration: '',
    bodyFat: '',
    waistCircumference: '',
    mood: ''
  });
  const [feedback, setFeedback] = useState('');

  const activityLevels = ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active', 'Extremely Active'];
  const workoutTypes = ['Running', 'Weightlifting', 'Yoga', 'Swimming'];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Calculate feedback based on user inputs
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const sleepDuration = parseFloat(formData.sleepDuration);  // Ensure this captures correctly
    const bmi = weight / ((height / 100) ** 2);

    let healthFeedback = 'You are in a healthy weight range.';
    if (bmi < 18.5) {
        healthFeedback = 'Based on your BMI, you should consider gaining weight.';
    } else if (bmi >= 25) {
        healthFeedback = 'Based on your BMI, you should consider losing weight.';
    }

    // Check sleep duration and prepare feedback
    let sleepFeedback = 'Your sleep cycle is proper.';
    if (sleepDuration < 5) {
        sleepFeedback = 'You need proper sleep.';
    }

    // Combine feedbacks
    let combinedFeedback = `${healthFeedback} Also, ${sleepFeedback}`;
    setFeedback(combinedFeedback);  // Set combined feedback

    // Optionally, handle database submission here
    try {
      const response = await axios.post('http://localhost:5001/api/data', {...formData, feedback});
      console.log('Data saved:', response.data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Data for charts, dynamically using formData
  const chartData = {
    labels: ['Heart Rate', 'Calories Consumed', 'Duration', 'Carbs', 'Protein', 'Fat'],
    datasets: [
      {
        label: 'Health Metrics',
        data: [
          formData.heartRate || 0,
          formData.caloriesConsumed || 0,
          formData.duration || 0,
          formData.carbs || 0,
          formData.protein || 0,
          formData.fat || 0
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <Container maxWidth="sm">
      <Box marginTop={6}>
        <Typography variant="h4" gutterBottom>Enter Your Health Data</Typography>
        <form onSubmit={handleSubmit}>
            {/* General Information */}
            <Typography variant="h6">General Information</Typography>
            <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Age" name="age" value={formData.age} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Gender" name="gender" value={formData.gender} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Height (cm)" name="height" value={formData.height} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Weight (kg)" name="weight" value={formData.weight} onChange={handleChange} margin="normal" />
            <FormControl fullWidth margin="normal">
            <InputLabel>Activity Level</InputLabel>
            <Select name="activityLevel" value={formData.activityLevel} onChange={handleChange}>
            {activityLevels.map(level => (
            <MenuItem key={level} value={level}>{level}</MenuItem>
            ))}
            </Select>
            </FormControl>
            {/* Fitness Tracking */}
            <Typography variant="h6">Fitness Tracking</Typography>
            <FormControl fullWidth margin="normal">
            <InputLabel>Workout Type</InputLabel>
            <Select name="workoutType" value={formData.workoutType} onChange={handleChange}>
            {workoutTypes.map(type => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
            </Select>
            </FormControl>
            <TextField fullWidth label="Duration (minutes)" name="duration" value={formData.duration} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Distance (km)" name="distance" value={formData.distance} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Sets" name="sets" value={formData.sets} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Reps" name="reps" value={formData.reps} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Heart Rate (bpm)" name="heartRate" value={formData.heartRate} onChange={handleChange} margin="normal" />
            {/* Nutritional Tracking */}
            <Typography variant="h6">Nutritional Tracking</Typography>
            <TextField fullWidth label="Calories Consumed" name="caloriesConsumed" value={formData.caloriesConsumed} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Carbs (g)" name="carbs" value={formData.carbs} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Protein (g)" name="protein" value={formData.protein} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Fat (g)" name="fat" value={formData.fat} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Sleep Duration (hours)" name="sleepDuration" value={formData.sleepDuration} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="BodyFat (Yes/No)" name="BodyFat" value={formData.BodyFat} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="mood (type)" name="mood" value={formData.mood} onChange={handleChange} margin="normal" />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>

        {/* Charts */}
        <Typography variant="h5" gutterBottom>Health Metrics Overview</Typography>
        <Line data={chartData} />
        <Bar data={chartData} />
        <Pie data={chartData} />

        {/* Feedback Section */}
        <Typography variant="h6" gutterBottom>Feedback</Typography>
        <Typography>{feedback}</Typography>
      </Box>
    </Container>
  );
}

export default Analytics;
