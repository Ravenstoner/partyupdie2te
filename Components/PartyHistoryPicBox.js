import React, { Component } from 'react'
import { Text, View, SafeAreaView, StatusBar, Dimensions, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Font } from 'expo'
import SvgUri from 'react-native-svg-uri'

SCREEN_HEIGHT = Dimensions.get('screen').height;
SCREEN_WIDTH = Dimensions.get('screen').width;

export class PartyHistoryPicBox extends Component {

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

    switch (this.props.layout) {
        case 1:
            return (
                <View style={{flexDirection: 'row'}}>
                    <View style={{height: SCREEN_WIDTH / 3 - 8, width: SCREEN_WIDTH / 3 - 8, margin: 4, borderRadius: 15, overflow: 'hidden' }}>
                        <Image style={{flex: 1, width: undefined, height: undefined}} source={this.props.pic1} />
                    </View>
                    <View style={{height: SCREEN_WIDTH / 3 - 8, width: SCREEN_WIDTH / 3 - 8, margin: 4, borderRadius: 15, overflow: 'hidden' }}>
                        <Image style={{flex: 1, width: undefined, height: undefined}} source={this.props.pic2} />
                    </View>
                    <View style={{height: SCREEN_WIDTH / 3 - 8, width: SCREEN_WIDTH / 3 - 8, margin: 4, borderRadius: 15, overflow: 'hidden' }}>
                        <Image style={{flex: 1, width: undefined, height: undefined}} source={this.props.pic3} />
                    </View>
                </View>
            )
            break;
        case 2:
            return (
                <View style={{flexDirection: 'row'}}>
                    <View style={{height: ((SCREEN_WIDTH / 3) * 2) - 8, width: ((SCREEN_WIDTH / 3) * 2) - 8, margin: 4, borderRadius: 15, overflow: 'hidden' }}>
                        <Image style={{flex: 1, width: undefined, height: undefined}} source={this.props.pic1} />
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{height: SCREEN_WIDTH / 3 - 8, width: SCREEN_WIDTH / 3 - 8, margin: 4, borderRadius: 15, overflow: 'hidden' }}>
                            <Image style={{flex: 1, width: undefined, height: undefined}} source={this.props.pic2} />
                        </View>
                        <View style={{height: SCREEN_WIDTH / 3 - 8, width: SCREEN_WIDTH / 3 - 8, margin: 4, borderRadius: 15, overflow: 'hidden' }}>
                            <Image style={{flex: 1, width: undefined, height: undefined}} source={this.props.pic3} />
                        </View>
                    </View>
                </View>
            )
            break;
        default:
            break;
    }
  }
}

export default PartyHistoryPicBox
