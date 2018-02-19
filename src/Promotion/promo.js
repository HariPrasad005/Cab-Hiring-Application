import React from "react";
import { AppRegistry, Alert } from "react-native";

import {
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
  Button,
  H1
} from "native-base";

import { StackNavigator } from "react-navigation";


export default class Promo extends React.Component {

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              
              <Text>Your Promo Codes</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("EditScreenOne")}
          >
            <Text>Get Your Coupans</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
Promo.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Promo Code</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};
