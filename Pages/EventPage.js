import React, { Component } from 'react'
import { Text, View, SafeAreaView, StatusBar, Dimensions, Image, ScrollView, Animated, TouchableWithoutFeedback, Easing } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { Font } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import FollowButton from '../Components/FollowButton'
import VerticalImageBox from '../Components/VerticalImageBox'
import ProfilePageMenu from '../Pages/ProfilePageMenu'
import ProfilePartyHistory from '../Pages/ProfilePartyHistory'

// Animation values
HEADER_MAX_HEIGHT = Dimensions.get('screen').height / 2;
HEADER_MIN_HEIGHT = Dimensions.get('screen').height / 4;

SCREEN_HEIGHT = Dimensions.get('screen').height;
SCREEN_WIDTH = Dimensions.get('screen').width;

class EventPage extends Component {

    // hide React-Navigation-Bar
    static navigationOptions = {
        title: 'Feed',
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
        header: null
    };

    constructor(props) {
        super(props)

        this.state = {
            scrollY: new Animated.Value(0),
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

    const headerHight = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
    })

    const headerOpacity = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [1, .1],
        extrapolate: 'clamp'
    })

    return (
      <View style={{ flex: 1, backgroundColor: '#272727'}}>

        {/* StatusBar light-content */}
        <StatusBar barStyle="light-content" />
        {/* Profile Pic */}
        <Animated.View style={{height: headerHight, opacity: headerOpacity, width: Dimensions.get('screen').width, position: 'absolute', overflow: 'hidden', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, backgroundColor: '#272727' }}>
            <Animated.Image style={{flex: 1, width: undefined, height: undefined}} source={require('../assets/202.jpg')} />
            <Animated.View style={{position: 'absolute', bottom: 8, left: 8, right: 0, height: '50%', justifyContent: 'flex-end'}}>
                { this.state.fontLoaded ? (<Text style={{marginLeft: 8, fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 32 }}>kjh</Text>) : null }
            </Animated.View>
        </Animated.View>

        {/* ScrollView */}
        <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16} onScroll={Animated.event(
            [{nativeEvent:{contentOffset: {y: this.state.scrollY}}}]
        )}>

            <View style={{height: HEADER_MAX_HEIGHT}}>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()} >
                    <SafeAreaView style={{position: 'absolute', top: 16, right: 18}}>
                        <Ionicons name={'ios-close'} size={32} color={'#F4F4F4'} />
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </View>            

            {/* Bottom Content */}
            <View style={{marginLeft: 8, marginRight: 8, marginTop: 8}}>
                {/* Name & follow Btn */}
                <View style={{flexDirection: 'row', marginBottom: 8}}>
                    <View style={{alignItems: 'center', flexDirection: 'row', flex: 1, justifyContent: 'space-around'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Ionicons name={'ios-heart'} size={24} color={'#F4F4F4'} />
                            { this.state.fontLoaded ? (<Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18 }}>1.234</Text>) : null }
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Ionicons name={'ios-chatboxes'} size={24} color={'#F4F4F4'} />
                            { this.state.fontLoaded ? (<Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18 }}>45</Text>) : null }
                        </View>
                    </View>
                    <View style={{flex: 1, marginLeft: 8}}>
                        <FollowButton text1={'join party'} text2={'joined'} JoinState={this.props.JoinState}></FollowButton>
                    </View>
                </View>

                <View>
                    {
                        this.state.fontLoaded ? (
                        <Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 16, opacity: .9 }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Sed diam nonumy eirmod tempor invidunt ut labore et.
                        </Text>
                        ) : null
                    }
                </View>

                <View style={{justifyContent: 'center', marginLeft: 8, marginRight: 8}}>
                    <SvgUri style={{marginTop: 8, marginBottom: 8}} width="undefined" height="9" source={require('../assets/Line.svg')} />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name={'logo-euro'} size={24} color={'#F4F4F4'} />
                        { this.state.fontLoaded ? (<Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 16 }}>7,99 €</Text>) : null }
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name={'ios-people'} size={24} color={'#F4F4F4'} />
                        { this.state.fontLoaded ? (<Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 16 }}>1.540</Text>) : null }
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name={'ios-beer'} size={24} color={'#F4F4F4'} />
                        { this.state.fontLoaded ? (<Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 16 }}>18</Text>) : null }
                    </View>
                </View>

                <View style={{justifyContent: 'center', marginLeft: 8, marginRight: 8}}>
                    <SvgUri style={{marginTop: 8, marginBottom: 8}} width="undefined" height="9" source={require('../assets/Line.svg')} />
                </View>

                <View style={{marginLeft: 8, marginRight: 8}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <View style={{height: 100, width: 100, overflow: 'hidden', borderRadius: 100}}>
                            <Animated.Image style={{flex: 1, width: undefined, height: undefined}} source={require('../assets/61.jpg')} />
                        </View>
                        <View style={{justifyContent: 'center', marginLeft: 4}}>
                            { this.state.fontLoaded ? (<Text style={{marginLeft: 8, fontFamily: 'MoB', color: '#f4f4f4', fontSize: 16 }}>@bollwerk_graz</Text>) : null }
                            { this.state.fontLoaded ? (<Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 16 }}>Bollwerk Graz</Text>) : null }
                            { this.state.fontLoaded ? (<Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 16 }}>Straße blabla 25</Text>) : null }
                            { this.state.fontLoaded ? (<Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 16 }}>8000 Graz</Text>) : null }
                        </View>
                    </View>
                </View>
                <View style={{height: 16}}></View>
            </View>
        </ScrollView>
      </View>
    )
  }
}

export default EventPage