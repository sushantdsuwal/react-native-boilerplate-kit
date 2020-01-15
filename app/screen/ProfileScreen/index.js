/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {useTheme} from '../../theme/ManageThemeContext';
import {Text} from '../../components';

const ProfileScreen = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Switch
        value={theme.mode === 'dark'}
        onValueChange={value => theme.setMode(value ? 'dark' : 'light')}
      />
      <Text style={{margin: 20}} bold>
        Active Theme {theme.mode} Mode
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
