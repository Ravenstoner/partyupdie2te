import React, { Component } from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'

import SvgUri from 'react-native-svg-uri'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Font } from 'expo'

import FollowButton from '../Components/FollowButton'

export default class EventPost extends Component {

    constructor(props) {
        super(props)
        this.state = { fontLoaded: false }
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
        <View>
            <View>
                <View style={{flexDirection: 'row', alignItems: 'center', height: 48, justifyContent: 'space-between', paddingLeft: 16, paddingRight: 16}}>
                    { this.state.fontLoaded ? (<Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 16 }}>@{this.props.Host}</Text>) : null }
                    <Ionicons name={'ios-more'} size={24} color={'#F4F4F4'} />
                </View>
            </View>

            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(this.props.Location)} >
                <View style={{height: SCREEN_WIDTH, width: SCREEN_WIDTH, overflow: 'hidden', borderRadius: 5}}>
                    <Image style={{flex: 1, width: undefined, height: undefined}} source={this.props.Image} />
                    <View style={{position: 'absolute', bottom: 16, left: 16, right: 16, height: '50%', justifyContent: 'flex-end'}}>
                        { this.state.fontLoaded ? (<Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 32 }}>{this.props.Headline}</Text>) : null }
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <View style={{flexDirection: 'row', marginTop: 8, marginBottom: 8, marginLeft: 16, marginRight: 16 }}>
                <View style={{alignItems: 'center', flexDirection: 'row', flex: 1, justifyContent: 'space-around'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name={'ios-heart'} size={24} color={'#F4F4F4'} />
                        { this.state.fontLoaded ? (<Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18 }}>{this.props.Likes}</Text>) : null }
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name={'ios-chatboxes'} size={24} color={'#F4F4F4'} />
                        { this.state.fontLoaded ? (<Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18 }}>{this.props.Comments}</Text>) : null }
                    </View>
                </View>
                <View style={{flex: 1, marginLeft: 8}}>
                    <FollowButton text1={'join party'} text2={'joined'} JoinState={this.props.JoinState}></FollowButton>
                </View>
            </View>

            <View style={{marginBottom: 8, marginLeft: 16, marginRight: 16}}>
                {
                    this.state.fontLoaded ? (
                    <Text style={{fontFamily: 'MoL', color: '#f4f4f4', fontSize: 15, opacity: .9 }}>
                        {this.props.Text}
                    </Text>
                    ) : null
                }
            </View>

            <View style={{justifyContent: 'center', marginLeft: 8, marginRight: 8}}>
                <SvgUri width="undefined" height="1" source={require('../assets/Line.svg')} />
            </View>
        </View>
    )
  }
}