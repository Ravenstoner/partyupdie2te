import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo';
import { Font } from 'expo';

export default class followButton extends Component {

    state = {
        fontLoaded: false,
        buttonPressState: false,
        buttonColor: ['#E04040', '#962D2D'],
        buttonFont: 'MoEB'
    };

    async componentDidMount() {
        await Font.loadAsync({
            'MoEB': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
            'MoL': require('../assets/fonts/Montserrat-Light.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    _onPressButton() {
        if (this.state.buttonPressState) {
            this.setState({
                buttonPressState: false,
                buttonColor: ['#E04040', '#962D2D'],
                buttonFont: 'MoEB'
            });
        } else {
            this.setState({
                buttonPressState: true,
                buttonColor: ['#3C3C3C', '#303030'],
                buttonFont: 'MoL'
            });
        }
    }

  render() {
    return (
        <TouchableWithoutFeedback onPress={this._onPressButton.bind(this)}>
            <LinearGradient colors={this.state.buttonColor} start={[0, 0]} end={[1, 0.1]} style={{height: 41, width: "100%", justifyContent: 'center', alignItems: 'center', borderRadius: 100}}>
            {
                this.state.fontLoaded ? (
                <Text style={{ fontFamily: this.state.buttonFont, color: '#f4f4f4', fontSize: 16 }}>
                    {this.state.buttonPressState ? this.props.text2 : this.props.text1}
                </Text>
                ) : null
            }
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
  }
}
