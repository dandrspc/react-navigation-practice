import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import styles from './Styles'
import Icon from '@expo/vector-icons/FontAwesome';

class Profile extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Profile",
        headerRight: (
            <Icon
                style={{ paddingRight: 24 }}
                name="ellipsis-v"
                color='#F8F8F8'
                size={24}
                onPress={() => navigation.navigate('Settings')}
            />
        ),
    })

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Profile</Text>
            </View>
        );
    }
}

export default Profile;