import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Signin from '../screens/Signin';
import {TabNavigator} from './TabNavigator';

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}
