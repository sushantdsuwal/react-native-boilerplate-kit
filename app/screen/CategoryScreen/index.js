import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NAVIGATION_PRODUCT_CATALOG_SCREEN} from '../../navigation/routes';

const CatagoryScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>I am Catagory Screen</Text>
      <Button
        title={'Goto Product catalog Screen'}
        onPress={() =>
          navigation.navigate('Home', {
            screen: NAVIGATION_PRODUCT_CATALOG_SCREEN,
            params: {productId: '5'},
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

export default CatagoryScreen;
