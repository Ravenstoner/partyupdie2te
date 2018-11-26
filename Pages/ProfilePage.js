import React, { Component } from 'react'
import { Text, View, SafeAreaView, StatusBar, Dimensions, Image, ScrollView, Animated, TouchableWithoutFeedback, Easing } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { Font } from 'expo';

import FollowButton from '../Components/FollowButton'
import VerticalImageBox from '../Components/VerticalImageBox'

// Animation values
HEADER_MAX_HEIGHT = Dimensions.get('screen').height / 2;
HEADER_MIN_HEIGHT = Dimensions.get('screen').height / 4;

SCREEN_HEIGHT = Dimensions.get('screen').height;
SCREEN_WIDTH = Dimensions.get('screen').width;

export default class ProfilePage2 extends Component {

// hide React-Navigation-Bar
    static navigationOptions = {
        header: null
    }

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
            <Image style={{flex: 1, width: undefined, height: undefined}} source={require('../assets/juju.jpg')} />
        </Animated.View>

        {/* ScrollView */}
        <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16} onScroll={Animated.event(
            [{nativeEvent:{contentOffset: {y: this.state.scrollY}}}]
        )}>

            <View style={{height: HEADER_MAX_HEIGHT}}>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ProfilePageMenu')} >
                    <View style={{position: 'absolute', top: 35, right: 16}}>
                        <SvgUri width="26" height="26" source={require('../assets/menu.svg')} />
                    </View>
                </TouchableWithoutFeedback>
            </View>            

            {/* Bottom Content */}
            <View style={{marginLeft: 8, marginRight: 8, marginTop: 8}}>
                {/* Name & follow Btn */}
                <View style={{flexDirection: 'row'}}>
                    <View>
                        {
                            this.state.fontLoaded ? (
                            <Text style={{marginLeft: 8, fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 32 }}>
                                Johanna Doe
                            </Text>
                            ) : null
                        }
                    </View>
                    <View style={{flex: 1, marginLeft: 8}}>
                        <FollowButton text1={'follow'} text2={'following'}></FollowButton>
                    </View>
                </View>

                <View>
                    {
                        this.state.fontLoaded ? (
                        <Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 11, opacity: .5, marginTop: 8, marginBottom: 8 }}>
                            @joDoe
                        </Text>
                        ) : null
                    }
                </View>

                <View>
                    {
                        this.state.fontLoaded ? (
                        <Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 16, opacity: .9 }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
                        </Text>
                        ) : null
                    }
                </View>

                <View>
                    <SvgUri style={{marginTop: 8, marginBottom: 8}} width="undefined" height="10" source={require('../assets/Line.svg')} />
                </View>

                <View>
                    <View>
                        {
                            this.state.fontLoaded ? (
                            <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 16, paddingBottom: 8}}>
                                Party
                            </Text>
                            ) : null
                        }
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <VerticalImageBox image={require('../assets/MoB4.jpg')}></VerticalImageBox>
                            <VerticalImageBox image={require('../assets/MoB5.jpg')}></VerticalImageBox>
                            <VerticalImageBox image={require('../assets/MoB6.jpg')}></VerticalImageBox>
                            <VerticalImageBox image={require('../assets/MoB7.jpg')}></VerticalImageBox>
                            <VerticalImageBox navigation={this.props.navigation} Location={'ProfilePartyHistory'} type={'link'} ></VerticalImageBox>
                        </ScrollView>
                    </View>
                        <View style={{height: 300}}>

                        </View>
                </View>

            </View>
        </ScrollView>
      </View>
    )
  }
}
