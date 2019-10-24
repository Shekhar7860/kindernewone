import React, { Component} from 'react'
import {View, Text, Image,TextInput,  TouchableOpacity, FlatList} from 'react-native'
import styles from "../styles/styles";
import {  Card, Divider, SearchBar, List, ListItem  } from 'react-native-elements';
import MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import Service from "../services/Service";
export default class Home extends Component {

  constructor (props) {
    super (props)
    this.state = {
      listView : true,
      mapView : false, 
      longitude : "", 
      latitude : "",
      places : [1, 2, 3]
    }
    service = new Service()
  }
    goToPage = (page) => {
        this.props.navigation.navigate(page)
    }

    setView = (val) => {
      if(val == "list" ) {
        this.setState({mapView: false, listView: true}) 
      }else{
        this.setState({mapView: true, listView: false}) 
        }
      }
    componentDidMount = () => {
      console.log('im working')
     // Geolocation.requestAuthorization();
      this.getProfiles()
      // Geolocation.getCurrentPosition(info => this.sendLocation(info));
      Geolocation.getCurrentPosition(
        (position) => {
          console.log('Position -> ',position);
          this.setState({latitude : position.coords.latitude, longitude : position.coords.longitude})
        },
        (error) => console.log(error, 'error')
        
    );
    }
    getCategoriesPlaces = () => {
      service.getCategories().then(res => {
        console.log("myres", res);
       
      });
    }
    getProfiles = () => {
      service.getProfiles().then(res => {
        console.log("reslocal", res);
       
      });
    }
   
   
    
render () { 
return (<View style={styles.container}>
     <SearchBar
          placeholder="Search Products..."
          lightTheme
          round
          
          autoCorrect={false}
          
        />
         <View style={{backgroundColor:"white" ,width:'100%',height:50,marginLeft:0,flexDirection:"row",justifyContent: "center",alignItems: "center"}}>
<TouchableOpacity onPress={this.setView.bind(this, 'list')} style={{backgroundColor:this.state.listView == true ? "#e84393" : "white",width:"45%",height:48,justifyContent:"center",alignItems:"center",marginTop:2,  borderWidth:1}}>
<View>
<Text style={{color: this.state.listView == true ? "white" : "black" }}>ListView</Text>
</View>
</TouchableOpacity>
<View style={{width:'5%'}}></View>
<TouchableOpacity  onPress={this.setView.bind(this, 'map')} style={{backgroundColor:this.state.mapView == true ? "#e84393" : "white",width:"45%",height:48,justifyContent:"center",alignItems:"center",marginTop:2,  borderWidth:1}}>
<Text style={{color: this.state.mapView == true ? "white" : "black"}}>MapView</Text>
</TouchableOpacity>

</View>
{this.state.listView ?  <View style={{marginTop:10}}><FlatList
  data={this.state.places}
 // refreshing={this.state.refreshing}
 // onRefresh={this.handleRefresh.bind(this)}
 // ListHeaderComponent={this.renderHeader}
  
  // onRefresh={this.onRefresh}  
  // refreshing={this.state.refreshing}  
  // onEndReached={this.loadMore}  

  renderItem={({item}) =>
  <View><View style={styles.row}>
     <TouchableOpacity style={styles.imageDimension}>
     <Image  style={styles.imageWidthList} source={require('../images/pro.jpg')} ></Image>
     </TouchableOpacity>
     <View style={styles.sectionDimension}><Text>Name</Text><Text style={styles.textWidth}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis nato</Text></View></View></View>
  
  }
  keyExtractor={item => item.email}
/> 
</View>: <MapView
  style={{  height: 400,
    width: 400}}
    zoomEnabled={true}
initialRegion={{
  latitude:this.state.latitude,
  longitude:this.state.longitude,
  latitudeDelta: 1,
  longitudeDelta: 1,
}}
/>}
    
      
    </View>)} 
      
}