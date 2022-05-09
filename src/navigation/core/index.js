import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NAV_TYPES} from '../navTypes';
import TabBottom from '../tab-bottom';
import HomeContainer from '../../containers/HomeContainer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const CoreNavigator = createStackNavigator();
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CoreNavigator.Navigator
        initialRouteName={NAV_TYPES.TAB_BUTTOM}
        screenOptions={{
          headerShown: false,
        }}>
        <CoreNavigator.Screen
          name={NAV_TYPES.TAB_BUTTOM}
          component={TabBottom}
        />
        <CoreNavigator.Screen name={NAV_TYPES.HOME} component={HomeContainer} />
      </CoreNavigator.Navigator>
    );
  }
}
