import React from 'react';
export const ON_CHANGE_THEME = 'ON_CHANGE_THEME';

import {Appearance} from 'react-native-appearance';

// Get OS default mode or default to 'light'
export const defaultMode = Appearance.getColorScheme() || 'light';

// Create ManageThemeContext which will hold the current mode and a function to change it
export const ManageThemeContext = React.createContext({
  mode: defaultMode,
  setMode: mode => console.log(mode),
});

export const useTheme = () => React.useContext(ManageThemeContext);
