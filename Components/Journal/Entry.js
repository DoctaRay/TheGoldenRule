import React from "react";
import { Text, View} from "react-native";
import { Form, Item, Input, Label } from 'native-base';

export default class Entry extends React.Component {
    render() {
       return (
         <Form>
           <Item>
             <Label fixedLabel> Title </Label>
             <Input />
           </Item>
           <Item fixedLabel last>
             <Label> Entry </Label>
           </Item>
         </Form>
        )
       }
      }
