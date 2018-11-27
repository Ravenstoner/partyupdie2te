import React, { Component } from 'react'
import { Text, View, Animated } from 'react-native'

export default class selectAgeNumber extends Component {
  render() {
    return (
        <View style={{height: 55, width: this.props.scollLength, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.Text style={{ color: '#f4f4f4', fontSize: 26, fontWeight: this.props.ProFontWeight }}>{this.props.text}</Animated.Text>
        </View>
    )
  }
}
