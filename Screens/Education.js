import React from 'react';
import { StyleSheet, FlatList, Button } from 'react-native';
import { List, ListItem, Text, Icon, Left, Body, Right } from 'native-base'

import EduData from '../Assets/Constants/EduData.js';
import Profile from '../Components/Education/Profiles.js'

export default class Education extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: (
      <Button
        onPress={() => navigation.navigate('DrawerToggle')}
        title="Menu"
        color="#fff"
      />
    ),
      headerRight: (
          <Button
            onPress={() => navigation.navigate('InfoScreen')}
            title='Info'
            color='#fff'
          />
      ),
    }
  }

  render() {

    // make lists reusable and input info into them from another component

    return (
      <Profile />
    );
  }
}
