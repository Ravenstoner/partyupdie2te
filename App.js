import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Dimensions, TouschableWithoutFeedback, StatusBar, Animated } from 'react-native';
import { LinearGradient } from 'expo';
import SvgUri from 'react-native-svg-uri';
import { Font } from 'expo';
import FollowButton from './Components/FollowButton';

export default class App extends React.Component {

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'MoEB': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
            'MoL': require('./assets/fonts/Montserrat-Light.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

  render() {

    return (
      <View style={{flex: 1, backgroundColor: '#272727'}}>
        <StatusBar
            barStyle="light-content"
        />
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            shadowColor: '#000',
            overflow: 'hidden',
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            shadowOpacity: .4,
            shadowOffset: {
              height: 1,
              width: 0
            },
            shadowRadius: 5
          }} elevation={5}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={require('./assets/juju.jpg')}
          />
          <View style={{flexDirection: 'row', position: 'absolute', bottom: 8, zIndex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <SvgUri width="26" height="26" source={require('./assets/heart.svg')} />
                {
                    this.state.fontLoaded ? (
                    <Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 20 }}>
                        1.234
                    </Text>
                    ) : null
                }
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <SvgUri width="26" height="26" source={require('./assets/add.svg')} />
                {
                    this.state.fontLoaded ? (
                    <Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 20 }}>
                        380
                    </Text>
                    ) : null
                }
            </View>
          </View>
          <LinearGradient colors={['transparent', '#000']} style={{opacity: .2, width: '100%', height: '50%', position: 'absolute', bottom: 0}} />
        </View>
        <View style={{flex: 1}}>
          <ScrollView style={{paddingLeft: 8, paddingRight: 8}} scrollEventThrottle={8} onScroll={Animated.event(
              [{nativeEvent:{contentOffset: {y: this.state.scrollY}}}]
          )}>
              <View style={{marginTop: 8, flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                {
                    this.state.fontLoaded ? (
                    <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 30 }}>
                        Johanna Doe
                    </Text>
                    ) : null
                }
                {
                    this.state.fontLoaded ? (
                    <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 12, opacity: .6 }}>
                        @joDoe
                    </Text>
                    ) : null
                }
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingLeft: 8}}>
                    <FollowButton text1={'follow'} text2={'following'}></FollowButton>
                </View>
              </View>
              <View style={{paddingTop: 8}}>
                {
                    this.state.fontLoaded ? (
                    <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 16, opacity: .9, paddingBottom: 8 }}>
                        Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </Text>
                    ) : null
                }
              </View>
              <View>
                <SvgUri width="undefined" height="10" source={require('./assets/Line.svg')} />
              </View>

              <View>
                  <View>
                    {
                        this.state.fontLoaded ? (
                        <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 16, paddingTop: 8, paddingBottom: 8}}>
                            Party
                        </Text>
                        ) : null
                    }
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <LinearGradient colors={['#3C3C3C', '#303030']} start={[0, 0]} end={[1, 0.1]} style={{height: 93, width: 93, justifyContent: 'center', marginRight: 8, alignItems: 'center', borderRadius: 15, overflow: 'hidden'}}>
                            <SvgUri width="30" height="30" source={require('./assets/add.svg')} />
                        </LinearGradient>
                        <LinearGradient colors={['#3C3C3C', '#303030']} start={[0, 0]} end={[1, 0.1]} style={{height: 93, width: 93, justifyContent: 'center', marginRight: 8, alignItems: 'center', borderRadius: 15, overflow: 'hidden'}}>
                            <SvgUri width="30" height="30" source={require('./assets/add.svg')} />
                        </LinearGradient>
                        <LinearGradient colors={['#3C3C3C', '#303030']} start={[0, 0]} end={[1, 0.1]} style={{height: 93, width: 93, justifyContent: 'center', marginRight: 8, alignItems: 'center', borderRadius: 15, overflow: 'hidden'}}>
                            <SvgUri width="30" height="30" source={require('./assets/add.svg')} />
                        </LinearGradient>
                        <LinearGradient colors={['#3C3C3C', '#303030']} start={[0, 0]} end={[1, 0.1]} style={{height: 93, width: 93, justifyContent: 'center', marginRight: 8, alignItems: 'center', borderRadius: 15, overflow: 'hidden'}}>
                            <SvgUri width="30" height="30" source={require('./assets/add.svg')} />
                        </LinearGradient>
                        <LinearGradient colors={['#3C3C3C', '#303030']} start={[0, 0]} end={[1, 0.1]} style={{height: 93, width: 93, justifyContent: 'center', marginRight: 8, alignItems: 'center', borderRadius: 15, overflow: 'hidden'}}>
                            <SvgUri width="30" height="30" source={require('./assets/add.svg')} />
                        </LinearGradient>
                    </ScrollView>
                  </View>
              </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
