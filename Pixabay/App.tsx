import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Home from './src/pages/home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const SafeAreaViewStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={SafeAreaViewStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Home />
    </SafeAreaView>
  );
};

export default App;
