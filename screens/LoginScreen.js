import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Modal  } from 'react-native';
import {auth} from '../firebase';
import {signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider,onAuthStateChanged} from "firebase/auth";
import { useNavigation } from '@react-navigation/core';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';
const LoginScreen = () => {
    
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    
    const navigation=useNavigation();
    const [user,setUser]=useState({});
    
    
    const [modalVisible, setModalVisible] = useState(false);

    const [pop, setPop] = useState('');
    const [isSecure, setIsSecure]=useState(true)
   onAuthStateChanged(auth,(currentUser) => {
       setUser(currentUser);
   })
   
    const login = async () => {
       try {
           const user = await signInWithEmailAndPassword(auth,email,password);
        if(user){
            navigation.navigate("Home")
        }   
       } catch (error) {
           if(email.length==0 || password.length==0){
                setPop("You can not leave email and password blank")
                setModalVisible(true);
           }
           else if(email.substring(email.length-10,email.length)!="@gmail.com"){
            setPop("Please make sure your email is valid")    
            setModalVisible(true);
           }
           else if(user){
                setPop("Email or password incorrect")
                setModalVisible(true);
           }
       }
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate("Forgot");
    }

    const onSignInFacebook = () => {

    }
 
    const onSignInGoogle= () => {}
      
      const onSignInApple=()=>{
        
      }
  return (
      
        <ScrollView>
        <View style={[styles.container]} >
           
        <View style={[styles.header]}>
            <Image
            style={styles.img}
            source={require('../assets/cool-background.png')}/>
        </View>
        <View style={styles.input_container}>
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{pop}</Text>
            <TouchableOpacity
              style={[styles.button_new, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </View>
        </Modal>
            <TextInput
                label='Email'
                //mode='outlined'
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize='none'
                //left={<TextInput.Icon name="email-outline" style={{marginTop:15}}/>}
                />
            
            <TextInput
               label={<Text style={{marginBottom:0}}>Password</Text>}
                //mode='outlined'
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry={isSecure}
                autoCapitalize='none'
                //left={<TextInput.Icon name="lock-outline" style={{marginTop:11}} />}
                right={<TextInput.Icon name="eye-outline" style={{marginTop:13}} onPress={() => setIsSecure((prev) => !prev)}/>}
            />
           
            <TouchableOpacity 
                onPress={login}
                style={styles.button}
            >
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
        <View>

        <View style={styles.footer}>
            <TouchableOpacity 
                onPress={onForgotPasswordPressed}
                style={styles.button_light}
                >
                <Text style={styles.text_light} onPress={onForgotPasswordPressed}>Forgot Password?</Text>
            </TouchableOpacity>

            <FontAwesome.Button style={styles.companies} name="facebook" backgroundColor="#3b5998" onPress={onSignInFacebook}>Sign in with Facebook</FontAwesome.Button>
            <Text></Text>
            <FontAwesome.Button style={styles.companies} name="google" backgroundColor="#DD4D44" onPress={onSignInGoogle}>Sign in with Google</FontAwesome.Button>
            <Text></Text>
            <FontAwesome.Button style={styles.companies} name="apple" backgroundColor="#363636" onPress={onSignInApple}>Sign in with Apple</FontAwesome.Button>

            <TouchableOpacity 
                onPress={() => {
                navigation.navigate("Register");}}
                style={styles.button_light}
            >
            <Text style={styles.text_light}>Don't have an account? </Text>
            <Text style={styles.text_light_blue}>Create one</Text>
            </TouchableOpacity>
        </View>
        </View>
        
      </View>
    </ScrollView>
  
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        width:'100%',
    },
    header:{
        width:'100%',
    },
    img:{
        width:'100%',
        height:300,
        borderBottomRightRadius:60
    },
    label:{
        color: 'gray', 
        fontWeight: 'bold', 
        fontSize: 15, 
        marginBottom: 5,
        marginTop:15,
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        borderRadius:10,
        marginTop:15,
        width:'100%',
        backgroundColor: 'transparent',
        height:60,
        marginBottom:5
    },
    button:{
        backgroundColor:'#0782F9',
        width:'50%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
        marginTop:20,
        alignSelf:'flex-end'
    },
    input_container:{
        width:'70%',
        alignSelf:"center",
        marginTop:20
    },
    buttonText:{
        color:'#fff',
        fontWeight:'700',
        fontSize: 16,
    },
    button_light:{
        alignSelf:'center',
        marginTop:30,
        marginBottom:10
    },
    text_light:{
        color:'gray',
        fontSize:14,
        alignSelf:'center'
    },
    companies:{
        justifyContent: 'center',
        alignItems:'center',
    },
    footer:{
        width:'60%',
        alignSelf:'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button_new: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      text_light_blue:{
        color:'#0782F9',
        fontSize:14,
        alignSelf:'center'
      }
    });
