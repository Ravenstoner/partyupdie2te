import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { LinearGradient, Font } from 'expo'

SCREEN_HEIGHT = Dimensions.get('screen').height;

export default class chatRow extends Component {

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
        return (
            <View style={{ height: SCREEN_HEIGHT / 10, borderBottomColor: '#F4F4F4', borderBottomWidth: 1, margin: 16 }}>
                { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoB', color: '#f4f4f4', fontSize: 18 }}>Peter Hansen</Text> ) : null }
            </View>
        )
    }
}
