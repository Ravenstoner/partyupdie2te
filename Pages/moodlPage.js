import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, ScrollView, Animated, Image, StatusBar } from 'react-native'
import { LinearGradient, Font } from 'expo'
import Ionicons from 'react-native-vector-icons/Ionicons'

import MoodBox from '../Components/moodBox'

SCREEN_HEIGHT = Dimensions.get('screen').height;
SCREEN_WIDTH = Dimensions.get('screen').width;

BOX_HEIGHT = SCREEN_HEIGHT / 1.7;
BOX_WIDTH = SCREEN_WIDTH / 1.5;

export class moodlPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fontLoaded: false,
            genres: [
                {
                    id: 1,
                    title: 'Rock',
                    color: ['#E04040', '#962D2D'],
                    pic: require('../assets/gitarre.png')
                },
                {
                    id: 2,
                    title: 'Jazz',
                    color: ['#DDA542', '#AC6100'],
                    pic: require('../assets/trom.png')
                },
                {
                    id: 3,
                    title: 'SH!T',
                    color: ['#6A3BCF', '#341C65'],
                    pic: require('../assets/radio.png')
                }
            ]
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
            <View style={{flex: 1, backgroundColor: '#272727'}}>
                <StatusBar hidden={ true } />
                <SafeAreaView>
                    { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 32, marginLeft: 16, marginRight: 16, marginTop: 16 }}>choose your mood</Text> ) : null }
                </SafeAreaView>
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}} showsHorizontalScrollIndicator={false} horizontal pagingEnabled scrollEventThrottle={16}>
                        { this.state.genres.map((item) => <MoodBox key={item.id} color={item.color} title={item.title} pic={item.pic} /> ) }
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default moodlPage
