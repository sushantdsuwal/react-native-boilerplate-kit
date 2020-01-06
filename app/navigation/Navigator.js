import * as React from 'react';
import {
  NavigationNativeContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  ProductRepositoryScreen,
  ProfileScreen,
  CatagoryScreen,
  ProductCatalogScreen,
} from '../screen';
import {
  NAVIGATION_HOME_SCREEN,
  NAVIGATION_PRODUCT_REPOSITORY_SCREEN,
  NAVIGATION_PROFILE_SCREEN,
  NAVIGATION_CATAGORY_SCREEN,
  NAVIGATION_PRODUCT_CATALOG_SCREEN,
} from './routes';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const CatagoryStack = createStackNavigator();

const RootStactNavigator = ({navigation, route}) => {
  if (route.state) {
    navigation.setOptions({
      headerShow: route.state.index > 0 ? false : true,
    });
  }
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={NAVIGATION_HOME_SCREEN} component={HomeScreen} />
      <HomeStack.Screen
        name={NAVIGATION_PRODUCT_REPOSITORY_SCREEN}
        component={ProductRepositoryScreen}
      />
      <HomeStack.Screen
        name={NAVIGATION_PRODUCT_CATALOG_SCREEN}
        component={ProductCatalogScreen}
      />
    </HomeStack.Navigator>
  );
};

const CatagoryStackNavigator = () => {
  return (
    <CatagoryStack.Navigator>
      <CatagoryStack.Screen
        name={NAVIGATION_CATAGORY_SCREEN}
        component={CatagoryScreen}
      />
    </CatagoryStack.Navigator>
  );
};

const ProfileStackNaivgator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={NAVIGATION_PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'ios-home';
          } else if (route.name === 'Catagory') {
            iconName = 'logo-rss';
          } else if (route.name === 'Profile') {
            iconName = 'ios-settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <MainTab.Screen name="Home" component={RootStactNavigator} />
      <MainTab.Screen name="Catagory" component={CatagoryStackNavigator} />
      <MainTab.Screen name="Profile" component={ProfileStackNaivgator} />
    </MainTab.Navigator>
  );
};

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
  },
};

const Navigator = () => {
  return (
    <NavigationNativeContainer theme={MyTheme}>
      <MainTabNavigator />
    </NavigationNativeContainer>
  );
};

export default Navigator;
