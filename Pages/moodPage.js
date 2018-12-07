import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { LinearGradient, Font } from 'expo'

import ButtonUP from '../Components/ButtonUP'
import MoodButton from '../Components/moodButton'


SCREEN_WIDTH = Dimensions.get('screen').width - 24;

export class moodPage extends Component {

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
                <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 50 }}>
                    { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 32 }}>choose your STYLE</Text> ) : null }
                </View>
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}}>
                        <View style={{flex: 1, paddingTop: 10}}>

                            <View style={{flexDirection: 'row'}}>
                                <MoodButton pic={require('../assets/09.jpg')} text={'Blues'}></MoodButton>
                                <MoodButton pic={require('../assets/13.jpg')} text={'Electronic'}></MoodButton>
                                <MoodButton pic={require('../assets/59.jpg')} text={'Hip Hop'}></MoodButton>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <MoodButton pic={require('../assets/61.jpg')} text={'Jazz'}></MoodButton>
                                <MoodButton pic={require('../assets/200.jpg')} text={'Pop'}></MoodButton>
                                <MoodButton pic={require('../assets/201.jpg')} text={'R&B'}></MoodButton>
                            </View>   

                            <View style={{flexDirection: 'row'}}>
                                <MoodButton pic={require('../assets/202.jpg')} text={'Reggae'}></MoodButton>
                                <MoodButton pic={require('../assets/09.jpg')} text={'Rock'}></MoodButton>
                                <MoodButton pic={require('../assets/13.jpg')} text={'Punk'}></MoodButton>
                            </View>   

                            <View style={{flexDirection: 'row'}}>
                                <MoodButton pic={require('../assets/59.jpg')} text={'Metal'}></MoodButton>
                                <MoodButton pic={require('../assets/61.jpg')} text={'Rap'}></MoodButton>
                                <MoodButton pic={require('../assets/200.jpg')} text={'Indie'}></MoodButton>
                            </View>                          

                        </View>
                    </ScrollView>
                </View>
                <View style={{margin: 8}}>
                    <ButtonUP navigation={this.props.navigation} Location={'IndexPage'} gradientColor={['#E04040', '#962D2D']} text={'ok'} ></ButtonUP>
                </View>
            </SafeAreaView>
        </View>
    )
  }
}

export default moodPage
