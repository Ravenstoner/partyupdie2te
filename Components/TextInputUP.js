import React, { Component } from 'react'
import { Text, View, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient, Font } from 'expo'

export default class TextInputUP extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fontLoaded: false,
            searchIcon: true
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

    _onPressCloseIcon = () => {
        Keyboard.dismiss();
        this.setState({searchIcon: true});
    }

  render() {

    switch (this.props.type) {
        case 'normal':
            return (
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#F4F4F4'}}>
                    {
                    this.state.fontLoaded ? (
                    <TextInput 
                        keyboardType={this.props.keyboardType}
                        style={{color: '#F4F4F4', fontFamily: 'MoL', fontSize: 18, paddingLeft: 4, paddingBottom: 4 }}
                        placeholderTextColor={'rgba(244, 244, 244, .7)'}
                        editable = {true}
                        maxLength = {this.props.maxLength}
                        placeholder={this.props.placeholder}
                        textContentType={this.props.textContentType}
                        keyboardAppearance={this.props.keyboardAppearance}
                        secureTextEntry={this.props.secureTextEntry}
                        selectionColor={'#CF3B3B'}
                    />
                    ) : null
                    }
                </View>
            )
            break;

        case 'search':
            return (
                <View style={{padding: 16, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#F4F4F4'}}>
                            {
                            this.state.fontLoaded ? (
                            <TextInput 
                                keyboardType={'default'}
                                style={{color: '#F4F4F4', fontFamily: 'MoL', fontSize: 18, paddingLeft: 4, paddingBottom: 4 }}
                                placeholderTextColor={'rgba(244, 244, 244, .7)'}
                                editable = {true}
                                maxLength = {20}
                                placeholder={'search'}
                                textContentType={'none'}
                                keyboardAppearance={'dark'}
                                secureTextEntry={false}
                                selectionColor={'#CF3B3B'}
                                onFocus={() => this.setState({searchIcon: false})}
                                returnKeyType={'search'}
                                onSubmitEditing={() => this.setState({searchIcon: true})}
                            />
                            ) : null
                            }
                        </View>
                    </View>

                    <TouchableWithoutFeedback onPress={this._onPressCloseIcon.bind(TextInput)}>
                        <View style={{width: 35, alignItems: 'center', }}>
                            <Ionicons name={this.state.searchIcon ? 'ios-search' : 'ios-close'} size={30} color={'#F4F4F4'} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            )
            break;
    
        default:
            break;
    }

    
  }
}
