import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Journal from '../Screens/Journal.js';
import Education from '../Screens/Education.js';

const Header = {
  navigationOptions: {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  },
};

const HomeStack = StackNavigator(
  {
  Home: { screen: Journal }
  },
  {
  Header,
  }
)

const EducationStack = StackNavigator(
  {
  Education: { screen: Education }
  },
  Header,
)


const RootNav = TabNavigator (
{
  Home: { screen: HomeStack },
  Education: { screen: EducationStack },
},
{
  initialRouteName: 'Home',
  navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
          type = 'font-awesome';
        } else if (routeName === 'Education') {
          iconName = 'school';
          type = 'materialicons';
        }
        return <Icon name={iconName} type={type} size={25} color={tintColor} />;
    }
  }),
  // tabBarComponent: TabBarBottom,
  //   tabBarPosition: 'bottom',
  //   animationEnabled: true,
  //   swipeEnabled: false,
}
);

export default RootNav;
