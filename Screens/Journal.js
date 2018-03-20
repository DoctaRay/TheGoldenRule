import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'

import Records from "../Components/Journal/Records.js"
import Entry from "../Components/Journal/Entry.js"

export default class Journal extends React.Component {

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
  //
  // onPress() {
  //     console.log("Pressed!");
  //     this.props.navigation.navigate('Entry');
  //   }

  render() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    }

    if(mm<10) {
        mm = '0'+mm
    }

      today = mm + '/' + dd + '/' + yyyy;

    const Entry = {
      date: today,
      entry: 'Wow, this is the best journalling app ever. I rate this 10/10',
      image: '../Images/flower.jpg'
    }


// Use a card element which includes all the 'Entry' datae and render them in a list INSIDE the card. A card will get rendered for each entry
    return (
<View>
    <View style={styles.entry}>

            <TouchableHighlight underlayColor='white' onPress={() => {
              console.log("Pressed!");
              this.props.navigation.navigate('Entry');
            }}>
              <View>
                <Icon name='open-book' type='entypo' size={100} color='yellow'/>
              </View>
            </TouchableHighlight>
          </View>

          <Records />


    </View>
    );
}
}

const styles = StyleSheet.create({
  entry : {
    justifyContent: 'center',
    flexDirection: 'column',
    borderStyle: 'solid',
    borderColor: 'yellow',
    borderWidth: 5,
    backgroundColor: 'white'

  }
})
