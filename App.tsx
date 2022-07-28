import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from './src/store';
import {Provider} from 'react-redux';

import Home from './src/pages/home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const SafeAreaViewStyle = {
    flex: 1,
  };

  function HomeScreen() {
    return (
      <SafeAreaView style={SafeAreaViewStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <Home />
      </SafeAreaView>
    );
  }

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Pixabay',
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
