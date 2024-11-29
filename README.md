# WeatherForecast Mobile App

This is a weather forecasting app built with React, React Native, and Expo. 
It fetches weather data using the OpenWeatherMap API and displays the current weather and forecast. 
The project is structured to support both web and mobile versions, with shared code across both platforms.
This app provides real-time weather information, forecasts, and condition icons based on user-selected locations.

## Features
- Real-time weather information based on city name.
- 6-day weather forecast.
- Dynamic icons reflecting weather conditions.
- User-friendly mobile UI.

## Tech Stack
- **React Native** - for mobile app framework.
- **OpenWeatherMap API** - for real-time weather data.
- **Axios** - for API requests.
- **React Navigation** - for screen management.



Steps to Transform the Weather App to React Native
1. Set Up the React Native Environment
    *Install React Native CLI: 
            npm install -g react-native-cli
    *Create a new React Native project: 
            npx react-native init WeatherForecastApp
    *Navigate to the project directory: 
            cd WeatherForecastApp

2. Install Required Packages
    *Install essential libraries:
            npm install axios react-navigation react-navigation-stack
    *For icons, install react-native-vector-icons:
            npm install react-native-vector-icons

3. Set Up API Integration with OpenWeatherMap
    *In your new app directory, create a .env file to store your API key:
            REACT_APP_API_KEY=your_api_key_here

4. Running the App
    *For Web
        Navigate to the WeatherForecastApp-web directory:
            cd WeatherForecastApp-web
        Run the web app:
            npm start

    *For Mobile (Expo)
        Navigate to the WeatherForecastApp-mobile directory:
            cd WeatherForecastApp-mobile
        Run the Expo development server:
            expo start