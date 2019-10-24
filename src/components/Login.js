import React, { Component} from 'react'
import {View, Text, Image,TextInput, Alert} from 'react-native'
import styles from "../styles/styles";

export default class Login extends Component {

     constructor (props) {
    super (props)
    this.state = {
      email : "",
      password : ""
    }
  }
    goToPage = (page) => {
      if(this.state.email && this.state.password)
      {
         this.props.navigation.navigate(page)
      }
      else
      {
        if(this.state.email == "" && this.state.password == "") {
             Alert.alert("please enter email & password both")
        }
        if(this.state.email == "")
        {
            Alert.alert("please enter email")
        }
         if(this.state.password == "")
        {
            Alert.alert("please enter password")
        }
      }
       
    }
render () { 
return (<View>
    <Image  style={styles.imageWidth} source={require('../images/kinder.jpg')} ></Image>
    <View style={{marginTop:10}}>
    <TextInput value={this.state.email} onChangeText={(text)=>this.setState({ email:text})} style={styles.input} placeholder="Email"  placeholderTextColor = "black"></TextInput>
    <TextInput value={this.state.password} style={styles.input} onChangeText={(text)=>this.setState({ email:text})} placeholder="Password"  placeholderTextColor = "black" secureTextEntry={true}></TextInput>
     <TouchableOpacity style={styles.buttonBackground}>
        <Text onPress={this.goToPage.bind(this, 'Home')} style={styles.welcomeLoginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle2}>OR</Text>
        <TouchableOpacity style={styles.buttonBackgroundfb}>
        <Text onPress={this.goToPage.bind(this, 'Register')}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBackgroundgplus}>
        <Text onPress={this.goToPage.bind(this, 'Register')}>Google</Text>
        </TouchableOpacity>
        </View></View>)} 
      
}