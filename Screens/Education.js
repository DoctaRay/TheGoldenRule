import React from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';
import { List, ListItem, Text, Icon, Left, Body, Right } from 'native-base'

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
    <ScrollView>
      <List>
        <ListItem icon>
          <Left>
            <Icon name='plane' />
          </Left>
          <Body>
            <Text>Flying away</Text>
          </Body>
          <Right>
            <Text> New York </Text>
          </Right>
        </ListItem>
      </List>
    </ScrollView>
    );
  }
}
