import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import styles from './Styles'

class Likes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.text}>Likes</Text>
            </View >
        );
    }
}



export default Likes;