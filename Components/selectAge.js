import React, { Component } from 'react'
import { Text, View, ScrollView, Animated, Button, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { LinearGradient } from 'expo'

SCROLL_LENGTH = Dimensions.get('screen').width / 3 -8;

export default class selectAge extends Component {


    constructor(props) {
        super(props)

        this.state = {
            scrollX: new Animated.Value(0),
            fontLoaded: false,
            scrollValue: 0,
        }
    }

    componentDidMount() {
        this.scroller.scrollTo({x: 0, y: 0});
    }

    scrollLeft = () => {
        if (!(this.state.scrollValue == (SCROLL_LENGTH * -1))) {
            this.scroller.scrollTo({x: this.state.scrollValue -= SCROLL_LENGTH, y: 0});
        }
    };

    scrollRight = () => {
        if (!(this.state.scrollValue == (SCROLL_LENGTH * 7))) {
            this.scroller.scrollTo({x: this.state.scrollValue += SCROLL_LENGTH, y: 0});
        }
    };

  render() {

    return (
        <LinearGradient colors={['#3C3C3C', '#303030']} start={[0, 0]} end={[0.7, 0.5]} style={{ flex: 1, borderRadius: 100, overflow: 'hidden' }}>
            <View style={{ flex: 1 }}>
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

                        <View style={{height: 55, width: SCROLL_LENGTH, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#f4f4f4', fontSize: 35 }}>16</Text>
                        </View>
                        <View style={{height: 55, width: SCROLL_LENGTH, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#f4f4f4', fontSize: 35 }}>17</Text>
                        </View>
                        <View style={{height: 55, width: SCROLL_LENGTH, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#f4f4f4', fontSize: 35 }}>18</Text>
                        </View>
                        <View style={{height: 55, width: SCROLL_LENGTH, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#f4f4f4', fontSize: 35 }}>19</Text>
                        </View>
                        <View style={{height: 55, width: SCROLL_LENGTH, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#f4f4f4', fontSize: 35 }}>20</Text>
                        </View>
                        <View style={{height: 55, width: SCROLL_LENGTH, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#f4f4f4', fontSize: 35 }}>21</Text>
                        </View>
                        <View style={{height: 55, width: SCROLL_LENGTH, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#f4f4f4', fontSize: 35 }}>22</Text>
                        </View>
                        <View style={{height: 55, width: SCROLL_LENGTH, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#f4f4f4', fontSize: 35 }}>23</Text>
                        </View>
                        <View style={{height: 55, width: SCROLL_LENGTH, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#f4f4f4', fontSize: 35 }}>24</Text>
                        </View>


                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    )
  }
}
