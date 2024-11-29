import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { useStateContext } from '../Context';
import { Asset } from 'expo-asset';

// Import static images
import Clear from 'WEATHER-FORECAST/src/assets/images/clear.png';
import Fog from 'WEATHER-FORECAST/src/assets/images/fog.png';
import Cloudy from 'WEATHER-FORECAST/src/assets/images/cloudy.png';
import Rainy from 'WEATHER-FORECAST/src/assets/images/rainy.png';
import Snow from 'WEATHER-FORECAST/src/assets/images/snow.png';
import Stormy from 'WEATHER-FORECAST/src/assets/images/stormy.png';
import Sunny from 'WEATHER-FORECAST/src/assets/images/sunny.png';

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear); // Default background image

  useEffect(() => {
    if (weather?.conditions) {
      const imageString = weather.conditions.toLowerCase();
      if (imageString.includes('clear')) {
        setImage(Clear);
      } else if (imageString.includes('cloud')) {
        setImage(Cloudy);
      } else if (imageString.includes('rain') || imageString.includes('shower')) {
        setImage(Rainy);
      } else if (imageString.includes('snow')) {
        setImage(Snow);
      } else if (imageString.includes('fog')) {
        setImage(Fog);
      } else if (imageString.includes('thunder') || imageString.includes('storm')) {
        setImage(Stormy);
      } else {
        setImage(Clear); // Default image if no match
      }
    }
    // Preload the image asset for better performance
    Asset.fromModule(image).downloadAsync();
  }, [weather, image]);

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.backgroundImage} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject, // Ensures full-screen coverage
    zIndex: -1, // Keeps the background behind other elements
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});

export default BackgroundLayout;
