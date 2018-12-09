import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import { WelcomeScreen } from './screens';
import { MainNavigator } from './navigation';

const AppNavigator = createSwitchNavigator(
  {
    Welcome: WelcomeScreen,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Welcome',
  },
);

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
