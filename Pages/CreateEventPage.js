import React, { Component } from 'react'
import { Text, View, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Slider, Animated, Dimensions, Switch, StatusBar } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { Font } from 'expo'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient, Location, Permissions } from 'expo';
import Geocoder from 'react-native-geocoder';


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
            ticketPriceOpacity: new Animated.Value(.3),
            ticketPriceState: false,
            onTicketPriceOpacityChange: () => {

                if (this.state.ticketPriceState) {
                    Animated.timing(                    
                        this.state.ticketPriceOpacity,
                        {
                        toValue: .3,
                        duration: 300,
                        }
                    ).start();  
                    this.setState({ticketPriceState: false});
                } else {
                    Animated.timing(                    
                        this.state.ticketPriceOpacity,
                        {
                        toValue: 1,
                        duration: 300,
                        }
                    ).start();  
                    this.setState({ticketPriceState: true});
                }

            },
            onDescriptionTextChange: "",
            buttonPressState: false,
            buttonColor: ['#3C3C3C', '#303030'],
            latitude: null,
            longitude: null,
            error: null
        }
    }

    

    async componentDidMount() {
        Permissions.askAsync(Permissions.LOCATION);
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

    _onPressButton() {
        if (this.state.buttonPressState) {
            this.setState({
                buttonPressState: false,
                buttonColor: ['#E04040', '#962D2D']
            });
        } else {
            this.setState({
                buttonPressState: true,
                buttonColor: ['#3C3C3C', '#303030']
            });
        }
    }
    

    render() {

        const sliderNumber = (this.state.silderValue - 16) * (SCREEN_WIDTH / 50);

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#272727'}}>
                {/* StatusBar light-content */}
                <StatusBar barStyle="light-content" />
                <View style={{marginTop: 16, marginBottom: 0, marginLeft: 16, marginRight: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    {
                    this.state.fontLoaded ? (
                    <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 32 }}>
                        create Event
                    </Text>
                    ) : null
                    }
                </View>
                <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'}>
                    <View style={{ flex: 1, marginLeft: 16, marginRight: 16, justifyContent: 'space-around' }}>

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

                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#F4F4F4' }}>
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
                            <View style={{ marginLeft: 8 }}>
                                <TouchableWithoutFeedback onPress={this._onPressButton.bind(this)}>
                                    <LinearGradient colors={this.state.buttonColor} start={[0, 0]} end={[1, 0.1]} style={{backgroundColor: '#333', width: 55, height: 55, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                                        <Ionicons name={'ios-search'} size={28} color={'#F4F4F4'} />
                                    </LinearGradient>
                                </TouchableWithoutFeedback>
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
                                maxLength = {15}
                                placeholder={'Category'}
                            />
                            ) : null
                            }
                        </View>

                        <View style={{ flexDirection: 'row'}}>
                            <Animated.View style={{borderBottomWidth: 1, borderBottomColor: '#F4F4F4', flex: 1, opacity: this.state.ticketPriceOpacity}}>
                            {
                            this.state.fontLoaded ? (
                            <TextInput
                                keyboardType={'decimal-pad'}
                                style={{color: '#F4F4F4', fontFamily: 'MoL', fontSize: 18, paddingLeft: 1, paddingBottom: 4 }}
                                placeholderTextColor={'rgba(244, 244, 244, .7)'}
                                editable = {this.state.ticketPriceState}
                                maxLength = {6}
                                placeholder={'Ticket Price'}
                            />
                            ) : null
                            }
                            </Animated.View>
                            <View style={{marginLeft: 8}}>
                                <Switch onValueChange={this.state.onTicketPriceOpacityChange} value={this.state.ticketPriceState}></Switch>
                            </View>
                        </View>

                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#F4F4F4', flexDirection: 'row' }}>
                            <View style={{flex: 1}}>
                            {
                            this.state.fontLoaded ? (
                            <TextInput
                                keyboardType={'default'}
                                style={{color: '#F4F4F4', fontFamily: 'MoL', fontSize: 18, paddingLeft: 1, paddingBottom: 4 }}
                                placeholderTextColor={'rgba(244, 244, 244, .7)'}
                                editable = {true}
                                maxLength = {100}
                                placeholder={'Description'}
                                multiline={true}
                                onChangeText={ (value) => this.setState({ onDescriptionTextChange: value }) }
                            />
                            ) : null
                            }
                            </View>
                            <View style={{flexDirection: 'row', opacity: .5, marginLeft: 8}}>
                            {
                            this.state.fontLoaded ? (
                            <Animated.Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 11 }}>
                                {this.state.onDescriptionTextChange.length}
                            </Animated.Text>
                            ) : null
                            }
                            {
                            this.state.fontLoaded ? (
                            <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 11 }}>
                                / 100
                            </Text>
                            ) : null
                            }
                            </View>
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
                                <Slider value={18} thumbTintColor={'#f4f4f4'} minimumTrackTintColor={'#CF3B3B'} maximumTrackTintColor={'#F4F4F4'} onValueChange={this.change.bind(this)} minimumValue={16} maximumValue={22}></Slider>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 10}}></View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

export default CreateEventPage
