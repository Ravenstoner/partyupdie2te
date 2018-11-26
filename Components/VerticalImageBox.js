import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo';
import SvgUri from 'react-native-svg-uri';

export default class VerticalImageBox extends Component {

  render() {
      if (this.props.type == "link") {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(this.props.Location)}>
                <LinearGradient colors={['#3C3C3C', '#303030']} start={[0, 0]} end={[0.7, 0.5]}
                style={{
                    height: 100,
                    width: 100,
                    justifyContent: 'center',
                    marginRight: 8,
                    alignItems: 'center',
                    borderRadius: 15,
                    overflow: 'hidden'
                }}>
                    <SvgUri width="30" height="30" source={require('../assets/more.svg')} />
                </LinearGradient>
            </TouchableWithoutFeedback>
        )
      } else {
        return (
                <LinearGradient colors={['#3C3C3C', '#303030']} start={[0, 0]} end={[0.7, 0.5]}
                style={{
                    height: 100,
                    width: 100,
                    justifyContent: 'center',
                    marginRight: 8,
                    alignItems: 'center',
                    borderRadius: 15,
                    overflow: 'hidden'
                }}>
                    <Image
                        style={{flex: 1, width: '100%', height: '100%'}}
                        source={this.props.image}
                        resizeMethod={'scale'}
                    />
                </LinearGradient>
        )
      }
    
  }
}