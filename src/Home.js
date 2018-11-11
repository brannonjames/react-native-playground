import React, { Component } from 'react';
import {
  View,
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

class Home extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    navigation.navigate('authScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
      </View>
    );
  }
}

export default Home;