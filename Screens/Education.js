import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { List, ListItem, Text, Icon, Left, Body, Right } from 'native-base'

export default class Education extends React.Component {

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
