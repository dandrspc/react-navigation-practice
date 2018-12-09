import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './Styles'

class Add extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Add</Text>
            </View>
        );
    }
}

export default Add;