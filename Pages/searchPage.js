import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, Dimensions, StatusBar, FlatList, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient, Font } from 'expo'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import EventPost from '../Components/EventPost'
import EventPage from '../Pages/EventPage'

import TextInputUP from '../Components/TextInputUP'

export class searchPage extends Component {

    // hide React-Navigation-Bar
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            fontLoaded: false,
            searchIcon: true,
            refreshing: false,
            data: []
        }
    }

    async search(text2) {
        this.setState({ refreshing: true });
        try {
            await fetch('https://jsonplaceholder.typicode.com/users?username=' + text2 + '')
                .then(response => response.json())
                .then(data => this.setState({ data }));
                console.log("Press");
                console.log(text2);
        }
        catch(e) {
            console.log(e)
        }  
        this.setState({ refreshing: false });
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
        if (this.state.searchIcon) {
            this.refs.search.focus();
            this.setState({searchIcon: false});
        } else {
            Keyboard.dismiss();
            this.setState({searchIcon: true});
        }
    }

  render() {
    return (
        <View style={{backgroundColor: '#272727', flex: 1}}>
            {/* StatusBar light-content */}
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{flex: 1}}>
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
                                onChangeText={(text) => this.search(text)}
                                ref="search"
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
                {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Ionicons name={'ios-search'} size={128} color={'#F4F4F4'} />
                    { this.state.fontLoaded ? ( <Text style={{ fontFamily: 'MoL', color: '#f4f4f4', fontSize: 18 }}>Search for an Event</Text> ) : null }
                </View>
                <View style={{height: 50}}></View> */}
                <FlatList
                data={this.state.data}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                <View>
                    <EventPost id={item.id} Location={'EventPage'} navigation={this.props.navigation} Host={item.name} Image={require('../assets/202.jpg')} Headline={item.username} Likes={1.234} Comments={45} JoinState={true} Text={item.website} TicketPrice={'7,99'} Visitors={1540} MinAge={18}></EventPost>
                </View>
                }
                keyExtractor={item => item.name}
                refreshing={this.state.refreshing}
                />
            </SafeAreaView>
        </View>
    )
  }
}

const StackNavigator = createStackNavigator({
    Home: searchPage,
    EventPage: EventPage
});

export default createAppContainer(StackNavigator);
