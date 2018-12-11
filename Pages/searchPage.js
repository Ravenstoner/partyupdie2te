import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, Dimensions, StatusBar } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient, Font } from 'expo'

import TextInputUP from '../Components/TextInputUP'

export class searchPage extends Component {

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
            {/* StatusBar light-content */}
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{flex: 1}}>
                <TextInputUP type={'search'}></TextInputUP>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Ionicons name={'ios-search'} size={128} color={'#F4F4F4'} />
                    { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18 }}>Search for an Event</Text> ) : null }
                </View>
                <View style={{height: 50}}></View>
            </SafeAreaView>
        </View>
    )
  }
}

export default searchPage
