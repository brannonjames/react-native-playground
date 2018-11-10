import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native';

import { PricingCard } from 'react-native-elements';

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
      <Text>Home Page</Text>

      <PricingCard
        color="#4f9deb"
        title="Workout"
        price="$28"
        info={['YMCA', 'Weights', '30 minutes']}
        button={{ title: 'Book', icon: 'video-call' }}
      />

      <Button
        title="Go to info"
        onPress={() => navigation.navigate('info')}
      />
    </View>
  );
};