import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NAVIGATION_PRODUCT_REPOSITORY_SCREEN} from '../../navigation/routes';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red', margin: 20}}>
        Switch to change theme mode
      </Text>

      <Button
        title="go to feed screen"
        onPress={() =>
          navigation.navigate(NAVIGATION_PRODUCT_REPOSITORY_SCREEN, {
            data: 'screen props here',
          })
        }
      />
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

export default HomeScreen;
