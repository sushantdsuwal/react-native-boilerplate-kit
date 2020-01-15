import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from './navigation/Navigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {enableScreens} from 'react-native-screens';
import {NavigationNativeContainer} from '@react-navigation/native';
import {AppearanceProvider, Appearance} from 'react-native-appearance';
import {darkTheme, lightTheme} from './theme';
import ManageThemeContext, {defaultMode} from './theme/ManageThemeContext';
import typography from './theme/typography';

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
        active: themeState === 'dark' ? darkTheme : lightTheme,
        typography: typography(themeState === 'dark' ? darkTheme : lightTheme),
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
