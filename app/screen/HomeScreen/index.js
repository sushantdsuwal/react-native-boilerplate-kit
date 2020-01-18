import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NAVIGATION_PRODUCT_REPOSITORY_SCREEN} from '../../navigation/routes';
import {Text, Spinner, Card, Button} from '../../components';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Card style={{marginVertical: 10}}>
        <Text type="heading" bold>
          Text Heading with bold
        </Text>
        <Text type="subheading" bold>
          Text Sub Heading bold
        </Text>
        <Text type="body" bold>
          Text Body bold
        </Text>
        <Text type="label" bold>
          Text Label bold
        </Text>
        <Text type="caption" bold>
          Text caption bold
        </Text>
      </Card>

      <Text type="heading">Text Heading</Text>
      <Text type="subheading">Text Sub Heading</Text>
      <Text type="body">Text Body</Text>
      <Text type="label">Text Label</Text>
      <Text type="caption">Text caption</Text>
      <Text />
      <Spinner />

      <Button
        style={{marginVertical: 20}}
        title="go to feed screen"
        onPress={() =>
          navigation.navigate(NAVIGATION_PRODUCT_REPOSITORY_SCREEN, {
            data: 'screen props here',
          })
        }
        type="outline"
      />
      <Text bold>You can Change theme palette in profile tab</Text>
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
