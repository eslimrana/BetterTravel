import { StyleSheet, Text, View,ScrollView } from 'react-native'
import {React, useState} from 'react'
import {auth} from '../firebase';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

const Ankara = () => {
  const navigation=useNavigation();
  
  return (
    <View style={styles.container}>
        <ScrollView>
           
            <View>
            
            </View>
  
        </ScrollView>
  </View>
  )
}

export default Ankara

const styles = StyleSheet.create({

  footer_navigation:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    height:80,
    backgroundColor:'#fff',
    width:"100%"
  },
  icons:{
    marginLeft:10,
    marginRight:10,
    paddingLeft:15,
    paddingRight:15,
    paddingVertical:10
  },
  container:{
    alignItems:"center",
    flex:1,
    width:"100%"
  }
})