import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Home", "Login", "Profile","Wallet","Promo"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
        <Image
            square
            style={{
              height: 90,
              width: 150,
              position: "absolute",
              alignSelf: "center",
              top:20
              
            }}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAWaO4AUE0fAqWFZYO18q7h6fnaIKf9jcHA8CprRvY-yhlHMpIQ"
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
