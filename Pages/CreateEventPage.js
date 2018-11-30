import React, { Component } from 'react'
import { Text, View, SafeAreaView, TextInput, KeyboardAvoidingView, Slider, Animated, Dimensions, Switch } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { Font } from 'expo'

SCREEN_WIDTH = Dimensions.get('screen').width;

export class CreateEventPage extends Component {

// hide React-Navigation-Bar
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {
            fontLoaded: false,
            silderValue: 18,
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

    change(value) {
        this.setState(() => {
            let a = Math.round(value);
            console.log(a);
            this.setState({
                silderValue: a
            });
        });
    }

    render() {

        const sliderNumber = (this.state.silderValue - 16) * (SCREEN_WIDTH / 50);

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#272727'}}>
                <View style={{marginTop: 32, marginBottom: 0, marginLeft: 32, marginRight: 32}}>
                    {
                    this.state.fontLoaded ? (
                    <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 32 }}>
                        create Event
                    </Text>
                    ) : null
                    }
                </View>
                <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'}>
                <View style={{ flex: 1, marginLeft: 32, marginRight: 32, justifyContent: 'space-evenly' }}>
                    
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#F4F4F4'}}>
                        {
                        this.state.fontLoaded ? (
                        <TextInput 
                            keyboardType={'default'}
                            style={{color: '#F4F4F4', fontFamily: 'MoL', fontSize: 18, paddingLeft: 1, paddingBottom: 4 }}
                            placeholderTextColor={'rgba(244, 244, 244, .7)'}
                            editable = {true}
                            maxLength = {15}
                            placeholder={'Event Name'}
                        />
                        ) : null
                        }
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#F4F4F4'}}>
                        {
                        this.state.fontLoaded ? (
                        <TextInput 
                            keyboardType={'default'}
                            style={{color: '#F4F4F4', fontFamily: 'MoL', fontSize: 18, paddingLeft: 1, paddingBottom: 4 }}
                            placeholderTextColor={'rgba(244, 244, 244, .7)'}
                            editable = {true}
                            maxLength = {15}
                            placeholder={'Location'}
                        />
                        ) : null
                        }
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#F4F4F4'}}>
                        {
                        this.state.fontLoaded ? (
                        <TextInput 
                            keyboardType={'default'}
                            style={{color: '#F4F4F4', fontFamily: 'MoL', fontSize: 18, paddingLeft: 1, paddingBottom: 4 }}
                            placeholderTextColor={'rgba(244, 244, 244, .7)'}
                            editable = {true}
                            maxLength = {15}
                            placeholder={'Category'}
                        />
                        ) : null
                        }
                    </View>

                    <View style={{ flexDirection: 'row'}}>
                        <View style={{borderBottomWidth: 1, borderBottomColor: '#F4F4F4', flex: 1}}>
                        {
                        this.state.fontLoaded ? (
                        <TextInput
                            keyboardType={'decimal-pad'}
                            style={{color: '#F4F4F4', fontFamily: 'MoL', fontSize: 18, paddingLeft: 1, paddingBottom: 4 }}
                            placeholderTextColor={'rgba(244, 244, 244, .7)'}
                            editable = {true}
                            maxLength = {6}
                            placeholder={'Ticket Price'}
                        />
                        ) : null
                        }
                        </View>
                        <View>
                            <Switch></Switch>
                        </View>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#F4F4F4'}}>
                        {
                        this.state.fontLoaded ? (
                        <TextInput
                            keyboardType={'default'}
                            style={{color: '#F4F4F4', fontFamily: 'MoL', fontSize: 18, paddingLeft: 1, paddingBottom: 4 }}
                            placeholderTextColor={'rgba(244, 244, 244, .7)'}
                            editable = {true}
                            maxLength = {100}
                            placeholder={'Description'}
                        />
                        ) : null
                        }
                    </View>

                    <View>
                        {
                        this.state.fontLoaded ? (
                        <Animated.Text style={{color: '#F4F4F4', fontFamily: 'MoL', fontSize: 18}}>
                            min Age: {this.state.silderValue}
                        </Animated.Text>
                        ) : null
                        }
                        <View style={{flex: 1}}>
                            <Slider value={18} thumbTintColor={'#f4f4f4'} minimumTrackTintColor={'#CF3B3B'} maximumTrackTintColor={'#F4F4F4'} onValueChange={this.change.bind(this)} minimumValue={16} maximumValue={50}></Slider>
                        </View>
                    </View>

                    
                </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

export default CreateEventPage
