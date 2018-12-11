import React, { Component } from 'react'
import { Text, View, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, PickerIOS, Slider, Animated, Dimensions, Switch, StatusBar, ScrollView } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { Font } from 'expo'
import { LinearGradient, Location, Permissions } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geocoder from 'react-native-geocoder';

import ChatRow from '../Components/chatRow'

export class chatPage extends Component {

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
        Permissions.askAsync(Permissions.LOCATION);
        await Font.loadAsync({
            'MoEB': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
            'MoB': require('../assets/fonts/Montserrat-Bold.ttf'),
            'MoL': require('../assets/fonts/Montserrat-Light.ttf'),
        });
        this.setState({ fontLoaded: true });
    }    

    render() {

        const sliderNumber = (this.state.silderValue - 16) * (SCREEN_WIDTH / 50);

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#272727'}}>
                {/* StatusBar light-content */}
                <StatusBar barStyle="light-content" />
                <View style={{marginTop: 16, marginBottom: 0, marginLeft: 32, marginRight: 32, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    { this.state.fontLoaded ? (<Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 32 }}>Chat</Text>) : null }
                </View>
                <View style={{flex: 1}}>
                    <ScrollView>
                        <ChatRow></ChatRow>
                        <ChatRow></ChatRow>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

export default chatPage
