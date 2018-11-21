import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Navbar from './Components/navbarComp';
import PostComp from './Components/postComp';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#2f2f2f'}}>
        <ScrollView>
          <View style={{flex: 1, backgroundColor: 'yellow', backgroundColor: '#272727'}}>
            <PostComp postHeadline={'Jagdhütte'} pic={require('./assets/MoB4.jpg')} ></PostComp>
            <PostComp postHeadline={'Stroganoff best Vodi'} pic={require('./assets/MoB5.jpg')} ></PostComp>
            <PostComp postHeadline={'Jägermeister auf dem FQ18'} pic={require('./assets/MoB6.jpg')} ></PostComp>
          </View>
        </ScrollView>
        <Navbar></Navbar>
      </SafeAreaView>
    );
  }
}
