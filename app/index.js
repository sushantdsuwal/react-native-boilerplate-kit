import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Navigator from './navigation/Navigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {enableScreens} from 'react-native-screens';
import {AppearanceProvider, Appearance} from 'react-native-appearance';
import ManageThemeContext, {defaultMode} from './theme/ManageThemeContext';
import {
  darkTheme,
  lightTheme,
  spacing,
  dimensions,
  typography,
} from './theme/theme';

enableScreens();
Ionicons.loadFont();

const MainApp = () => {
  const [themeState, setThemeState] = React.useState(defaultMode);

  const setMode = mode => {
    setThemeState(mode);
  };

  // Subscribe to OS mode changes
  React.useEffect(() => {
    const subscription = Appearance.addChangeListener(colorSchema => {
      setThemeState(colorSchema);
    });
    return () => {
      subscription.remove();
    };
  }, []);

  // sets the status bar color, and injects the current mode and a function to change it
  return (
    // Create the Provider
    <ManageThemeContext.Provider
      value={{
        mode: themeState,
        setMode,
        colors: themeState === 'dark' ? darkTheme.colors : lightTheme.colors,
        typography: typography(
          themeState === 'dark' ? darkTheme.colors : lightTheme.colors,
        ),
        spacing,
        dimensions,
      }}>
      <AppearanceProvider>
        <NavigationNativeContainer
          theme={themeState === 'dark' ? darkTheme : lightTheme}>
          <>
            <StatusBar
              barStyle={
                themeState === 'dark' ? 'light-content' : 'dark-content'
              }
            />
            <Navigator />
          </>
        </NavigationNativeContainer>
      </AppearanceProvider>
    </ManageThemeContext.Provider>
  );
};

export default MainApp;
