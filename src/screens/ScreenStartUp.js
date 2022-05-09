import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import NavigationService from '../Service/navigationService';
import {NAV_TYPES} from '../Navigation/navTypes';
export default class StartUp extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }
  componentDidMount() {
    this.props.startupWorker();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <>
        <Text style={{marginTop: 100}}>StartUp</Text>
      </>
    );
  }
}
const styles = StyleSheet.create({});
