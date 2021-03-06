import React, { Component } from 'react'
import { Text, View, StatusBar, Image, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { LinearGradient, Font } from 'expo'

import TextInputUP from '../Components/TextInputUP'
import BottomButtonsUP from '../Components/BottomButtonsUP'

export class registerPage extends Component {

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
        <View style={{ flex: 1, backgroundColor: '#962D2D' }}>
            <LinearGradient style={{flex: 1}} colors={['#E04040', '#962D2D']} start={[0, 0]} end={[1, 1]}>
                {/* StatusBar light-content */}
                <StatusBar hidden={ true } />
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 70 }}>
                        { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 32 }}>create Account</Text> ) : null }
                    </View>
                    <View style={{ paddingLeft: 64, paddingRight: 64, flex: 1 }}>
                        <KeyboardAvoidingView style={{ flex: 2, justifyContent: 'space-around' }} behavior={'padding'} enabled keyboardVerticalOffset={90}>
                            <TextInputUP keyboardType={'default'} placeholder={'Displayname'} keyboardAppearance={'dark'} textContentType={'nickname'} maxLength={15}></TextInputUP>
                            <TextInputUP keyboardType={'email-address'} placeholder={'E-Mail'} keyboardAppearance={'dark'} textContentType={'emailAddress'}></TextInputUP>
                            <TextInputUP keyboardType={'default'} placeholder={'Password'} secureTextEntry={true} keyboardAppearance={'dark'} textContentType={'password'}></TextInputUP>
                            <TextInputUP keyboardType={'default'} placeholder={'Password'} secureTextEntry={true} keyboardAppearance={'dark'} textContentType={'password'}></TextInputUP>
                        </KeyboardAvoidingView>
                        <View style={{alignItems: 'center', flex: 1, justifyContent: 'space-around'}}>
                            { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18 }}>or</Text> ) : null }
                            <View style={{flexDirection: 'row', borderColor: '#F4F4F4', borderRadius: 100, borderWidth: 1, alignItems: 'center', justifyContent: 'center', padding: 14, width: '100%'}}>
                                <SvgUri width="26" height="26" source={require('../assets/google-brands.svg')} />
                                { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18, marginLeft: 8 }}>google und so</Text> ) : null }
                            </View>
                            <View style={{height: 10}}></View>
                        </View>
                    </View>
                    <View>
                        <BottomButtonsUP navigation={this.props.navigation} RLocation={'IndexPage'} LLocation={'MoodPage'} textLeft={'BACK'} textRight={'NEXT'}></BottomButtonsUP>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </View>
    )
  }
}

export default registerPage
