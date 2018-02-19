import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "../Login/index.js";
import ProfileScreen from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
import Wallet from "../wallet/index";
import Promo from "../Promotion/index";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen: MainScreenNavigator },
    ProfileScreen: { screen: ProfileScreen },
    Wallet:{screen:Wallet},
    Promo:{screen:Promo}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
