import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProductCatalogScreen = ({navigation, route}) => {
  const {productId} = route.params;
  return (
    <View style={styles.container}>
      <Text>I am in Product Catalog screen with id: {productId}</Text>
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

export default ProductCatalogScreen;
