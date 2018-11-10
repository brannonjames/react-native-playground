import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>Info Page</Text>
      <Button
        title="Go to info"
        onPress={() => navigation.navigate('home')}
      />
    </View>
  );
};