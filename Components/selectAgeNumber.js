import React, { Component } from 'react'
import { Text, View, Animated } from 'react-native'
import { Font } from 'expo'

export default class selectAgeNumber extends Component {

  constructor(props) {
    super(props)

    this.state = {
        fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
        'MoEB': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
        'MoB': require('../assets/fonts/Montserrat-Bold.ttf'),
        'MoL': require('../assets/fonts/Montserrat-Light.ttf'),
        'MoR': require('../assets/fonts/Montserrat-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
        <View style={{height: 55, width: this.props.scollLength, justifyContent: 'center', alignItems: 'center' }}>
          {
            this.state.fontLoaded ? (
              <Animated.Text style={{ color: '#f4f4f4', fontSize: 26, fontFamily: this.props.ProFontWeight }}>{this.props.text}</Animated.Text>
            ) : null
          }
        </View>
    )
  }
}
