import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Home, Likes, Search, Add } from '../screens';
import ProfileNavigator from './ProfileNavigation';
import Icon from '@expo/vector-icons/FontAwesome';

export default MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home"
            color={tintColor}
            size={24}
          />
        )
      })
    },
    Search: {
      screen: Search,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="search"
            color={tintColor}
            size={24}
          />
        )
      })
    },
    Add: {
      screen: Add,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="plus-square"
            color={tintColor}
            size={24}
          />
        )
      })
    },
    Likes: {
      screen: Likes,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="heart"
            color={tintColor}
            size={24}
          />
        )
      })
    },
    Profile: {
      screen: ProfileNavigator,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="user"
            color={tintColor}
            size={24}
          />
        )
      })
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#F8F8F8',
      inactiveTintColor: '#586589',
      style: {
        backgroundColor: '#171F33'
      },
    }
  }
);