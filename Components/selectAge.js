import React, { Component } from 'react'
import { Text, View, ScrollView, Animated, Button, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { LinearGradient } from 'expo'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'

import SelectAgeNumber from './selectAgeNumber'

SCROLL_LENGTH_ALL = Dimensions.get('screen').width / 2.5;
SCROLL_LENGTH = SCROLL_LENGTH_ALL / 3;

export default class selectAge extends Component {


    constructor(props) {
        super(props)

        this.state = {
            scrollX: new Animated.Value(0),
            fontLoaded: false,
            scrollValue: 0,
            boldFontOfScrollThing: 1,
            text1: 'normal',
            text2: '900',
            text3: 'normal',
            text4: 'normal',
            text5: 'normal',
            text6: 'normal',
            text7: 'normal',
            text8: 'normal',
            text9: 'normal'
        }
    }

    componentDidMount() {
        this.scroller.scrollTo({x: 0, y: 0});
    }

    scrollLeft = () => {
        if (!(this.state.scrollValue == (SCROLL_LENGTH * -1))) {
            this.scroller.scrollTo({x: this.state.scrollValue -= SCROLL_LENGTH, y: 0});
            this.setState({boldFontOfScrollThing: this.state.boldFontOfScrollThing -= 1});

            switch (this.state.boldFontOfScrollThing) {
                case 0:
                    this.setState({
                        text1: '900',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 1:
                    this.setState({
                        text1: 'normal',
                        text2: '900',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 2:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: '900',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 3:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: '900',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 4:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: '900',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 5:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: '900',
                        text7: 'normal'
                    });
                    break;
                case 6:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: '900'
                    });
                    break;
            
                default:
                    break;
            }
        }
    };

    scrollRight = () => {
        if (!(this.state.scrollValue == (SCROLL_LENGTH * 5))) {
            this.scroller.scrollTo({x: this.state.scrollValue += SCROLL_LENGTH, y: 0});
            this.setState({boldFontOfScrollThing: this.state.boldFontOfScrollThing += 1});

            switch (this.state.boldFontOfScrollThing) {
                case 0:
                    this.setState({
                        text1: '900',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 1:
                    this.setState({
                        text1: 'normal',
                        text2: '900',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 2:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: '900',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 3:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: '900',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 4:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: '900',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 5:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: '900',
                        text7: 'normal'
                    });
                    break;
                case 6:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: '900'
                    });
                    break;
            
                default:
                    break;
            }
        }
    };

     
    onSwipeRight(gestureState) {
        if (!(this.state.scrollValue == (SCROLL_LENGTH * -1))) {
            this.scroller.scrollTo({x: this.state.scrollValue -= SCROLL_LENGTH, y: 0});
            this.setState({boldFontOfScrollThing: this.state.boldFontOfScrollThing -= 1});

            switch (this.state.boldFontOfScrollThing) {
                case 0:
                    this.setState({
                        text1: '900',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 1:
                    this.setState({
                        text1: 'normal',
                        text2: '900',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 2:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: '900',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 3:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: '900',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 4:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: '900',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 5:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: '900',
                        text7: 'normal'
                    });
                    break;
                case 6:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: '900'
                    });
                    break;
            
                default:
                    break;
            }
        }
    }
    
    onSwipeLeft(gestureState) {
        if (!(this.state.scrollValue == (SCROLL_LENGTH * 5))) {
            this.scroller.scrollTo({x: this.state.scrollValue += SCROLL_LENGTH, y: 0});
            this.setState({boldFontOfScrollThing: this.state.boldFontOfScrollThing += 1});

            switch (this.state.boldFontOfScrollThing) {
                case 0:
                    this.setState({
                        text1: '900',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 1:
                    this.setState({
                        text1: 'normal',
                        text2: '900',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 2:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: '900',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 3:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: '900',
                        text5: 'normal',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 4:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: '900',
                        text6: 'normal',
                        text7: 'normal'
                    });
                    break;
                case 5:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: '900',
                        text7: 'normal'
                    });
                    break;
                case 6:
                    this.setState({
                        text1: 'normal',
                        text2: 'normal',
                        text3: 'normal',
                        text4: 'normal',
                        text5: 'normal',
                        text6: 'normal',
                        text7: '900'
                    });
                    break;
            
                default:
                    break;
            }
        }
    }

  render() {

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };

    return (
        <LinearGradient colors={['#3C3C3C', '#303030']} start={[0, 0]} end={[0.7, 0.5]} style={{ width: SCROLL_LENGTH_ALL, height: 70, borderRadius: 100, overflow: 'hidden' }}>
            <View style={{ flex: 1 }}>
            <GestureRecognizer
                onSwipeUp={(state) => this.onSwipeUp(state)}
                onSwipeDown={(state) => this.onSwipeDown(state)}
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={{
                flex: 1,
                }}
                >
                <View style={{position: 'absolute', width: '100%', height: '100%', zIndex: 103, flexDirection: 'row' }}>
                    <TouchableWithoutFeedback onPress={this.scrollLeft}>
                        <View style={{flex: 1}}></View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.scrollRight}>
                        <View style={{flex: 1}}></View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1 }} ref={(scroller) => {this.scroller = scroller}} scrollEventThrottle={16} >
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <SelectAgeNumber text={16} scollLength={SCROLL_LENGTH} ProFontWeight={this.state.text1}></SelectAgeNumber>
                        <SelectAgeNumber text={17} scollLength={SCROLL_LENGTH} ProFontWeight={this.state.text2}></SelectAgeNumber>
                        <SelectAgeNumber text={18} scollLength={SCROLL_LENGTH} ProFontWeight={this.state.text3}></SelectAgeNumber>
                        <SelectAgeNumber text={19} scollLength={SCROLL_LENGTH} ProFontWeight={this.state.text4}></SelectAgeNumber>
                        <SelectAgeNumber text={20} scollLength={SCROLL_LENGTH} ProFontWeight={this.state.text5}></SelectAgeNumber>
                        <SelectAgeNumber text={21} scollLength={SCROLL_LENGTH} ProFontWeight={this.state.text6}></SelectAgeNumber>
                        <SelectAgeNumber text={22} scollLength={SCROLL_LENGTH} ProFontWeight={this.state.text7}></SelectAgeNumber>
                    </View>
                </ScrollView>
                </GestureRecognizer>
            </View>
        </LinearGradient>
    )
  }
}
