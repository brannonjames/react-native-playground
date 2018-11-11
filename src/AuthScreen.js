import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  FormLabel,
  FormInput,
  Text,
  Button,
} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  form: {
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    padding: 20,
  },
  extraSpace: {
    flex: 6,
  },
});

class AuthScreen extends Component {
  state = {
    emailInput: '',
    passwordInput: '',
  }

  handleSubmit = () => {
    console.log(this.state);
    this.setState({
      emailInput: '',
      passwordInput: '',
    });
  }

  render() {
    const { emailInput, passwordInput } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text h3>Login/Register</Text>
        </View>
        <View style={styles.form}>
          <View>
            <FormLabel>Email</FormLabel>
            <FormInput
              placeholder="john@gmail.com"
              value={emailInput}
              onChangeText={text => this.setState({ emailInput: text })}
            />
          </View>
          <View>
            <FormLabel>Password</FormLabel>
            <FormInput
              placeholder="password"
              secureTextEntry={true}
              value={passwordInput}
              onChangeText={text => this.setState({ passwordInput: text })}
            />

            <View />
          </View>
        </View>
        <View style={styles.extraSpace}>
          <Button
            title="Submit"
            onPress={this.handleSubmit}
            rounded={true}
            raised={true}
            loading={false}
            containerViewStyle={styles.button}
          />
        </View>
      </View>
    );
  }
}

export default AuthScreen;
