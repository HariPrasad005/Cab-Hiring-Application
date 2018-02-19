import React from "react";
import { StatusBar,Image } from "react-native";
import Signup from "../Login/signup.js";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";

export default class HomeScreen extends React.Component {
  render() {
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
            <Title>CALL CABS</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
          <CardItem cardBody>
              <Image source={{uri: 'http://www.topgear.com/india/images/stories/articles/512x288/2014Sep17005018.jpg'}} style={{height: 400, width: null, flex: 1}}/>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 25 }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text>Login In</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text>Sign up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
