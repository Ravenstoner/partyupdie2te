import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import ProfilePageMenu from './Pages/ProfilePageMenu';
import ProfilePage from './Pages/ProfilePage';
import ProfilePartyHistory from './Pages/ProfilePartyHistory';
import TestPage from './Pages/testPage';
import CreateEventPage from './Pages/CreateEventPage';

const RootStack = createStackNavigator(
    {
      ProfilePageMenu: ProfilePageMenu,
      ProfilePage: ProfilePage,
      ProfilePartyHistory: ProfilePartyHistory,
      TestPage: TestPage,
      CreateEventPage: CreateEventPage
    },
    {
      initialRouteName: "CreateEventPage"
    }
  );

export default createAppContainer(RootStack);
  
  
  