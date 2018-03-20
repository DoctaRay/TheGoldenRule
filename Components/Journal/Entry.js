import React from "react";
import { Text, View, StatusBar, Button } from "react-native";
import { Form, Item, Input, Label, Header } from 'native-base';

export default class Entry extends React.Component {
  //
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     title: '',
  //     entry: '',
  //   }
  // }

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
         <Form>
           <Item>
             <Label fixedLabel> Title </Label>
             <Input
               // onChangeText={(newTitle) => this.setState({newTitle})}
                placeholder="What big thing did you do today?"/>
           </Item>
           <Item>
             <Label fixedLabel> </Label>
             <Input
                placeholder="How did you apply the 'Golden Rule' today?"/>
           </Item>
           <Button
             title="Submit"
           />
         </Form>
        )
       }
      }
