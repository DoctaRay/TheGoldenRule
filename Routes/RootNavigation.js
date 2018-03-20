import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { DrawerNavigator, StackNavigator, withNavigation } from 'react-navigation';
import { Icon } from 'native-base';

import Journal from '../Screens/Journal.js';
  import Entry from "../Components/Journal/Entry.js";
import Education from '../Screens/Education.js';


class Menu extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <View>
            <Icon name='menu' onPress={() => {
              navigation.navigate("DrawerToggle");
            }} />
      </View>
    </TouchableOpacity>
    )
  }
}

class Info extends React.Component {
  render() {
    return (
      <TouchableHighlight>
        <View>
          <Icon name='info' type="Entypo" onPress={() => {
            navigation.navigate("InfoScreen");
          }} />
      </View>
    </TouchableHighlight>
    )
  }
}

class InfoScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> This is a compassionate app! </Text>
        <Button
          onPress={() => navigation.goBack()}
          title='Close'
          color='#fff'/>
      </View>
    )
  }
}

//header isn't a StackNavigator. it doesn't have any navigation props
const Header = {
  navigationOptions: {
    headerTitle: 'The Golden Rule',
    headerStyle: {
      backgroundColor: '#ffdf00',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
     // headerLeft: <Menu />,
     // headerRight: <Info />,
  },

}
const HomeStack = StackNavigator(
  {
    Home: { screen: Journal },
    Entry: { screen: Entry },
  },
  // .mode = "modal"
  Header,
  //   {
  //     navigationOptions: {
  //     headerTitle: 'The Golden Rule',
  //     headerStyle: {
  //       backgroundColor: '#f4511e',
  //     },
  //     headerTintColor: '#fff',
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //     },
  //     headerLeft: <Menu />,
  //     headerRight: <Info />,
  //     //headerleft
  //     //headerRight
  //   },
  //   mode: 'modal',
  //   headerMode: 'none',
  // },
)

const EducationStack = StackNavigator(
  {
    Education: { screen: Education }
  },
    Header,
)


const RootNav = DrawerNavigator(
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
  }
),
  contentOptions: {
  activeTintColor: '#e91e63',
  itemsContainerStyle: {
    marginVertical: 0,
  },
  iconContainerStyle: {
    opacity: 1
  }
}
  // tabBarComponent: TabBarBottom,
  //   tabBarPosition: 'bottom',
  //   animationEnabled: true,
  //   swipeEnabled: false,
}
);

export default withNavigation(RootNav);
