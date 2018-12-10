import React, { Component } from 'react'
import { Text, View, StatusBar, Image, SafeAreaView } from 'react-native'
import SvgUri from 'react-native-svg-uri'

import ButtonUP from '../Components/ButtonUP'

export class indexPage extends Component {

    // hide React-Navigation-Bar
    static navigationOptions = {
        header: null
    }

  render() {
    return (
        <View style={{ flex: 1 }}>
            {/* StatusBar light-content */}
            <StatusBar hidden={ true } />
            <Image style={{ flex: 1, width: undefined, height: undefined }} source={ require('../assets/startpagebackground1.png') } />
            <SafeAreaView style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SvgUri width="500" source={require('../assets/logo2.svg')} />
                </View>
                <View style={{ margin: 8 }}>
                    <ButtonUP type={1} navigation={this.props.navigation} Location={'RegisterPage'} gradientColor={['#E04040', '#962D2D']} text={'register'} ></ButtonUP>
                    <View style={{ height: 8  }}></View>
                    <ButtonUP type={1} navigation={this.props.navigation} Location={'LoginPage'} gradientColor={['#353535', '#292929']} text={'login'} ></ButtonUP>
                </View>
            </SafeAreaView>
        </View>
    )
  }
}

export default indexPage
