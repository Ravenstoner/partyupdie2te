import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, Dimensions, StatusBar } from 'react-native'
import SvgUri from 'react-native-svg-uri'
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
                <View style={{padding: 16, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <TextInputUP keyboardType={'default'} placeholder={'search'} keyboardAppearance={'dark'} maxLength={15}></TextInputUP>
                    </View>
                    <View style={{paddingLeft: 4, paddingRight: 4}}>
                        <SvgUri width="28" height="28" source={require('../assets/search.svg')} />
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <SvgUri width="128" height="128" source={require('../assets/search.svg')} />
                    { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18 }}>Search for an Event</Text> ) : null }
                </View>
                <View style={{height: 50}}></View>
            </SafeAreaView>
        </View>
    )
  }
}

export default searchPage
