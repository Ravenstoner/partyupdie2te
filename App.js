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
import LoginPage from './Pages/loginPage';
import MoodPage from './Pages/moodPage';
import HoodPage from './Pages/hoodPage';

const RootStack = createStackNavigator(
    {
      ProfilePageMenu: ProfilePageMenu,
      ProfilePage: ProfilePage,
      ProfilePartyHistory: ProfilePartyHistory,
      TestPage: TestPage,
      CreateEventPage: CreateEventPage,
      IndexPage: IndexPage,
      RegisterPage: RegisterPage,
      LoginPage: LoginPage,
      MoodPage: MoodPage,
      HoodPage: HoodPage
    },
    {
      initialRouteName: "HoodPage"
    }
  );

export default createAppContainer(RootStack);
  
  
  