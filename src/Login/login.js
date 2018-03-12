import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { NavigationActions } from "react-navigation";
import Profile from '../ProfileScreen/Profile';
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
import * as firebase from 'firebase';

export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state=({
      email:'',
      password:''
    })
  }

  LoginUser = (email,password)=>{
    try{
       firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
        alert("Hi "+email+" You have Successfully Logged In");
        return <Profile/>
       })
    }
    catch(error){
      console.log(error.toString())
    }
    }
  
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
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Email</Label>
            <Input autoCapitalize="none" 
            autoCorrect={false} 
            onChangeText={(email)=>this.setState({email})}
            />
            </Item>
            <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Password</Label>
            <Input secureTextEntry={true} 
            onChangeText={(password)=>this.setState({password})}
            />
            </Item>
          
          <Button
            rounded
            danger
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={() =>this.LoginUser(this.state.email,this.state.password)}
          >
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
