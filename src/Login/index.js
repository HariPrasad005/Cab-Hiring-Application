import React, { Component } from "react";
import Login from "./login.js";
import Signup from "./signup.js";
import { TabNavigator } from "react-navigation";
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";
export default (MainScreenNavigator = TabNavigator(
  {
    Login: { screen: props => <Login {...props} /> },
    Signup: { screen: props => <Signup {...props} /> },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Login")}
            >
              <Icon name="log-out" />
              <Text>Login</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Icon name="briefcase" />
              <Text>Signup</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
