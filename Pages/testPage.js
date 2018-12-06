import React, { Component } from 'react'
import { Text, View, Image, StatusBar } from 'react-native'

import SelectAge from '../Components/selectAge'

export class testPage extends Component {

  // hide React-Navigation-Bar
  static navigationOptions = {
    header: null
}
  render() {
    return (
        <View style={{ flex: 1 }}>
          {/* StatusBar light-content */}
          <StatusBar hidden={true} />
          <Image style={{flex: 1, width: undefined, height: undefined}} source={require('../assets/startpagebackground1.png')} />
        </View>
    )
  }
}

export default testPage
