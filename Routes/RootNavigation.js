import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Button, Image, Linking } from 'react-native';
import { DrawerNavigator, StackNavigator, withNavigation } from 'react-navigation';
import { Icon } from 'native-base';

import Journal from '../Screens/Journal.js';
import Entry from "../Components/Journal/Entry.js";

import Education from '../Screens/Education.js';
import Christianity from '../Components/Education/Christianity.js'

//
// class Menu extends React.Component {
//   render() {
//     return (
//       <TouchableOpacity>
//         <View>
//             <Icon name='menu' onPress={() => {
//               navigation.navigate("DrawerToggle");
//             }} />
//       </View>
//     </TouchableOpacity>
//     )
//   }
// }
//
// class Info extends React.Component {
//   render() {
//     return (
//       <TouchableHighlight>
//         <View>
//           <Icon name='info' type="Entypo" onPress={() => {
//             navigation.navigate("InfoScreen");
//           }} />
//       </View>
//     </TouchableHighlight>
//     )
//   }
// }

class InfoScreen extends React.Component {
  render() {
    return (
      <View>
        <Image source={require('../Assets/Images/k_armstrong.png')}/>
        <Text> This app was created to cultivate compassion.
          The idea was taken from Karen Armstrong in her book "Twelve Steps to a Compassionate Life".
           Write a journal entry each morning detailing how you're going to apply "The Golden Rule" today.
            At night, reflect on your attempts and whether or not something could improve.
            Don't have any inspiration?
             Look at our education section and read the book if you have the chance!
          Find out more about her Charter for Compassion...</Text>
          <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://charterforcompassion.org/')}>
            here
          </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title='Close'
          color='#ffdf00'/>
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
  },

}
const HomeStack = StackNavigator(
  {
    Home: { screen: Journal },
    Entry: { screen: Entry },
  },
  Header,
)

const JournalStack = StackNavigator(
  {
      Home: { screen: HomeStack },
      Info: { screen: InfoScreen },
  },
  {
      mode: 'modal',
      headerMode: 'none'
      },

)

const EducationStack = StackNavigator(
  {
    Education: { screen: Education },
    Christianity: { screen: Christianity },
    // Islam: { screen: Islam },
  },
    Header,
)

const RealEdStack = StackNavigator(
  {
    Education: { screen: EducationStack },
    Info: { screen: InfoScreen },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)



const RootNav = DrawerNavigator(
{
  Home: { screen: JournalStack },
  Education: { screen: RealEdStack },
},
{
  initialRouteName: 'Home',
//   navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = 'home';
//           type = 'font-awesome';
//         } else if (routeName === 'Education') {
//           iconName = 'school';
//           type = 'materialicons';
//         }
//         return <Icon name={iconName} type={type} size={25} color={tintColor} />;
//     }
//   }
// ),
//   contentOptions: {
//   activeTintColor: '#e91e63',
//   itemsContainerStyle: {
//     marginVertical: 0,
//   },
//   iconContainerStyle: {
//     opacity: 1
//   }
// }
//   // tabBarComponent: TabBarBottom,
//   //   tabBarPosition: 'bottom',
//   //   animationEnabled: true,
//   //   swipeEnabled: false,
 }
);

export default withNavigation(RootNav);
