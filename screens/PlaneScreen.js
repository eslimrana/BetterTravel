import { StyleSheet, Text, View,ScrollView,FlatList, TouchableOpacity, Linking } from 'react-native'
import {React, useState,useEffect} from 'react'
import {auth} from '../firebase';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { SearchBar } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { async } from '@firebase/util';

const PlaneScreen = () => {

  const [dataSource, setDataSource] = useState({});
  const [text, setText] = useState('');
 
  const url1= "https://www.skyscanner.com.tr/";
  //const url1= `https://www.skyscanner.com.tr/tasima/ucak-bileti/ista/${city}/220829/220905/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27546164&inboundaltsenabled=false&infants=0&originentityid=27542903&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1`;


  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if(isSupported) {
      await Linking.openURL(url);
    }
    else{
      alert('cant open this website')
    }
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dd1beb888amshfe5e0d6fbe177d5p1008d1jsnfaecc4fcba2f',
      'X-RapidAPI-Host': 'adsbx-flight-sim-traffic.p.rapidapi.com'
    }
  };
  

  let params2=new URLSearchParams(
    {
      access_key:'bce085a738ab7505d12205cd62532f27',
      query : text,
      limit:1
    }
  )
  const alter =()=>{
    fetch(`http://api.positionstack.com/v1/forward?${params2}`)
    .then(response => response.json())
    .then((responseJson) => {

      var lon=responseJson.data[0].longitude
      var lat=responseJson.data[0].latitude;
      
      fetch(`https://adsbx-flight-sim-traffic.p.rapidapi.com/api/aircraft/json/lat/${lat}/lon/${lon}/dist/25/`, options)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('looooook')
        console.log(responseJson);
        if(responseJson.ac){
        setDataSource(responseJson.ac[responseJson.ac.length-1]);}
        else{
          setDataSource({
            from:"a route doesnt exist",
            to:"a route doesnt exist"
          })
        }
        
      })
      .catch((error) => {
        console.error(error);
      });
    })
    .catch(err => console.error(err));
  }
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of 10 real time flights</Text>
      <View style={styles.list_container}>
      <TextInput
      onChangeText={newText => setText(newText)}
      ></TextInput>
      <TouchableOpacity onPress={alter}><Text>press here</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => {
          openUrl(url1)
        }}><Text style={styles.itemStyle}>
        {dataSource.from}
        {' => '}
        {dataSource.to}
      </Text></TouchableOpacity>
      </View>
    </View>
  )
}
export default PlaneScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  list_container:{
    margin: "auto",
  },
  title:{
    fontFamily:'sans-serif',
    alignSelf:"center",
    fontSize:26,
    margin:15,
    fontWeight:"bold"
  },
   itemStyle: {
    padding: 10,
  },
});