import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
  Platform,
} from 'react-native';
import NavigationService from '../service/navigationService';
import {NAV_TYPES} from '../navigation/navTypes';

export default class LoginLanguage extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  UNSAFE_componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <>
        
      </>
    );
  }
}
const styles = StyleSheet.create({
  viewHerder: {
    backgroundColor: 'red',
    // paddingTop:10,
    flex: 0.1,
    flexDirection: 'row',
  },
  image_logo: {
    flex: 0.8,
    height: '100%',
    marginEnd: 10,
    marginStart: 10,
    resizeMode: 'contain',
  },
  view_input: {
    flexDirection: 'row',
    width: window.width,
    marginStart: '10%',
    marginEnd: '10%',
    marginTop: 10,
    padding: Platform.OS === 'ios' ? 4 : 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  input_: {
    alignSelf: 'center',
    marginTop: 10,
    height: 50,
    width: '80%',
    borderColor: '#373737',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    borderRadius: 10,
    color: 'black',
  },
  buttonLoging: {
    alignSelf: 'center',
    paddingBottom: Platform.OS === 'ios' ? 10 : 16,
    paddingTop: Platform.OS === 'ios' ? 10 : 14,
    borderRadius: 10,
    width: '50%',
    marginTop: 10,
  },
  textButtonLogin: {
    fontSize: Platform.OS === 'ios' ? 16 : 18,
    color: 'white',
    textAlign: 'center',
  },
  view_lr: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  viewLine: {
    height: 2,
    backgroundColor: '#0288d1',
    width: '100%',
  },
  view_lb: {
    flexDirection: 'row',
    marginTop: 20,
  },
  text_lb: {
    fontSize: Platform.OS === 'ios' ? 16 : 18,
    textAlign: 'center',
  },
});
