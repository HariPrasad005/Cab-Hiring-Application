import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Picker, Button, Text } from "native-base";
import Expo from "expo";
import HomeScreen from "./src/HomeScreen/index.js";
import * as firebase from 'firebase';
export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    const firebaseconfig = {
      apiKey: "AIzaSyALkjwS1gJdKclMqnkXX4RjGbiAEg6-aBY",
      authDomain: "cab-hiring-application.firebaseapp.com",
      databaseURL: "https://cab-hiring-application.firebaseio.com",
      projectId: "cab-hiring-application",
      storageBucket: "cab-hiring-application.appspot.com",
      messagingSenderId: "1042887327066"
    };
    firebase.initializeApp(firebaseconfig);

    
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <HomeScreen />;
  }
}
