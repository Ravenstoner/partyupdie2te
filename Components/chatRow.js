import React, { Component } from 'react'
import { Text, View, Dimensions, Image, ScrollView, TouchableHighlight } from 'react-native'
import { LinearGradient, Font } from 'expo'

SCREEN_HEIGHT = Dimensions.get('screen').height;
SCREEN_WIDTH = Dimensions.get('screen').width;

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
                <View style={{height: SCREEN_HEIGHT / 10, width: SCREEN_WIDTH, paddingBottom: 10, marginBottom: 10, borderBottomColor: 'rgba(244, 244, 244, .1)', borderBottomWidth: 1, marginLeft: 8, marginRight: 8}}>
                    <ScrollView scrollEventThrottle={16} horizontal style={{width: '100%'}} showsHorizontalScrollIndicator={false}>
                            <View style={{flexDirection: 'row', height: '100%', width: SCREEN_WIDTH - 16, alignItems: 'center'}}>
                                <View style={{height: SCREEN_HEIGHT / 10 - 10, width: SCREEN_HEIGHT / 10 - 10, overflow: 'hidden', borderRadius: 100}}>
                                    <Image style={{flex: 1, width: undefined, height: undefined}} source={this.props.profilePic} />
                                </View>
                                <View style={{marginLeft: 8, paddingRight: 8, flex: 1}}>
                                    { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoB', color: '#f4f4f4', fontSize: 18, marginBottom: 2 }}>{this.props.username}</Text> ) : null }
                                    { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 12 }}>{this.props.text}</Text> ) : null }
                                </View>
                                { !this.props.number == "" ?  
                                <View style={{height: 30, width: 30, overflow: 'hidden', borderRadius: 100, marginLeft: 8}}>
                                    <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
                                        <LinearGradient colors={['#E04040', '#962D2D']} start={[0, 0]} end={[1, 0.1]} style={{backgroundColor: '#333', width: 55, height: 55, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                                            { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoB', color: '#f4f4f4', fontSize: 15 }}>{this.props.number}</Text> ) : null }
                                        </LinearGradient>
                                    </View>
                                </View>
                                : null
                                }
                            </View>
                    </ScrollView>
                </View>
        )
    }
}
