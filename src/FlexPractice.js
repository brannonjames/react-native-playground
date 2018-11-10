import React, { Component } from 'react';
import { View } from 'react-native';


const styles = {
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  top: {
    backgroundColor: 'blue',
    height: 200,
  },
  middle: {
    backgroundColor: 'orange',
    flex: 1,
  },
  bottom: {
    backgroundColor: 'green',
    flex: 2,
  },
};

class FlexPractice extends Component {
  static navigationOptions = {
    title: 'Flex',
  }

  render() {
    const {
      container,
      top,
      middle,
      bottom,
    } = styles;
    return (
      <View style={container}>
        <View style={top} />
        <View style={middle} />
        <View style={bottom} />
      </View>
    );
  }
}

export default FlexPractice;