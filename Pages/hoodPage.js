import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { LinearGradient, Font } from 'expo'

import ButtonUP from '../Components/ButtonUP'
import MoodButton from '../Components/moodButton'


SCREEN_WIDTH = Dimensions.get('screen').width - 24;

export class hoodPage extends Component {

    // hide React-Navigation-Bar
    static navigationOptions = {
        header: null
    }

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
        <View style={{backgroundColor: '#272727', flex: 1}}>
            <SafeAreaView style={{flex: 1}}>
                <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 100 }}>
                { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 30 }}>where's your</Text> ) : null }
                { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 32 }}>HOOOOOOD?</Text> ) : null }
                </View>
                
            </SafeAreaView>
        </View>
    )
  }
}

export default hoodPage
