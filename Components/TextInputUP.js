import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { LinearGradient, Font } from 'expo'

export default class TextInputUP extends Component {

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
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#F4F4F4'}}>
            {
            this.state.fontLoaded ? (
            <TextInput 
                keyboardType={this.props.keyboardType}
                style={{color: '#F4F4F4', fontFamily: 'MoL', fontSize: 18, paddingLeft: 1, paddingBottom: 4 }}
                placeholderTextColor={'rgba(244, 244, 244, .7)'}
                editable = {true}
                maxLength = {this.props.maxLength}
                placeholder={this.props.placeholder}
                textContentType={this.props.textContentType}
                keyboardAppearance={this.props.keyboardAppearance}
                secureTextEntry={this.props.secureTextEntry}
            />
            ) : null
            }
        </View>
    )
  }
}
