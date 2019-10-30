import React, { Component} from 'react'
import {View, Text, Image,TextInput, Alert, TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import Service from "../services/Service";
import { LoginManager,   AccessToken } from 'react-native-fbsdk';
export default class Login extends Component {

     constructor (props) {
    super (props)
    this.state = {
      email : "",
      password : "",
      loading: false
    }
    service = new Service()
  }
  componentDidMount = () => {
    this.setState({loading : true})
    setTimeout (() => this.setState({loading : false }), 2000)
  }
    goToPage = (page) => {
      if(this.state.email && this.state.password)
      {
         this.props.navigation.navigate(page)
      }
      else
      {
        if(!this.state.email  && !this.state.password ) {
             Alert.alert("please enter email & password both")
        }
       else  if(!this.state.email )
        {
            Alert.alert("please enter email")
        }
         else if(!this.state.password )
        {
            Alert.alert("please enter password")
        }
      }
       
    }
    LoginFacebook = () => {
      // Alert.alert("Logging With Facebook")
      LoginManager.logInWithPermissions(["public_profile", "email"]).then(
        result => {
          console.log(result, 'res')
          if (result.isCancelled) {
            console.log("Login cancelled");
          } else {
            console.log(
              "Login success with permissions: " +
                result.grantedPermissions.toString()
            );
            AccessToken.getCurrentAccessToken().then(
              (data) => {
                    this.getUserProfile(data.accessToken);
            });
           
          }
        },
        error => {
          console.log("Login fail with error: " + error);
        }
      );
    }

    LoginGoogle = () => {
      Alert.alert("Logging With Google")
    }

    getUserProfile = (token) =>{ 
      fetch('https://graph.facebook.com/v2.9/me?fields=picture.width(720).height(720).as(picture_large),name,email,friends&access_token=' + token)
      .then((response) => response.json())
      .then((json) => {
        console.log(json, 'shjshhshs')
        // service.saveUserData('user', json);
        // this.props.navigation.navigate('Home')
      })
      .catch((err) => {
      //  alert(JSON.stringify(err))
      })
     
  }
render () { 
return (<View style={styles.container}>
    <Image  style={styles.imageWidth} source={require('../images/kinder.jpg')} ></Image>
   
    <TextInput value={this.state.email} onChangeText={(text)=>this.setState({ email:text})} style={styles.input} placeholder="Email"  placeholderTextColor = "black"></TextInput>
    <TextInput value={this.state.password} style={styles.input} onChangeText={(text)=>this.setState({ password:text})} placeholder="Password"  placeholderTextColor = "black" secureTextEntry={true}></TextInput>
     <TouchableOpacity style={styles.buttonBackground} onPress={this.goToPage.bind(this, 'Home')}>
        <Text  style={styles.welcomeLoginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle2}>OR</Text>
        <TouchableOpacity style={styles.buttonBackgroundfb}  onPress={this.LoginFacebook.bind(this)}>
        <Text style={styles.textWhite}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBackgroundgplus} onPress={this.LoginGoogle.bind(this)}>
        <Text style={styles.textWhite} >Google</Text>
        </TouchableOpacity>
        </View>)} 
      
}