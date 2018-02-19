import React, { Component } from "react";
import Wallet from "./wallet.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator(
  {
    Wallet: { screen: Wallet }
  },
  {
    initialRouteName: "Wallet"
  }
));
