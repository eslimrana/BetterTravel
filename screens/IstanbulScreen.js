import { StyleSheet, Text, View,ScrollView,Image, TouchableOpacity } from 'react-native'
import {React, useState} from 'react'
import {auth} from '../firebase';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import {LinearGradient} from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';

const IstanbulScreen = () => {
  const navigation=useNavigation();
 
  return (
    <View style={styles.container}><ScrollView style={styles.scroll}>
      <View style={styles.header}>
      <View style={styles.imgAndText}>
            <Image style={styles.img2} source={require('../assets/ist.jpg')}>

            </Image>
            <Text style={{marginLeft:13}}>
                  <Text style={styles.txt2}>
                    İstanbul!{"\n"}
                  </Text>
                  <Text style={styles.txt3}>
                     Travel to one of the {"\n"}most beautiful and {"\n"}historical cities in {"\n"}the world
                  </Text>
                </Text>
          </View>
      </View>
      <View>
        <Text style={styles.title}>Places To See</Text>
        <ScrollView 
          style={{flex:1}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}

          >
                <View style={[styles.standard2,styles.one]}>
                <View style={styles.imgAndText}>
                  <Image style={styles.img3} source={require('../assets/dolmabahce.jpg')}>

                  </Image>
                <Text style={{marginLeft:13}}>
                  <Text style={styles.txt2}>
                    Dolmabahce Palace!{"\n"}
                  </Text>
                  <Text style={styles.txtnew}>
                    Served as the main {"\n"}administrative center {"\n"}of the Ottoman Empire {"\n"}from 1856 to 1887 and {"\n"}from 1909 to 1922.
                  </Text>
                </Text>
                </View>
                  
                
              </View>
              


        <View style={styles.standard2}>
          <View style={styles.imgAndText}>
            <Image style={styles.img2} source={require('../assets/taksim.jpg')}>

            </Image>
            <Text style={{marginLeft:13}}>
                  <Text style={styles.txt2}>
                    Taksim Square!{"\n"}
                  </Text>
                  <Text style={styles.txtnew}>
                  is a major tourist and {"\n"}leisure district famed for {"\n"}its restaurants, shops, and {"\n"}hotels. It is considered the {"\n"}heart of modern Istanbul,
                  </Text>
                </Text>
          </View>
          
        </View>

        <View style={styles.standard2}>
          <View style={styles.imgAndText}>
            <Image style={styles.img2} source={require('../assets/hagia_sophia.jpg')}>

            </Image>
            <Text style={{marginLeft:13}}>
                  <Text style={styles.txt2}>
                    Hagia Sophia!{"\n"}
                  </Text>
                  <Text style={styles.txtnew}>
                  Hagia Sophia, whose {"\n"}name means “holy wis-{"\n"}dom,” is a domed mon-{"\n"}ument built as a cathedral{"\n"} in Constantinople
                  </Text>
                </Text>
          </View>
          
        </View>

        <View style={styles.standard2}>
          <View style={styles.imgAndText}>
            <Image style={styles.img2} source={require('../assets/galata-tower.jpg')}>

            </Image>
            <Text style={{marginLeft:13}}>
                  <Text style={styles.txt2}>
                    Galata Tower!{"\n"}
                  </Text>
                  <Text style={styles.txtnew}>
                    Built as a watchtower {"\n"}at the highest point of {"\n"}the Walls of Galata. The {"\n"}tower is now an exhibition {"\n"}space and museum
                  </Text>
                </Text>
          </View>
          
        </View>

          </ScrollView>

          <Text style={styles.title}>Registered Clinics</Text>

          <ScrollView 
          style={{flex:1}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}

          >
                <View style={[styles.standard2,styles.one]}>
                <View style={styles.imgAndText}>
                  <Image style={styles.img3} source={require('../assets/dolmabahce.png')}>

                  </Image>
                <Text style={{marginLeft:13}}>
                  <Text style={styles.txt2}>
                    Get to know Turkey!{"\n"}
                  </Text>
                  <Text style={styles.txt3}>
                    Find out which city{"\n"}you want to {"\n"}accomodate during {"\n"}your trip
                  </Text>
                </Text>
                </View>
                  
                
              </View>

          </ScrollView>

          <Text style={styles.title}>Registered Hotels</Text>
          <ScrollView 
          style={{flex:1}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}

          >
                <View style={[styles.standard2,styles.one]}>
                <View style={styles.imgAndText}>
                  <Image style={styles.img3} source={require('../assets/dolmabahce.png')}>

                  </Image>
                <Text style={{marginLeft:13}}>
                  <Text style={styles.txt2}>
                    Get to know Turkey!{"\n"}
                  </Text>
                  <Text style={styles.txt3}>
                    Find out which city{"\n"}you want to {"\n"}accomodate during {"\n"}your trip
                  </Text>
                </Text>
                </View>
                  
                
              </View>

          </ScrollView>
      </View>

      
  </ScrollView>
 </View>
  )
}

export default IstanbulScreen

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
  },
  imgAndText:{
    flexDirection:"row",
    marginTop:30,
    marginLeft:20,
  },
  txt2:{
    marginLeft:15,
    fontSize:15,
    fontWeight:'700',
    color:'#5B555C',
    alignSelf:"center"
  },
  img2:{
    width:"50%",
    height:123,
    borderRadius:10
  },
  txt3:{
    marginLeft:15,
    fontSize:15,
    fontWeight:'400',
    color:'#5B555C',
    alignSelf:"center",
    lineHeight:23
  },
  header:{
    backgroundColor:'white',
    width:"100%",
    height:190,
    alignItems:"center",
    //justifyContent:'center',
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40
  },
  scroll:{
    width:"100%",
  },
  title:{
    //alignSelf:"center",
    fontSize:20,
    fontWeight:"bold",
    marginTop:20,
    marginLeft:25,
  },
  container:{
    alignItems:"center",
    flex:1,
    width:'100%',
  },
  standard2:{
    backgroundColor:"white",
    width:370,
    marginTop:10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation:5,
    shadowRadius: 5,
    marginBottom:15,
    height:185,
    flex:1,
    //alignSelf:"center",
    marginRight:10,
    borderRadius:20
  
  },
  img2:{
    width:"50%",
    height:123,
    borderRadius:10
  },
  img3:{
    width:"50%",
    height:123,
    borderRadius:10
  },
  one:{
    marginLeft:10
  },
  txtnew:
  {
    marginLeft:15,
    fontSize:12,
    fontWeight:'400',
    color:'#5B555C',
    alignSelf:"center",
    lineHeight:20
  }
})