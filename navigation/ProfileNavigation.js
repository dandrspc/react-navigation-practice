import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Profile, Settings } from '../screens'

export default ProfileNavigator = createStackNavigator(
    {
        Profile: {
            screen: Profile,
        },
        Settings: { 
            screen: Settings ,
            navigationOptions: {
                headerTitle: "Settings"
            }
        }
    },
    {
        navigationOptions: {
            headerTintColor: '#F8F8F8',
            headerStyle: {
                backgroundColor: '#171F33'                
            }
        }
    }
)

