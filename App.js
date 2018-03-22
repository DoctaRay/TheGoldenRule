import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Asset, AppLoading } from 'expo';

import * as firebase from 'firebase';
import { firebaseApp } from './Assets/APIs/FirebaseConfig.js';

import RootNav from './Routes/RootNavigation.js'

export default class App extends React.Component {

  render() {
    return (
      <RootNav />
    )
  }
}
