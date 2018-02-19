import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { NavigationActions } from "react-navigation";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";
import HomeScreen from "../HomeScreen";

export default class Signup extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Signup</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Password</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Mobile No</Label>
            <Input />
          </Item>
          <Button
            rounded
            success
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={() => {
              const navigationAction = NavigationActions.navigate({
                routeName: "ProfileScreen", // <==== this is Profile tabNavigator
                action: NavigationActions.navigate({
                  routeName: "Profile", // <===== this is defaultScreen for Porfile
                  params: { name: "JADE" }
                })
              });
              this.props.navigation.dispatch(navigationAction);
            }}
          >
            <Text>Signup</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
