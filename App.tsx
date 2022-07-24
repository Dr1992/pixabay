import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {store} from './src/store';
import {Provider} from 'react-redux';

import Home from './src/pages/home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const SafeAreaViewStyle = {
    flex: 1,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={SafeAreaViewStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
