import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootBottomTabNavigator from './RootBottomTabNavigator';
import React from 'react';

export type RootStackParamList = {
  RootTab: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        statusBarStyle: 'dark',
        statusBarBackgroundColor: 'white',
        orientation: 'portrait',
      }}>
      <RootStack.Screen name="RootTab" component={RootBottomTabNavigator} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
