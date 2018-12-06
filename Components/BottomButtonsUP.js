import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { Font } from 'expo'

export default class BottomButtonsUP extends Component {

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
      <View style={{ height: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(this.props.RLocation)}>
            <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                <SvgUri width="26" height="26" source={require('../assets/ios_arrow_back.svg')} />
                { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 16, marginLeft: 4 }}>{this.props.textLeft}</Text> ) : null }
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(this.props.LLocation)}>
            <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginRight: 8 }}>
                { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 16, marginRight: 4 }}>{this.props.textRight}</Text> ) : null }
                <SvgUri width="26" height="26" source={require('../assets/ios_arrow_forward.svg')} />
            </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
