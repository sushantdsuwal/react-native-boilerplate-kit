import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {useTheme} from '../../theme/ManageThemeContext';

const Spinner = ({size}) => {
  const theme = useTheme();

  return <ActivityIndicator size={size} color={theme.colors.primary} />;
};

Spinner.propTypes = {
  size: PropTypes.string,
};

Spinner.defaultProps = {
  size: 'large',
};

export default Spinner;
