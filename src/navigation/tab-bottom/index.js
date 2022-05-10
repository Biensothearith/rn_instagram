import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NAV_TYPES} from '../navTypes';

import HomeContainer from '../../containers/HomeContainer';
import LoginContainer from '../../containers/LoginContainer';

const TabBottom = createBottomTabNavigator();

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TabBottom.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <TabBottom.Screen name={NAV_TYPES.HOME} component={HomeContainer} />
        <TabBottom.Screen name={NAV_TYPES.LOGIN} component={LoginContainer} />
      </TabBottom.Navigator>
    );
  }
}
