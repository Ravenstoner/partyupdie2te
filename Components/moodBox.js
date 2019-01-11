import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, ScrollView, Animated, Image, TouchableWithoutFeedback } from 'react-native'
import { LinearGradient, Font } from 'expo'
import Ionicons from 'react-native-vector-icons/Ionicons'

SCREEN_HEIGHT = Dimensions.get('screen').height;
SCREEN_WIDTH = Dimensions.get('screen').width;

BOX_HEIGHT = SCREEN_HEIGHT / 1.7;
BOX_WIDTH = SCREEN_WIDTH / 1.5;

export default class moodBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fontLoaded: false,
            favState: false,
            boxScale: new Animated.Value(.9)
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

    boxPress = () => {
        this.state.favState ? this.setState({favState: false}) : this.setState({favState: true});
    }

    boxPressIn = () => {
        Animated.timing(
        this.state.boxScale,
            {
                toValue: .87,
                duration: 100,
            }
        ).start();
    }

    boxPressOut = () => {
        Animated.timing(
        this.state.boxScale,
            {
                toValue: .9,
                duration: 100,
            }
        ).start();
    }

  render() {
    return (
        <Animated.View style={{height: '100%', width: SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center', transform: [{ scale: this.state.boxScale }] }}>
            <TouchableWithoutFeedback onPressIn={ this.boxPressIn } onPressOut={ this.boxPressOut } onPress={ this.boxPress }>
                <View style={{height: BOX_HEIGHT, width: BOX_WIDTH}}>
                    <LinearGradient style={{
                        flex: 1,
                        borderRadius: 15,
                        shadowColor: '#000000',
                        shadowOffset: {
                        width: 0,
                        height: 3
                        },
                        shadowRadius: 5,
                        shadowOpacity: .5
                    }} colors={this.props.color} start={[0, 0]} end={[1, 0.1]}>
                        { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 32, margin: 22  }}>{this.props.title}</Text> ) : null }
                        <Image resizeMode={'contain'} style={{ width: '80%', height: BOX_HEIGHT + 64, position: 'absolute', bottom: 15, right: -40}} source={this.props.pic} />
                            {
                                this.state.favState ? <Ionicons style={{position: 'absolute', bottom: 22, left: 22}} name={'ios-heart'} size={34} color={'#F4F4F4'} /> : <Ionicons style={{position: 'absolute', bottom: 22, left: 22}} name={'ios-heart-empty'} size={34} color={'#F4F4F4'} />
                            }
                    </LinearGradient>
                </View>
            </TouchableWithoutFeedback>
        </Animated.View>
    )
  }
}
