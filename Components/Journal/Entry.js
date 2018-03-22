import React from "react";
import { View, StatusBar, Button } from "react-native";
import { Form, Item, Input, Label, Header, Content, Container, Text, H1 } from 'native-base';

import * as firebase from "firebase"

export default class Entry extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      entry: '',
    }
  }

  _addEntry = () => {
    firebase.database().ref('entries/').push({
      title: this.state.title,
      entry: this.state.entry,
    });
    console.log('Added: ' + this.state.title);
    console.log("Added entry: " + this.state.entry);
    this.props.navigation.goBack()
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: (
      <Button
        title='Back'
        onPress={() => navigation.goBack()}
        color="#fff"
      />
    ),
    }
  }

    render() {
       return (
         <Container>
           <Content>
         <Form>
           <Item>
             <Label fixedLabel> Title </Label>
             <Input
                onChangeText={(title) => this.setState({title})}
                placeholder="What big, compassionate thing did you do today?"/>
           </Item>
           <Item>
             <Label fixedLabel> </Label>
             <Input
                onChangeText={(entry) => this.setState({entry})}
                placeholder="How did you apply the 'Golden Rule' by doing that? Was there a better way you could've done it?"/>
           </Item>
           <Button
             title="Submit"
             onPress={this._addEntry}
           />
         </Form>
         <H1>{this.state.title}</H1>
         <Text>{this.state.entry}</Text>
       </Content>
       </Container>
        )
       }
      }
