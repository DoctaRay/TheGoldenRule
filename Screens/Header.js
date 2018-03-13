import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Header extends React.Component {
  const Header = StackNavigator(
    {
      screen: {this.navigation.state}
    },
    {
      navigationOptions: {
        title: 'The Golden Rule';
      }
    }
)
  }
