import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
        <Button
          color='#171F33'
          title='Go to screen Home'
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#293656',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    margin: 30,
    fontSize: 24
  }
});