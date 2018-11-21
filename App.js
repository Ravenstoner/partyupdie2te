import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Dimensions, TouchableHighlight, StatusBar, Animated } from 'react-native';
import { LinearGradient } from 'expo';
import SvgUri from 'react-native-svg-uri';
import { Font } from 'expo';

export default class App extends React.Component {

    state = {
        fontLoaded: false,
    };

    scrollAnimatedValue = new Animated.Value(0);


    async componentDidMount() {
        await Font.loadAsync({
            'MoEB': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
            'MoL': require('./assets/fonts/Montserrat-Light.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    scrollTest() {
        alert("oagashit0");
    }

  render() {

    return (
      <View style={{flex: 1, backgroundColor: '#272727'}}>
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
          <View style={{flexDirection: 'row', position: 'absolute', bottom: 8}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <SvgUri width="30" height="30" source={require('./assets/home.svg')} />
                {
                    this.state.fontLoaded ? (
                    <Animated.Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 24 }}>
                        {this.scrollAnimatedValue.interpolate({
                            inputRange: [0, 10],
                            outputRange: [10, 20],
                            extrapolate: 'clamp',
                        })}
                    </Animated.Text>
                    ) : null
                }
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <SvgUri width="30" height="30" source={require('./assets/add.svg')} />
                {
                    this.state.fontLoaded ? (
                    <Text style={{marginLeft: 8, fontFamily: 'MoL', color: '#f4f4f4', fontSize: 24 }}>
                        380
                    </Text>
                    ) : null
                }
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <ScrollView style={{paddingLeft: 8, paddingRight: 8}} scrollEventThrottle={8} onScroll={Animated.event(
              [{nativeEvent:{contentOffset: {y: this.state.scrollY}}}]
          )}>
              <View style={{marginTop: 8, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                {
                    this.state.fontLoaded ? (
                    <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 30 }}>
                        Johanna Doe
                    </Text>
                    ) : null
                }
                {
                    this.state.fontLoaded ? (
                    <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 11, opacity: .7 }}>
                        @joDoe
                    </Text>
                    ) : null
                }
                </View>
                <View style={{alignItems: 'flex-end', justifyContent: 'center', paddingLeft: 8}}>
                  <LinearGradient colors={['#E04040', '#962D2D']} start={[0, 0]} end={[1, 0.1]} style={{height: 41, width: 118, justifyContent: 'center', alignItems: 'center', borderRadius: 100}}>
                    {
                        this.state.fontLoaded ? (
                        <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 16 }}>
                            follow
                        </Text>
                        ) : null
                    }
                  </LinearGradient>
                </View>
              </View>
              <View style={{paddingTop: 8}}>
                {
                    this.state.fontLoaded ? (
                    <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 16, opacity: .9 }}>
                        Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </Text>
                    ) : null
                }
              </View>
              <View>
                <SvgUri width="undefined" height="30" source={require('./assets/Line.svg')} />
              </View>
              <View>
                  <View>
                    {
                        this.state.fontLoaded ? (
                        <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 16, opacity: .9, paddingBottom: 8}}>
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
