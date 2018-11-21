import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'

export default class postComp extends Component {
  render() {
    return (
      <View>
        <Image style={{ width: Dimensions.get.width, height: 200, opacity: .4}} resizeMethod={'scale'} source={this.props.pic} />
        <Text style={{position: 'absolute', padding: 25, color: '#f4f4f4', fontSize: 38, fontWeight: 'bold'}}>{this.props.postHeadline}</Text>
      </View>
    )
  }
}
