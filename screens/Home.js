import React from 'react';
import { View, Button, Text, StatusBar } from 'react-native';
import styles from './Styles'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#171F33"
          barStyle="light-content"
        />
        <Text style={styles.text}>Home Screen</Text>
        <Button
          color='#171F33'
          title='Go to screen one'
          onPress={() => this.props.navigation.navigate('Welcome')}
        />
      </View>
    );
  }
}
