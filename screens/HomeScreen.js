import { StyleSheet, Text, View,ScrollView,Image, TouchableOpacity } from 'react-native'
import {React, useState} from 'react'
import {auth} from '../firebase';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import {LinearGradient} from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
const HomeScreen = () => {

  const[comment, setComment] = useState('')
  const [col, setCol] = useState('#2D809B');
  const [col2, setCol2] = useState('gray');
  const [col3, setCol3] = useState('gray');
  const [col4, setCol4] = useState('gray');
  const [col5, setCol5] = useState('gray');
  const navigation=useNavigation();
  const user=auth.currentUser
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.inner_container}>
        <Image
            style={styles.img}
            source={require('../assets/pos2.jpg')}/>
        <Text>{user.email}</Text>
        <View style={styles.standard}>
          <View style={styles.imgAndText}>
            <Image style={styles.img2} source={require('../assets/doctor_img.jpg')}>

            </Image>
          <Text style={styles.txt}>
              Find perfect clinic, {"\n"}hotel, and plane {"\n"}tickets for your trip!
          </Text>
          </View>
            <LinearGradient
            colors={['#184e77','#2D809B']} style={styles.buttonFirst}>
            <TouchableOpacity><Text style={styles.buttonText}>Get Started</Text></TouchableOpacity>
          </LinearGradient>
          
        </View>

        <ScrollView 
          style={{flex:1,marginTop:0,marginBottom:0,padding:0}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}

          >
                <View style={[styles.standard2,styles.one]}>
                <View style={styles.imgAndText}>
                  <Image style={styles.img3} source={require('../assets/tourists.png')}>

                  </Image>
                
                  <Text style={styles.txt2}>
                    What users say {"\n"}about HealthTour?{"\n"}
                  </Text>

                </View>
                  <LinearGradient
                  colors={['#184e77','#2D809B']} style={styles.button2}>
                  <TouchableOpacity style={styles.special}><Text style={styles.buttonText}>Explore</Text></TouchableOpacity>
                  <IonIcon color="white" style={{marginLeft:10,marginTop:2}}name="arrow-forward" size={30}/>
                </LinearGradient>
                
              </View>
              <View style={styles.standard2}>
          <View style={styles.imgAndText}>
            <Image style={styles.img2} source={require('../assets/woman.jpg')}>

            </Image>
          <Text style={styles.txt}>
              Find perfect clinic, {"\n"}hotel, and plane {"\n"}tickets for your trip!
          </Text>
          </View>
            <LinearGradient
            colors={['#184e77','#2D809B']} style={styles.button}>
            <TouchableOpacity><Text style={styles.buttonText}>Read more</Text></TouchableOpacity>
          </LinearGradient>
          
        </View>

        <View style={styles.standard2}>
          <View style={styles.imgAndText}>
            <Image style={styles.img2} source={require('../assets/man.jpg')}>

            </Image>
          <Text style={styles.txt}>
              Find perfect clinic, {"\n"}hotel, and plane {"\n"}tickets for your trip!
          </Text>
          </View>
            <LinearGradient
            colors={['#184e77','#2D809B']} style={styles.button}>
            <TouchableOpacity><Text style={styles.buttonText}>Read more</Text></TouchableOpacity>
          </LinearGradient>
          
        </View>


        <View style={styles.standard2}>
          <View style={styles.imgAndText}>
            <Image style={styles.img2} source={require('../assets/old.jpg')}>

            </Image>
          <Text style={styles.txt}>
              Find perfect clinic, {"\n"}hotel, and plane {"\n"}tickets for your trip!
          </Text>
          </View>
            <LinearGradient
            colors={['#184e77','#2D809B']} style={[styles.button]}>
            <TouchableOpacity><Text style={styles.buttonText}>Read more</Text></TouchableOpacity>
          </LinearGradient>
          
        </View>



          </ScrollView>



        <ScrollView 
          style={{flex:1}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}

          >
                <View style={[styles.standard2,styles.one]}>
                <View style={styles.imgAndText}>
                  <Image style={styles.img3} source={require('../assets/galata-tower.jpg')}>

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
                  <LinearGradient
                  colors={['#184e77','#2D809B']} style={styles.button2}>
                  <TouchableOpacity style={styles.special}><Text style={styles.buttonText}>Explore</Text></TouchableOpacity>
                  <IonIcon color="white" style={{marginLeft:10,marginTop:2}}name="arrow-forward" size={30}/>
                </LinearGradient>
                
              </View>
              <View style={styles.standard2}>
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
            <LinearGradient
            colors={['#184e77','#2D809B']} style={styles.button }>
            <TouchableOpacity onPress={()=>{navigation.navigate("İstanbul")}}><Text style={styles.buttonText}>Get Started</Text></TouchableOpacity>
          </LinearGradient>
          
        </View>

        <View style={styles.standard2}>
          <View style={styles.imgAndText}>
            <Image style={styles.img2} source={require('../assets/antalya.png')}>

            </Image>
            <Text style={{marginLeft:13}}>
                  <Text style={styles.txt2}>
                    Antalya!{"\n"}
                  </Text>
                  <Text style={styles.txt3}>
                    Enjoy your trip with {"\n"}the amazing Medit-{"\n"}erranean beaches {"\n"}and secret bays
                  </Text>
                </Text>
          </View>
            <LinearGradient
            colors={['#184e77','#2D809B']} style={styles.button} >
            <TouchableOpacity onPress={()=>{navigation.navigate("Antalya")}}><Text style={styles.buttonText}>Get Started</Text></TouchableOpacity>
          </LinearGradient>
          
        </View>

        
        <View style={styles.standard2}>
          <View style={styles.imgAndText}>
            <Image style={styles.img2} source={require('../assets/ankara.png')}>

            </Image>
            <Text style={{marginLeft:13}}>
                  <Text style={styles.txt2}>
                    Ankara!{"\n"}
                  </Text>
                  <Text style={styles.txt3}>
                    The capital offers {"\n"}you the most {"\n"}luxurious treatment {"\n"}experience
                  </Text>
                </Text>
          </View>
            <LinearGradient
            colors={['#184e77','#2D809B']} style={styles.button} >
            <TouchableOpacity onPress={()=>{navigation.navigate("Ankara")}}><Text style={styles.buttonText}>Get Started</Text></TouchableOpacity>
          </LinearGradient>
          
        </View>

          </ScrollView>
          <View style={styles.comment}>
            <Text style={styles.commentText}>We would be very happy to here about your comments and recommendations!</Text>
            <TextInput
            multiline
            label='Your comments and recommendations'
            mode='outlined'
            value={comment}
            onChangeText={text => setComment(text)}
            style={styles.cbox}
            //left={<TextInput.Icon name="email-outline" style={{marginTop:15}}/>}
            ></TextInput>
            <TouchableOpacity style={styles.cbutton}><Text style={styles.insideb}>Send</Text></TouchableOpacity>
          </View>
    </View>
  
  </ScrollView>
  <View style={styles.footer_navigation}>
  <IonIcon style={styles.icons} name="home" size={30} color={col} onPress={() => {setCol("#2D809B"); setCol2("gray"); setCol3("gray"); setCol4("gray");setCol5("gray")}}/>
  <IonIcon style={styles.icons} name="search" size={30} color={col2} onPress={() => {setCol("gray"); setCol2("#2D809B"); setCol3("gray"); setCol4("gray");setCol5("gray");navigation.navigate("clinic")}}/>
  <IonIcon style={styles.icons} name="star" size={30} color={col5} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("gray"); setCol4("gray");setCol5("#2D809B");navigation.navigate("hotel")}}/>
  <IonIcon style={styles.icons} name="earth" size={30} color={col3} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("#2D809B"); setCol4("gray");setCol5("gray");navigation.navigate("plane")}}/>
  <IonIcon style={styles.icons} name="person" size={30} color={col4} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("gray"); setCol4("#2D809B");setCol5("gray");navigation.navigate("profile")}}/>
</View></View>                                                                                                 
  )
}

export default HomeScreen

const styles = StyleSheet.create({
   
  scroll:{
    width:"100%",
  },
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
    width:'100%',
  },
  inner_container:{
    width:'100%',
    justifyContent:"center",
    alignItems:"center"
  },
  img:{
    width:"100%",
    height: 290,
    borderBottomLeftRadius:60,
    borderBottomRightRadius:60,
  },
  standard:{
    backgroundColor:"white",
    width:"90%",
    marginTop:70,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation:5,
    shadowRadius: 5,
    marginBottom:40,
    height:250,
    flex:1,
    alignSelf:"center",
    marginHorizontal:10,
  
  },
  standard2:{
    backgroundColor:"white",
    width:370,
    marginTop:0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation:5,
    shadowRadius: 5,
    marginBottom:40,
    height:250,
    flex:1,
    //alignSelf:"center",
    marginRight:10,
  
  },
  one:{
    marginLeft:20
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
  imgAndText:{
    flexDirection:"row",
    marginTop:30,
    marginLeft:20,
  },
  txt:{
    marginTop:10,
    marginLeft:15,
    fontSize:15,
    fontWeight:'500',
    color:'#5B555C',
    lineHeight:23
  },
  txt2:{
    marginLeft:15,
    fontSize:15,
    fontWeight:'700',
    color:'#5B555C',
    alignSelf:"center"
  },
  txt3:{
    marginLeft:15,
    fontSize:15,
    fontWeight:'400',
    color:'#5B555C',
    alignSelf:"center",
    lineHeight:23
  },
  button:{
    backgroundColor:'#0782F9',
    width:'85%',
    padding:15,
    borderRadius:10,
    alignItems:'center',
    marginTop:20,
    marginBottom:15,
    alignSelf:"center",
  },
  buttonFirst:{
    backgroundColor:'#0782F9',
    width:'85%',
    padding:15,
    borderRadius:10,
    alignItems:'center',
    marginTop:20,
    marginBottom:15,
    alignSelf:"center",
  },
  button2:{
    backgroundColor:'#0782F9',
    width:'85%',
    padding:12,
    borderRadius:10,
    justifyContent:"center",
    marginTop:20,
    marginBottom:15,
    alignSelf:"center",
    flexDirection:"row"
  },
  buttonText:{
    color:'#fff',
    fontWeight:'700',
    fontSize: 16,
    alignSelf:"center",
  },
  linearGradient:{
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  header:{
    flexDirection:"row",
    margin:0
  },
  special:{
    justifyContent:"center",
    alignItems:"center"
  },
  comment:{
    backgroundColor:"white",
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    borderTopLeftRadius:15,
    borderTopRightRadius:15
  },
  cbox:{
    width:"90%",
    marginBottom:10,
  },
  commentText:{
    color:"gray",
    width:"90%",
    fontSize:14,
    textAlign: 'center',
    paddingTop:20,
    paddingBottom:5,
  },
  cbutton:{
    backgroundColor:'#0782F9',
    width:'30%',
    padding:15,
    borderRadius:10,
    alignItems:'center',
    marginTop:5,
    marginBottom:20
  },
  insideb:{
    color:"white",
    fontSize:16
  }
})