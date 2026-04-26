const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const DEFAULT_MONGODB_URI = 'mongodb://localhost:27017/weatherforecast';
const rawMongoUri = process.env.MONGO_URI;
const hasValidMongoScheme =
  typeof rawMongoUri === 'string' &&
  (rawMongoUri.startsWith('mongodb://') || rawMongoUri.startsWith('mongodb+srv://'));
const MONGODB_URI = hasValidMongoScheme ? rawMongoUri : DEFAULT_MONGODB_URI;

if (rawMongoUri && !hasValidMongoScheme) {
  console.warn('Invalid MONGO_URI in .env. Falling back to local MongoDB URI.');
}

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

app.use(cors());
app.use(express.json());

// Create a Mongoose model for weather data
const WeatherData = mongoose.model('WeatherData', {
  city: String,
  country: String,
  temperature: Number,
  description: String,
  icon: String,
});

// Route to handle storing weather data
app.post('/api/weather', async (req, res) => {
  try {
    // Extract weather data from request body
    const { city, country, temperature, description, icon } = req.body;

    // Create a new document using the WeatherData model
    const weatherData = new WeatherData({
      city,
      country,
      temperature,
      description,
      icon,
    });

    // Save the weather data to the database
    await weatherData.save();

    // Respond with success message
    res.json({ message: 'Weather data saved successfully' });
  } catch (error) {
    console.error('Error saving weather data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
