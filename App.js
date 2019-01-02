import React from "react";
import { View, Text, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from "react-navigation";

import ProfilePage from './Pages/ProfilePage';
import CreateEventPage from './Pages/CreateEventPage';
import SearchPage from './Pages/searchPage';
import ChatPage from './Pages/chatPage';
import FeedPage from './Pages/feedPage';

const Tab = createBottomTabNavigator(
  {
    FeedPage: FeedPage,
    SearchPage: SearchPage,
    CreateEventPage: CreateEventPage,
    ChatPage: ChatPage,
    ProfilePage: ProfilePage
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'SearchPage') {
          iconName = `ios-search`;
        } else if (routeName === 'CreateEventPage') {
          iconName = `ios-add${!focused ? '' : '-circle'}`;
        } else if (routeName === 'ProfilePage') {
          iconName = `ios-person`;
        } else if (routeName === 'ChatPage') {
          iconName = `ios-mail`;
        } else if (routeName === 'FeedPage') {
          iconName = `ios-home`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#F4F4F4',
      style: {
        backgroundColor: '#2F2F2F',
      },
      activeBackgroundColor: '#CF3B3B',
      showLabel: false,
      showIcon: true
    }
  }
);

export default createAppContainer(Tab);
  
  
  