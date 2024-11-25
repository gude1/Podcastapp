/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import Class from '../screens/Class';
import Giving from '../screens/Giving';
import Profile from '../screens/Profile';

export type RootBottomTabParamList = {
  Home: undefined;
  Class: undefined;
  Giving: undefined;
  Profile: undefined;
};

type TabIconParams = {
  focused: boolean;
  style?: StyleProp<ImageStyle>;
  color: string;
  size: number;
  source: ImageSourcePropType;
};

const RootBottomTab = createBottomTabNavigator<RootBottomTabParamList>();

const RootBottomTabNavigator = () => {
  const renderTabIcon = ({focused, source, style}: TabIconParams) => {
    return (
      <Image
        style={[
          styles.iconImg,
          {tintColor: focused ? '#000000' : '#BDBDBD'},
          style,
        ]}
        source={source}
      />
    );
  };
  return (
    <RootBottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#BDBDBD',
      }}>
      <RootBottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon(props) {
            return renderTabIcon({
              ...props,
              source: require('../assets/images/tabs/Icon1.png'),
              style: {width: 23, height: 25.83},
            });
          },
        }}
      />

      <RootBottomTab.Screen
        name="Class"
        component={Class}
        options={{
          tabBarLabel: 'Classes',
          tabBarIcon(props) {
            return renderTabIcon({
              ...props,
              source: require('../assets/images/tabs/Icon3.png'),
              style: {width: 24},
            });
          },
        }}
      />

      <RootBottomTab.Screen
        name="Giving"
        component={Giving}
        options={{
          tabBarLabel: 'Giving',
          tabBarIcon(props) {
            return renderTabIcon({
              ...props,
              source: require('../assets/images/tabs/Icon4.png'),
              style: {width: 31.38},
            });
          },
        }}
      />

      <RootBottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon(props) {
            return renderTabIcon({
              ...props,
              source: require('../assets/images/tabs/Icon5.png'),
              style: {width: 24},
            });
          },
        }}
      />
    </RootBottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconImg: {
    width: 30,
    height: 25,
  },
  tabLabel: {
    fontFamily: 'Poppins',
    lineHeight: 18,
    fontWeight: 500,
    marginTop: 8,
    textAlign: 'left',
    fontSize: 14,
    letterSpacing: -0.4343072772026062,
  },
  tabBar: {
    backgroundColor: '#ffffff', // Set background color for the tab bar
    shadowColor: '#363853', // Shadow color
    height: 90,
    borderTopWidth: 0,
    paddingTop: 8,
    paddingHorizontal: 46,
    shadowOffset: {width: 0, height: 0}, // No offset
    shadowOpacity: 0.07, // Convert the `#36385312` transparency to 0.07 opacity
    shadowRadius: 16, // The radius for the shadow blur
    elevation: 4, // Android shadow
  },
});

export default RootBottomTabNavigator;
