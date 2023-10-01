import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Signin from '../screens/Signin';
import {TabNavigator} from './TabNavigator';

const Stack = createStackNavigator();

const screenOptions = {headerShown: false};

export default function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}
