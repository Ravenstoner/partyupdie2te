import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import ProfilePageMenu from './Pages/ProfilePageMenu';
import ProfilePage from './Pages/ProfilePage';
import ProfilePartyHistory from './Pages/ProfilePartyHistory';

const RootStack = createStackNavigator(
    {
      ProfilePageMenu: ProfilePageMenu,
      ProfilePage: ProfilePage,
      ProfilePartyHistory: ProfilePartyHistory
    },
    {
      initialRouteName: "ProfilePage"
    }
  );

export default createAppContainer(RootStack);
  
  
  