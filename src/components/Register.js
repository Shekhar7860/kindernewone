import React, { Component} from 'react'
import {View, Text,TextInput, Image, TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
export default class Register extends Component {
     constructor (props) {
    super (props)
    this.state = {
      email : "",
      username : "",
      password : "",
      confirmPassword : ""
    }
  }
    goToPage = (page) => {
         if(this.state.email && this.state.password && this.state.username && this.state.confirmPassword)
      {
         this.props.navigation.navigate(page)
      }
      else
      {
        if(this.state.email == "" && this.state.password == "" &&  this.state.username == "" && this.state.confirmPassword == "") {
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
         if(this.state.username == "")
        {
            Alert.alert("please enter username")
        }
         if(this.state.confirmPassword == "")
        {
            Alert.alert("please enter all details")
        }
      }
        
    }
render () { 
return (<View>
      <Image  style={styles.imageWidth} source={require('../images/kinder.jpg')} ></Image>
    <View style={{marginTop:10}}>
    <TextInput style={styles.input} placeholder="Email"  placeholderTextColor = "black"></TextInput>
    <TextInput style={styles.input} placeholder="UserName"  placeholderTextColor = "black"></TextInput>
    <TextInput style={styles.input} placeholder="Password"  placeholderTextColor = "black" secureTextEntry={true}></TextInput>
    <TextInput style={styles.input} placeholder="Confirm Password"  placeholderTextColor = "black" secureTextEntry={true}></TextInput>
    <TouchableOpacity style={styles.buttonBackground}>
        <Text onPress={this.goToPage.bind(this, 'Select')} style={styles.welcomeLoginText}>SignUp</Text>
        </TouchableOpacity>
        
        </View></View>)} 
      
}