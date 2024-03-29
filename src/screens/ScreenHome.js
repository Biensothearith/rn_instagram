import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import NavigationService from '../service/navigationService';
import {NAV_TYPES} from '../navigation/navTypes';
export default class Home extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  componentDidMount() {}
  UNSAFE_componentWillReceiveProps(nextProps) {}
  render() {
    return (
      <>
        <Text style={{marginTop: 100}}>Home</Text>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(NAV_TYPES.INTRO)}>
          <Text style={{color: 'red', fontSize: 18}}>Go to Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginTop:100}}
          onPress={() => NavigationService.navigate(NAV_TYPES.INTRO)}>
          <Text style={{color: 'red', fontSize: 18}}>Go to Login</Text>
        </TouchableOpacity>
      </>
    );
  }
}
const styles = StyleSheet.create({});
