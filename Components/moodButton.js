import React, { Component } from 'react'
import { Text, View, Image, Animated, TouchableWithoutFeedback } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { LinearGradient, Font } from 'expo'

export default class moodButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fontLoaded: false,
            checkOpay: new Animated.Value(0),
            checkStat: false,
            onCheckOpay: () => {

                if (this.state.checkStat) {
                    Animated.timing(                    
                        this.state.checkOpay,
                        {
                        toValue: 0,
                        duration: 100,
                        }
                    ).start();  
                    this.setState({checkStat: false});
                } else {
                    Animated.timing(                    
                        this.state.checkOpay,
                        {
                        toValue: 1,
                        duration: 100,
                        }
                    ).start();  
                    this.setState({checkStat: true});
                }

            }
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
        <TouchableWithoutFeedback onPress={this.state.onCheckOpay}>
        <View style={{padding: 4}}>
            <View style={{ height: SCREEN_WIDTH / 3, width: SCREEN_WIDTH / 3, overflow: 'hidden', borderRadius: 100}}>

                    <Image style={{flex: 1, width: undefined, height: undefined}} source={this.props.pic} />
                <Animated.View style={{position: 'absolute', zIndex: 100, height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', opacity: this.state.checkOpay}}>
                    <View style={{height: 50, width: 50}}>
                        <LinearGradient style={{flex: 1, overflow: 'hidden', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} colors={['#E04040', '#962D2D']} start={[0, 0]} end={[1, 0.1]}>
                            <SvgUri width="20" height="20" source={require('../assets/check-solid.svg')} />
                        </LinearGradient>
                    </View>
                </Animated.View>
            </View>
            <View style={{alignItems: 'center', paddingTop: 4}}>
                { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 18 }}>{this.props.text}</Text> ) : null }
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
  }
}
