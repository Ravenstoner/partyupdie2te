import React, { Component } from 'react'
import { Text, View, SafeAreaView, StatusBar, Dimensions, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Font } from 'expo'
import SvgUri from 'react-native-svg-uri'

import PartyHistoryPicBox from '../Components/PartyHistoryPicBox';

SCREEN_HEIGHT = Dimensions.get('screen').height;
SCREEN_WIDTH = Dimensions.get('screen').width;

export class ProfilePartyHistory extends Component {

    // hide React-Navigation-Bar
    static navigationOptions = {
        title: 'party history',
        headerStyle: {
          backgroundColor: '#222',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: '#F4F4F4',
        headerTitleStyle: {
          fontWeight: 'bold',
        },    
      };

    state = {
        fontLoaded: false,
    };

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

            <ScrollView>
                <PartyHistoryPicBox layout={1}></PartyHistoryPicBox>
                <PartyHistoryPicBox layout={1}></PartyHistoryPicBox>
            </ScrollView>

        </SafeAreaView>
    )
  }
}

export default ProfilePartyHistory
