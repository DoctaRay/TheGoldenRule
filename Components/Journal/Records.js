import React from "react"
import { Text, View, ScrollView } from "react-native"

export default class Records extends React.Component {
  
      showEntry() {
        console.log("Entry saved!");
      }
  render() {

    return (
      <ScrollView>
        <Text>{} </Text>
        <Text> </Text>
        <Text> </Text>
      </ScrollView>
   )
 }
}
