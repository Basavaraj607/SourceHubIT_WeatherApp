
# Weather Forecasting Application

This is a full-stack web application that provides weather forecasting information for any location. Built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js), it allows users to search for weather conditions, view forecasts, and monitor weather trends in real-time.

## Features

- **Weather Search**: Users can search for weather information by entering the name of a city.
- **Real-Time Data**: Displays real-time weather data including temperature, humidity, wind speed, and more.
- **5-Day Forecast**: Provides a 5-day weather forecast, including temperature, conditions, and precipitation.
- **User-Friendly UI**: A clean and intuitive interface built using React.js.
- **Responsive Design**: Optimized for use on both desktop and mobile devices.

## Technologies Used

- **Frontend**:
  - React.js
  - CSS / Sass
  - Axios (for API requests)
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for storing user data, if necessary)
- **External API**:
  - [OpenWeatherMap API](https://openweathermap.org/api) for fetching weather data.

## Getting Started

To run the Weather Forecasting Application locally, follow the steps below.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (Version 12 or later)
- **npm** or **yarn**
- **MongoDB** (if you're using a local database)

### 1. Clone the Repository

```bash
git clone https://github.com/Shaik-Suhail/Weather-Forecasting-Application.git
cd Weather-Forecasting-Application
```

### 2. Install Dependencies

For both client and server:

#### Install dependencies for the backend:

```bash
cd server
npm install
```

#### Install dependencies for the frontend:

```bash
cd ../client
npm install
```

### 3. Configure the `.env` file

Create a `.env` file in the `server` directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
```

### 4. Start the Application

- **Start the backend** (Node.js server):

```bash
cd server
npm start
```

- **Start the frontend** (React development server):

```bash
cd ../client
npm start
```

The app will be available at `http://localhost:3000`.

### 5. Deployment

You can deploy the application using platforms like **Heroku**, **Vercel**, or **Netlify** for the frontend and **Heroku** or **DigitalOcean** for the backend.

## Screenshots

**Home Page**:

![Home Page](path/to/homepage-screenshot.png)

**Weather Forecast**:

![Weather Forecast](path/to/forecast-screenshot.png)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap API](https://openweathermap.org/api) for providing weather data.
- [React.js](https://reactjs.org/) for building the user interface.
- [Node.js](https://nodejs.org/) for the server-side environment.
  
