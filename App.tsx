import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {store} from './src/store';

import PathRoutes from './src/helper/navigation/pathRoutes';
import PathScreen from './src/helper/navigation/pathScreens';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const SafeAreaViewStyle = {
    flex: 1,
  };

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <SafeAreaView style={SafeAreaViewStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={PathRoutes.HOME}
              component={PathScreen.HOME}
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

            <Stack.Screen
              name={PathRoutes.DETAIL}
              component={PathScreen.DETAIL}
              options={{
                title: 'Pixabay Detail',
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
      </SafeAreaView>
    </Provider>
  );
};

export default App;
