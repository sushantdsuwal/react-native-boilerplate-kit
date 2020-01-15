import React from 'react';
import {Appearance} from 'react-native-appearance';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

// Get OS default mode or default to 'light'
export const defaultMode = Appearance.getColorScheme() || 'light';

// default context value
const ManageThemeContext = React.createContext({
  mode: defaultMode,
  setMode: mode => console.log(mode),
  activeTheme: defaultMode ? lightTheme : darkTheme,
});

export const useTheme = () => React.useContext(ManageThemeContext);

export default ManageThemeContext;
