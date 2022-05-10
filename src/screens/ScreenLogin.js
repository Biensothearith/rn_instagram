import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import NavigationService from '../service/navigationService';
import {NAV_TYPES} from '../navigation/navTypes';
import LogoText from '../assets/images/logoText.svg';
import {SvgUri} from 'react-native-svg';

export default class Login extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }
  componentDidMount() {
    console.log('---', this.props);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {}

  render() {
    const {colors, images} = this.props.app;
    return (
      <>
        <SafeAreaView style={styles.main_safeAreaview}>
          <View style={styles.view_language_top}></View>
          <View style={styles.view_body}>
            <LogoText width={120} height={40} />
            <SvgUri width="200" height="200" svgXmlData={LogoText} />
          </View>
          <View style={styles.view_signup_bottom}></View>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  main_safeAreaview: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'column',
  },
  view_language_top: {
    backgroundColor: 'blue',
    flex: 0.1,
  },
  view_body: {
    flex: 0.9,
    backgroundColor: 'yellow',
  },
  view_signup_bottom: {
    backgroundColor: 'blue',
    flex: 0.1,
  },
});
