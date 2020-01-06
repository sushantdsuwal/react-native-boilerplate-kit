import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NAVIGATION_PRODUCT_CATALOG_SCREEN} from '../../navigation/routes';

const ProductRepositoryScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ProductRepositoryScreen</Text>
      <Button
        title="goto product catalog"
        onPress={() =>
          navigation.navigate(NAVIGATION_PRODUCT_CATALOG_SCREEN, {
            productId: '1',
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

export default ProductRepositoryScreen;
