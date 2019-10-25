import {StyleSheet, Platform} from 'react-native';
export default styles = StyleSheet.create({

  container: {
    flex: 1
  },
 
imageWidth :{
  width:'90%', height:'30%', alignSelf:'center', marginTop:20
},
imageWidthList :{
 
  width : 100,
  height : 100
},
textStyle : {
  marginTop:5,
  alignSelf : 'center'
},
textStyle2 : {
  marginTop:15,
  alignSelf : 'center'
}, 
splashTextFont: {
  textAlign: 'center', fontSize:50, alignSelf:'center', width:'100%', color:'red',
  fontFamily: 'Amiko'
},

welcomeTextStyle : {
  textAlign: 'center', 
  marginTop:10,
  color : '#ff5a66',
  fontSize:40,
  fontFamily: 'Amiko'
},
welcomeLoginText :{
  color:'white',
  
},
textWidth : {
  width: '85%'
},

row : {
  flexDirection : 'row',
},
imageDimension : {
width : '30%',
marginBottom : 20,
margin:10
},

pickerStyle:{  
  height: 50,  
  width: "80%",  
  color: '#344953',  
  justifyContent: 'center',  
},
starDimension : {
width:'30%'
},
sectionDimension : {
  width:'70%',
  margin:10
},
input : {
  marginTop:10,
  width:'60%',
  borderWidth:1,
  alignSelf:'center',
  height:40,
  borderRadius : 20,
  color:'black',
  marginBottom :10,
  padding:10
},
dropDown : {
  marginTop:0,
  width:'60%',
  alignSelf:'center',
  marginBottom :0,
  height:50
  
},
myStarStyle: {
  color: 'yellow',
  backgroundColor: 'transparent',
  textShadowColor: 'black',
  textShadowOffset: {width: 1, height: 1},
  textShadowRadius: 2
},
myEmptyStarStyle: {
  color: 'white',
},
textWhite:{
  color :"white"
},
buttonBackground:{
 marginTop:10,
 alignSelf:'center',
  backgroundColor:'#e84393',
  width:"60%",
  borderRadius:25,
  height:40,
  alignItems:'center',
  justifyContent:'center'
},
buttonBackgroundNext:{
  marginTop:160,
  alignSelf:'flex-end',
   backgroundColor:'#e84393',
   width:"20%",
   borderRadius:25,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   marginRight:10
 },
buttonBackgroundSignUp:{
  marginTop:30,
  borderWidth:1,
  alignSelf:'center',
   width:"60%",
   borderRadius:25,
   height:40,
   alignItems:'center',
   justifyContent:'center'
 },
 buttonBackgroundfb:{
  marginTop:30,
  borderWidth:1,
  alignSelf:'center',
  backgroundColor:'#70a1ff',
   width:"60%",
   borderRadius:25,
   height:40,
   alignItems:'center',
   justifyContent:'center'
 },
 buttonBackgroundgplus:{
  marginTop:30,
  borderWidth:1,
  backgroundColor:'#ff4757',
  alignSelf:'center',
   width:"60%",
   borderRadius:25,
   height:40,
   alignItems:'center',
   justifyContent:'center'
 }

  
      
          


    
  
  
  

  
})