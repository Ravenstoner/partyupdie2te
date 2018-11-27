import React, { Component } from 'react'
import { Text, View, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { Font } from 'expo'

import SelectAge from '../Components/selectAge'

export class CreateEventPage extends Component {

// hide React-Navigation-Bar
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {
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
                <View style={{ flex: 1, marginLeft: 32, marginRight: 32, justifyContent: 'space-around' }}>
                    
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

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#F4F4F4'}}>
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

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{justifyContent: 'center', flex: 1}}>
                            {
                            this.state.fontLoaded ? (
                            <Text 
                                style={{color: '#F4F4F4', fontFamily: 'MoL', fontSize: 18 }}
                            >min. Age</Text>
                            ) : null
                            }
                        </View>
                        <View style={{alignItems: 'center', flex: 1}}>
                            <SelectAge></SelectAge>
                        </View>
                        <View style={{flex: 1}}></View>
                    </View>
                    
                </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

export default CreateEventPage
