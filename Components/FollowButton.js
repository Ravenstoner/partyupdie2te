import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Animated } from 'react-native';
import { LinearGradient } from 'expo';
import { Font } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class followButton extends Component {

    state = {
        fontLoaded: false,
        buttonPressState: true,
        buttonColor: ['#E04040', '#962D2D'],
        buttonFont: 'MoEB',
        btnWidth: new Animated.Value(110),
    };

    async componentDidMount() {
        await Font.loadAsync({
            'MoEB': require('../assets/fonts/Montserrat-Bold.ttf'),
            'MoL': require('../assets/fonts/Montserrat-Light.ttf'),
        });

        this.setState({ fontLoaded: true });
        if (this.state.buttonPressState) {
            this.setState({
                buttonPressState: false,
                buttonColor: ['#E04040', '#962D2D']
            });
        } else {
            this.setState({
                buttonPressState: true,
                buttonColor: ['#3C3C3C', '#303030']
            });
        }
    }

    _onPressButton() {
        if (this.state.buttonPressState) {
            Animated.timing(                    
                this.state.btnWidth,
                {
                toValue: 110,
                duration: 300,
                }
            ).start(); 

            this.setState({
                buttonPressState: false,
                buttonColor: ['#E04040', '#962D2D']
            });

        } else {
            this.setState({
                buttonPressState: true,
                buttonColor: ['#3BCF41', '#258C2A']
            });

            Animated.timing(                    
                this.state.btnWidth,
                {
                toValue: 41,
                duration: 300,
                }
            ).start(); 
        }
    }

  render() {
    return (
        <TouchableWithoutFeedback onPress={this._onPressButton.bind(this)}>
            <Animated.View style={{height: 41, width: this.state.btnWidth, backgroundColor: '#456', justifyContent: 'center', alignItems: 'center', borderRadius: 100, overflow: 'hidden'}}>
                <LinearGradient colors={this.state.buttonColor} start={[0, 0]} end={[1, 0.1]} style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                {
                    this.state.fontLoaded ? (
                    <Animated.Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 16 }}>
                        {this.state.buttonPressState ? <Ionicons name={'ios-checkmark'} size={32} color={'#F4F4F4'} /> : "follow"}
                    </Animated.Text>
                    ) : null
                }
                </LinearGradient>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
  }
}
