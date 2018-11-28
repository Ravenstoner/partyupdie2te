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
            ProFontWeight: 'MoR',
            ageArr: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        }
    }

    componentDidMount() {
        this.scroller.scrollTo({x: 0, y: 0});
    }

  render() {

    

    return (
        <LinearGradient colors={['#3C3C3C', '#303030']} start={[0, 0]} end={[0.7, 0.5]} style={{ width: SCROLL_LENGTH_ALL, height: 70, borderRadius: 100, overflow: 'hidden' }}>
            <View style={{ flex: 1 }}>
            
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1 }} ref={(scroller) => {this.scroller = scroller}} scrollEventThrottle={16} >
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    {
                        this.state.ageArr.map(( ageArr, key ) =>
                        (
                            <SelectAgeNumber key={ key } text={ ageArr } scollLength={ SCROLL_LENGTH } ProFontWeight={ this.state.ProFontWeight } ></SelectAgeNumber>
                        ))
                    }
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    )
  }
}
