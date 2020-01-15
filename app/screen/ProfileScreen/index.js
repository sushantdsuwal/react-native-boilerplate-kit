/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {useTheme} from '../../theme/ManageThemeContext';

const ProfileScreen = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Switch
        value={theme.mode === 'dark'}
        onValueChange={value => theme.setMode(value ? 'dark' : 'light')}
      />
      <Text style={{color: 'red', margin: 20}}>
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
