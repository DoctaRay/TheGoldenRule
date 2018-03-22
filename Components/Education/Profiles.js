import React from "react";
import { Text, View} from "react-native";
import { List, ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

var EduData = [
    {
      name: 'Christianity',
      avatar_url: '../Assets/Images/christianity.png',
      description: 'Jesus',
      data: {
        quote: 'As you would that men should do to you, do ye also to them likewise.',
        links: '',
        }
    },
    {
      name: 'Islam',
      avatar_url: './Images/',
      description: '',
      data: {
        quote: '',
        links: '',
      }
    },
    {
      name: 'Buddhism',
      avatar_url: './Images/',
      description: '',
      data: {
        quote: '',
        links: '',
      }
    },
    {
      name: 'Hinduism',
      avatar_url: './Images/',
      description: '',
        data: {
          quote: '',
          links: '',
      }
    },
    {
      name: 'Confucianism',
      avatar_url: './Images/',
      description: '',
      data: {
        quote: '',
        links: '',
      }
    },
    {
      name: 'Judaism',
      avatar_url: './Images/',
      data: {
        quote: '',
        links: '',
      }
    },
    {
      name: 'Daoism',
      avatar_url: './Images/',
      description: '',
      data: {
        quote: '',
        links: '',
      }
    },
    {
      name: 'Philosophical rationalism',
      avatar_url: './Images/',
      description: '',
      data: {
        quote: '',
        links: '',
      }
    },
]

class Profile extends React.Component {

  render() {
     return (
       <View>
       <List containerStyle={{marginBottom: 20}}>
         <ListItem
           roundAvatar
           avatar={{uri:'../Assets/Images/christianity.png'}}
           title="Christianity"
           subtitle="As you would that men should do to you, do ye also to them likewise."
           onPress={this.props.navigation.navigate('Christianity')}
         />
       </List>
       {/* <List containerStyle={{marginBottom: 20}}
         {
    EduData.map((l, i) => (
      <ListItem
        roundAvatar
        avatar={{uri:l.avatar_url}}
        key={i}
        title={l.name}
        subtitle={l.description}
      />
    ))
  }
      </List> */}
    </View>
      )
    }
   }

   export default withNavigation(Profile)
