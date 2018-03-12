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
import * as firebase from 'firebase';




export default class Signup extends React.Component {

  constructor(props){
    super(props)
    this.state=({
      email:'',
      password:'',
      Username:'',
      MobileNo:''
    })
  }



  SignupUser = (email,password,Username,MobileNo)=>{
  try{
     if(this.state.password.length<6){
      alert("Please enter atleast 6 characters")
      return; 
     }
     firebase.auth().createUserWithEmailAndPassword(email,password)
     firebase.database().ref('Customer_Details/001').set(
    {
      Username:'hi',
      MobileNo:'9629074887'
    }
  )
     alert("You Have Successfully Signed Up!!")
     
  }
  catch(error){
    console.log(error.toString())
  }
  }
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
            <Input 
            onChangeText={(Username)=>this.setState({Username})} />
          </Item>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Password</Label>
            <Input secureTextEntry={true} 
            onChangeText={(password)=>this.setState({password})} />
          </Item>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Email</Label>
            <Input autoCapitalize="none" onChangeText={(email)=>this.setState({email})}/>
          </Item>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Mobile No</Label>
            <Input
            onChangeText={(MobileNo)=>this.setState({MobileNo})} />
          </Item>
          <Button
            rounded
            success
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={() =>this.SignupUser(this.state.email,this.state.password,this.state.Username,this.state.MobileNo)}
          >
            <Text>Signup</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
