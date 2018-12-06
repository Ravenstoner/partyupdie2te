import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import ProfilePageMenu from './Pages/ProfilePageMenu';
import ProfilePage from './Pages/ProfilePage';
import ProfilePartyHistory from './Pages/ProfilePartyHistory';
import TestPage from './Pages/testPage';
import CreateEventPage from './Pages/CreateEventPage';
import IndexPage from './Pages/indexPage';
import RegisterPage from './Pages/registerPage';

const RootStack = createStackNavigator(
    {
      ProfilePageMenu: ProfilePageMenu,
      ProfilePage: ProfilePage,
      ProfilePartyHistory: ProfilePartyHistory,
      TestPage: TestPage,
      CreateEventPage: CreateEventPage,
      IndexPage: IndexPage,
      RegisterPage: RegisterPage,
    },
    {
      initialRouteName: "IndexPage"
    }
  );

export default createAppContainer(RootStack);
  
  
  