import React, { Component } from 'react'
import { Text, View, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, PickerIOS, Slider, Animated, Dimensions, Switch, StatusBar, ScrollView } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { Font } from 'expo'
import { LinearGradient, Location, Permissions } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geocoder from 'react-native-geocoder';

import ChatRow from '../Components/chatRow'

export class feedPage extends Component {

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
            <SafeAreaView style={{flex: 1, backgroundColor: '#272727'}}>
                {/* StatusBar light-content */}
                <StatusBar barStyle="light-content" />
                
            </SafeAreaView>
        )
    }
}

export default feedPage
