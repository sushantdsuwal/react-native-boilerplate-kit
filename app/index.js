import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './navigation/Navigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {enableScreens} from 'react-native-screens';
enableScreens();
Ionicons.loadFont();

const MainApp = () => {
  return <Navigator />;
};

export default MainApp;
