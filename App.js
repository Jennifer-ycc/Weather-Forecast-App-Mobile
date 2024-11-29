import React from 'react';
import { WeatherProvider } from './Context';
import { SafeAreaView, Platform, Text } from 'react-native';
import MiniCardMobile from './Components/MiniCardMobile';
import WeatherCardMobile from './Components/WeatherCardMobile';

const App = () => {
  return (
    <WeatherProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
        {/* Conditional rendering based on platform */}
        {Platform.OS === 'web' ? (
          <Text style={{ fontSize: 20, textAlign: 'center' }}>Welcome to Weather App (Web Version)</Text>
        ) : (
          <Text style={{ fontSize: 20, textAlign: 'center' }}>Welcome to Weather App (Mobile Version)</Text>
        )}

        <WeatherCardMobile />
        <MiniCardMobile />
      </SafeAreaView>
    </WeatherProvider>
  );
};

export default App;
