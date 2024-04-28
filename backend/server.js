const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const agent = require("./agent"); 
const openai = require("./openai");
const port = 5001;

// Enable CORS for all origins
app.use(cors());

// MongoDB Model
const DataSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  height: Number,
  weight: Number,
  activityLevel: String,
  workoutType: String,
  duration: Number,
  distance: Number,
  sets: Number,
  reps: Number,
  heartRate: Number,
  caloriesConsumed: Number,
  carbs: Number,
  protein: Number,
  fat: Number,
  sleepDuration: Number,
  bodyFat: Number,
  waistCircumference: Number,
  mood: String,
  feedback: String
});

const Data = mongoose.model('Data', DataSchema);

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Project')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/data', async (req, res) => {
    try {
      const newData = new Data(req.body);  // Ensure req.body contains the expected data
      const savedData = await newData.save();  // Save to MongoDB
      res.status(201).send({ message: 'Data saved successfully', data: savedData });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status (500).send({ message: 'Failed to save data', error: error.message });
    }
  });


// Recommendation Route
app.get("/api/recommendation", async (req, res) => {
  try {
    const response = await agent(
      "Please give internet's famous existing 3 health insurance blogs, famous existing 2 nutrition blogs and famous existing  3 importance of physical activities blogs. Give the summary of blog and a url to that internet blog (please make sure this url should exist)."
    );
    res.json({ recommendation: response });
  } catch (error) {
    console.error("Error getting recommendation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}).on('error', error => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Error: Port ${port} is already in use.`);
  } else {
    console.log('Error starting server:', error);
  }
});
