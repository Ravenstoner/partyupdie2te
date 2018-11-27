import React, { Component } from 'react'
import { Text, View } from 'react-native'

import SelectAge from '../Components/selectAge'

export class testPage extends Component {
  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <View style={{flex: 3}}></View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: .5}}></View>
            <SelectAge></SelectAge>
            <View style={{flex: .5}}></View>
          </View>
          <View style={{flex: 3}}></View>
        </View>
    )
  }
}

export default testPage
