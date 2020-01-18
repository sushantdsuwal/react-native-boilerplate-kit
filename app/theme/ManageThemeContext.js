import React from 'react';
import {Appearance} from 'react-native-appearance';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';
import typography from './typography';
import spacing from './spacing';
import dimensions from './dimensions';

// Get OS default mode or default to 'light'
export const defaultMode = Appearance.getColorScheme() || 'light';

// default context value
const ManageThemeContext = React.createContext({
  mode: defaultMode,
  setMode: mode => console.log(mode),
  colors: defaultMode ? lightTheme.colors : darkTheme.colors,
  typography: typography(defaultMode ? lightTheme.colors : lightTheme.colors),
  spacing,
  dimensions,
});

// hooks

export const useTheme = () => React.useContext(ManageThemeContext);

export default ManageThemeContext;
