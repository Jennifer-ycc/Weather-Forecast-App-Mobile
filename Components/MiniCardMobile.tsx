import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MiniCard = ({ datetime, temp, iconString }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.datetime}>{datetime}</Text>
      <Text style={styles.temp}>{temp} °C</Text>
      <Image source={iconString} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  datetime: {
    fontSize: 14,
    color: '#333',
  },
  temp: {
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
  },
  icon: {
    width: 40,
    height: 40,
    marginTop: 5,
  },
});

export default MiniCard;
