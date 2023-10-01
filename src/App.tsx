/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useMemo} from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './navigation/MainNavigation';

const backgroundStyle = {
  backgroundColor: '#292D32',
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const barStyle = useMemo(() => {
    return isDarkMode ? 'light-content' : 'dark-content';
  }, [isDarkMode]);

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </SafeAreaProvider>
  );
};

export default App;
