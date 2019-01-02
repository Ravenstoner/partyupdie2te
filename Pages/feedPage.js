import React, { Component } from 'react'
import { Text, View, SafeAreaView, TextInput, FlatList, Animated, Dimensions, Switch, StatusBar, ScrollView, ListItem } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { Font } from 'expo'
import { LinearGradient, Location, Permissions } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geocoder from 'react-native-geocoder';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import EventPost from '../Components/EventPost'
import EventPage from './EventPage'

import ajax from '../FetchData'

SCREEN_HEIGHT = Dimensions.get('screen').height;
SCREEN_WIDTH = Dimensions.get('screen').width;

export class feedPage extends Component {

    // hide React-Navigation-Bar
    static navigationOptions = {
        title: 'Feed',
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
        header: null
    };

    constructor(props) {
        super(props)
        this.state = {
            fontLoaded: false,
            users: [
                {
                    "name": "Proxima Midnight",
                    "email": "proxima@appdividend.com"
                },
                {
                    "name": "Ebony Maw",
                    "email": "ebony@appdividend.com"
                },
                {
                    "name": "Black Dwarf",
                    "email": "dwarf@appdividend.com"
                },
                {
                    "name": "Mad Titan",
                    "email": "thanos@appdividend.com"
                },
                {
                    "name": "Supergiant",
                    "email": "supergiant@appdividend.com"
                },
                {
                    "name": "Loki",
                    "email": "loki@appdividend.com"
                },
                {
                    "name": "corvus",
                    "email": "corvus@appdividend.com"
                },
                {
                    "name": "Proxima Midnight",
                    "email": "proxima1@appdividend.com"
                },
                {
                    "name": "Ebony Maw",
                    "email": "ebony1@appdividend.com"
                },
                {
                    "name": "Black Dwarf",
                    "email": "dwarf1@appdividend.com"
                },
                {
                    "name": "Mad Titan",
                    "email": "thanos1@appdividend.com"
                },
                {
                    "name": "Supergiant",
                    "email": "supergiant1@appdividend.com"
                },
                {
                    "name": "Loki",
                    "email": "loki1@appdividend.com"
                },
                {
                    "name": "corvus",
                    "email": "corvus1@appdividend.com"
                }
            ]
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
            <View style={{flex: 1, backgroundColor: '#272727'}}>
                {/* StatusBar light-content */}
                <StatusBar barStyle="light-content" />
                <View style={{backgroundColor: '#2F2F2F'}}>
                    <SafeAreaView style={{alignItems: 'center', marginBottom: 16}}>
                        { this.state.fontLoaded ? (<Text style={{ fontFamily: 'MoEB', color: '#f4f4f4', fontSize: 24 }}>party</Text>) : null }
                    </SafeAreaView>
                </View>
                <SafeAreaView style={{flex: 1}}>
                <FlatList
                data={this.state.users}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                <View>
                    <EventPost Location={'EventPage'} navigation={this.props.navigation} Host={item.name} Image={require('../assets/202.jpg')} Headline={'Jägermeister'} Likes={1.234} Comments={45} JoinState={true} Text={item.email} TicketPrice={'7,99'} Visitors={1540} MinAge={18}></EventPost>
                </View>
                }
                keyExtractor={item => item.email}
                />
                </SafeAreaView>
            </View>
        )
    }
}

const StackNavigator = createStackNavigator({
    Home: feedPage,
    EventPage: EventPage
});

export default createAppContainer(StackNavigator);

//                         <EventPost Location={'EventPage'} navigation={this.props.navigation} Host={'bollwerk_graz'} Image={require('../assets/202.jpg')} Headline={'Jägermeister'} Likes={1.234} Comments={45} JoinState={true} Text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed eirmod tempor invidunt ut labore et. Sed diam nonumy eirmod tempor invidunt ut labore et.'} TicketPrice={'7,99'} Visitors={1540} MinAge={18}></EventPost>