import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableWithoutFeedback, Platform, StatusBar } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { Font } from 'expo';

export class ProfilePageMenu extends Component {

  state = {
    fontLoaded: false,
  };

  static navigationOptions = {
    title: 'Settings',
    headerStyle: {
      backgroundColor: '#222',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    headerTintColor: '#F4F4F4',
    headerTitleStyle: {
      fontWeight: 'bold',
    },    
  };

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
      {/* StatusBar light-content */}
      <StatusBar barStyle="light-content" />

        <View style={{flex: 1, paddingLeft: 32, paddingRight: 32, paddingTop: 16}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <SvgUri width="26" height="26" source={require('../assets/heart.svg')} />
            {
              this.state.fontLoaded ? (
              <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18, paddingLeft: 8 }}>
                  liked Posts
              </Text>
              ) : null
            }
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 16, paddingBottom: 16}}>
            <SvgUri width="26" height="26" source={require('../assets/history.svg')} />
            {
              this.state.fontLoaded ? (
              <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18, paddingLeft: 8 }}>
                  Party history
              </Text>
              ) : null
            }
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <SvgUri width="26" height="26" source={require('../assets/person.svg')} />
            {
              this.state.fontLoaded ? (
              <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18, paddingLeft: 8 }}>
                  Friends
              </Text>
              ) : null
            }
          </View>
        </View>

        <View style={{padding: 32}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SvgUri width="26" height="26" source={require('../assets/settings.svg')} />
              {
                this.state.fontLoaded ? (
                <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18, paddingLeft: 8 }}>
                    settings
                </Text>
                ) : null
              }
            </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default ProfilePageMenu
