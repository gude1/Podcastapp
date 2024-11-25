import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import React from 'react';

const Navigation = () => {
  const LIGHT_DEFAULT_THEME = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };
  return (
    <NavigationContainer theme={LIGHT_DEFAULT_THEME}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
