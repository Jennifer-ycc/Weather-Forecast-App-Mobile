import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useWeatherContext } from '../Context';
//import { useWeatherContext } from './WeatherProvider';


const WeatherCardMobile = ({ place, temperature, windspeed, humidity, icon }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.place}>{place}</Text>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.temperature}>{temperature} °C</Text>
      <Text style={styles.details}>Windspeed: {windspeed} m/s</Text>
      <Text style={styles.details}>Humidity: {humidity} %</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  place: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  icon: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  temperature: {
    fontSize: 26,
    color: '#ff5733',
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
    color: '#555',
  },
});

export default WeatherCardMobile;