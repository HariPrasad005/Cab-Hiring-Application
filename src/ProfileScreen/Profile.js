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
  H1,
  Item,
  Label,
  Input,
  Thumbnail
} from "native-base";

import { StackNavigator } from "react-navigation";




export default class Profile extends React.Component {
  componentDidMount() {
    if (this.props.navigation.state.params !== undefined) {
      Alert.alert("USER found", this.props.navigation.state.params.name);
    }
  }
  render() {
    return (
      <Container>
        <Content padder>
           <Thumbnail style={{ marginLeft: 135 }} large source={{uri: 'http://godofindia.com/wp-content/uploads/2017/05/rajinikanth.jpg'}}
            />
            <Text>Username:</Text>
            <Item floatingLabel style={{ marginTop: 5 }}>
          <Input
             placeholder="John" 
             onChangeText={(Username)=>this.setState({Username})} />
          </Item>
          <Text>password:</Text>
          <Item floatingLabel style={{ marginTop: 5 }}>
            <Input secureTextEntry={true} placeholder="XXXXXXX"
            onChangeText={(password)=>this.setState({password})} />
          </Item>
          <Text>Mobile No:</Text>
            <Item floatingLabel style={{ marginTop: 5 }}>
          <Input
             placeholder="936613925" 
             onChangeText={(Username)=>this.setState({Username})} />
          </Item>
          <Text>Email</Text>
          <Item floatingLabel style={{ marginTop: 5 }}>
            <Input secureTextEntry={true} placeholder="abc@gmail.com"
            onChangeText={(password)=>this.setState({password})} />
          </Item>
          
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            
          >
            <Text>Update</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
Profile.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};
