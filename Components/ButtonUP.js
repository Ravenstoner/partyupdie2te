import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { LinearGradient, Font } from 'expo'
import SvgUri from 'react-native-svg-uri'

export default class ButtonUP extends Component {

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
        });

        this.setState({ fontLoaded: true });
    }

  render() {

    switch (this.props.type) {
        case 1:
            return (
                <View style={{ height: 80, borderRadius: 100, backgroundColor: '#272727', overflow: 'hidden' }}>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(this.props.Location)}>
                        <LinearGradient colors={this.props.gradientColor} start={[0, 0]} end={[1, 0.1]} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 32 }}>{this.props.text}</Text> ) : null }
                        </LinearGradient>
                    </TouchableWithoutFeedback>
                </View>
            )
            break;

        case 2:
            return (
                <View style={{ height: 60, borderRadius: 100, backgroundColor: '#272727', overflow: 'hidden' }}>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(this.props.Location)}>
                        <LinearGradient colors={this.props.gradientColor} start={[0, 0]} end={[1, 0.1]} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoB', color: '#f4f4f4', fontSize: 18, paddingRight: 4, paddingLeft: 6 }}>{this.props.text}</Text> ) : null }
                            <SvgUri width="26" height="26" source={this.props.icon} />
                        </LinearGradient>
                    </TouchableWithoutFeedback>
                </View>
            )
            break;
    
        default:
            break;
    }
  }
}
