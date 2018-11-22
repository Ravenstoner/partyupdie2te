import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { Font } from 'expo';

export class ProfilePageMenu extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    fontLoaded: false,
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
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ProfilePage')} >
            <View style={{position: 'absolute', top: 32, right: 16, zIndex: 100}}>
                <SvgUri style={{}} width="26" height="26" source={require('../assets/close.svg')} />
            </View>
        </TouchableWithoutFeedback>
        <View style={{alignItems: 'center', paddingTop: 8, paddingBottom: 8}}>
          {
            this.state.fontLoaded ? (
            <Text style={{ fontFamily: 'MoB', color: '#f4f4f4', fontSize: 24 }}>
                Johanna Doe
            </Text>
            ) : null
          }
        </View>
        <View style={{flex: 1, padding: 32}}>
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
