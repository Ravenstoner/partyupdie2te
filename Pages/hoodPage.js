import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, Dimensions, StatusBar } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { LinearGradient, Font } from 'expo'

import TextInputUP from '../Components/TextInputUP'
import ButtonUP from '../Components/ButtonUP'
import BottomButtonsUP from '../Components/BottomButtonsUP'


SCREEN_WIDTH = Dimensions.get('screen').width - 24;

export class hoodPage extends Component {

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
        <View style={{backgroundColor: '#272727', flex: 1}}>
            {/* StatusBar light-content */}
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{flex: 1}}>
                <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: 100 }}>
                { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 30 }}>where's your</Text> ) : null }
                { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 32 }}>HOOOOOOD?</Text> ) : null }
                </View>
                <View style={{ flex: 1, paddingLeft: 64, paddingRight: 64, justifyContent: 'space-around' }}>
                    <View style={{height: 100}}></View>
                    <View>
                        { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18, opacity: .8 }}>type in your</Text> ) : null }
                    </View>
                    <View>
                        <TextInputUP keyboardType={'default'} placeholder={'Location'} keyboardAppearance={'dark'}></TextInputUP>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18, opacity: .8 }}>or</Text> ) : null }
                    </View>
                    <View>
                        <ButtonUP type={2} navigation={this.props.navigation} icon={require('../assets/location.svg')} Location={'LoginPage'} gradientColor={['#E04040', '#962D2D']} text={'track Location'} ></ButtonUP>
                    </View>
                    <View style={{height: 120}}></View>

                </View>                
                <BottomButtonsUP navigation={this.props.navigation} RLocation={'IndexPage'} LLocation={'MoodPage'} textLeft={'back'} textRight={'next'}></BottomButtonsUP>
            </SafeAreaView>
        </View>
    )
  }
}

export default hoodPage
