import React, { Component } from 'react'
import { Text, View } from 'react-native'

import SelectAge from '../Components/selectAge'

export class testPage extends Component {
  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <View style={{flex: 3}}></View>
          <SelectAge></SelectAge>
          <View style={{flex: 3}}></View>
        </View>
    )
  }
}

export default testPage
