import React from "react"
import { Text, View, FlatList, StyleSheet } from "react-native"

import * as firebase from 'firebase'

var dbEntries = firebase.database().ref('entries/');

export default class Records extends React.Component {

      constructor(props) {
        super(props);

        this.state = {
          data: [],
        }
      }

//shows entries. takes snapshot of current entries (at the time of the function call) from firebase.
      showEntry = () => {
        dbEntries.on('value', snap => {
      var entries = [];
      snap.forEach((child) => {
        entries.push({
          title: child.val().title,
          entry: child.val().entry,
        });
      });

      this.setState({
        data: entries.reverse(),
      });
    });
        console.log("Entry shown");
      }

      componentDidMount() {
        this.showEntry(dbEntries);
      }

  render() {

    return (
      <View>
      <FlatList
      data={this.state.data}
      renderItem={({item}) =>
        <View style={styles.entry}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.entry}</Text>
        </View>
      }
      />
    </View>
   )
 }
}

const styles = StyleSheet.create({
    big: {
      fontSize: 20,
      color: 'blue',
    },
    entry: {
      borderColor: 'orange',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 3
    },
    title: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
    }
})
