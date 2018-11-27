import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import ProfilePageMenu from './Pages/ProfilePageMenu';
import ProfilePage from './Pages/ProfilePage';
import ProfilePartyHistory from './Pages/ProfilePartyHistory';
import TestPage from './Pages/testPage';

const RootStack = createStackNavigator(
    {
      ProfilePageMenu: ProfilePageMenu,
      ProfilePage: ProfilePage,
      ProfilePartyHistory: ProfilePartyHistory,
      TestPage: TestPage
    },
    {
      initialRouteName: "ProfilePage"
    }
  );

export default createAppContainer(RootStack);
  
  
  