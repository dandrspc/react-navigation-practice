import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './Styles'

class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Search</Text>
            </View>
        );
    }
}

export default Search;