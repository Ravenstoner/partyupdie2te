import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { LinearGradient } from 'expo'
import SvgUri from 'react-native-svg-uri'

export default class navbarComp extends Component {

    state = {
        colorState1: false,
        color: ['transparent', 'transparent']
    }

    changeColor1() {
        if (this.state.colorState1) {
            this.setState({color: ['#CF3B3B', '#962D2D'], colorState1: false});
            
        } else {
            this.setState({color: ['transparent', 'transparent'], colorState1: true});
        }
    }

  render() {
    return (
      <View style={{backgroundColor: '#2f2f2f', flexDirection: 'row', height: 50}}>
        <TouchableWithoutFeedback style={{backgroundColor: 'red'}} onPress={ this.changeColor1.bind(this) }>
            <LinearGradient start={[0, 0]} end={[1, 0.1]} colors={ this.state.color } style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <SvgUri width="30" height="30" source={require('../assets/home.svg')} />
            </LinearGradient>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={{backgroundColor: 'red'}} onPress={ this.changeColor1.bind(this) }>
            <LinearGradient start={[0, 0]} end={[1, 0.1]} colors={ this.state.color } style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <SvgUri width="30" height="30" source={require('../assets/home.svg')} />
            </LinearGradient>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
