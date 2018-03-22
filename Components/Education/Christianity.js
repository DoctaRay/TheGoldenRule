import React from "react"
import { Text, View, Image, Linking } from "react-native"
import { H1 } from 'native-base'

export default class Christianity extends React.Component {
   render() {
      return (
        <View>
          <Image
          source={{uri: 'http://www.stickpng.com/assets/images/5871675d7b7f6103e35c6c88.png'}}
        />
          <Text> As you would that men should do to you, do ye also to them likewise.
Jesus, in Luke 6:31 (KJV). </Text>
        <Text>
As ye will that men do to you, and do ye to them in like manner.
As translated by John Wycliffe (1389) </Text>
        <Text
          onPress={() => Linking.openURL('https://www.ucg.org/bible-study-tools/bible-questions-and-answers/what-is-the-golden-rule')}
          style={{color: 'blue'}}> Helpful link </Text>
        </View>
       )
      }
     }
