import React,{useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput,Modal,ScrollView} from 'react-native';
import {auth} from '../firebase';
import {createUserWithEmailAndPassword, sendEmailVerification,createProfileChangeRequest} from "firebase/auth";
import { useNavigation } from '@react-navigation/core';


const RegisterScreen = () => {
    const[email, setEmail] = useState('');
    const[username, setUsername] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigation=useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [pop, setPop] = useState('');
    
    const register = () => {
        const user= createUserWithEmailAndPassword(auth, email, password);
        if(user){
            sendEmailVerification(auth.currentUser).then(() => {
                setPop("an email is sent to your email account")
                setModalVisible(true);
                // if(auth.currentUser.emailVerified){
                //     navigation.navigate("Home")
                // } ????????????????
            })
        }
    };

    const onTermsOfUsePressed = () =>{

    }

    const onPrivacyPressed = () =>{
        
    }

  return (
     
    <ScrollView
    // style={styles.container}
    //behavior="height"
    >

      <View style={styles.container}>
          <View style={styles.inputContainer}>
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
          <Text style={styles.title}>
              Create an account
          </Text>
          <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}/>
          <TextInput
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.input}/>
          <TextInput
          placeholder="Phone Number"
          value={phone_number}
          onChangeText={text => setPhone_number(text)}
          style={styles.input}/>
          <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
          />

        <TextInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          onChangeText={text => setPasswordRepeat(text)}
          style={styles.input}
          secureTextEntry
          />

          <Text style={styles.text}>By registering, you confirm that you accept our{' '}
        <Text  style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
          <Text  style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
          </Text>
        
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity 
          onPress={register}
          style={styles.button}
          >
              <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

      </View></View>
    </ScrollView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:80

    },
    inputContainer: {
        width: '80%',
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:15,
    },
    buttonContainer:{
        width:'60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:40,
    },
    button:{
        backgroundColor:'#0782F9',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center'
    },
    
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize: 16,
    },
   
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#051C60',
        margin:20,
        textAlign:'center'
    },
    text:{
        color:'gray',
        marginTop:10,
    },
    link:{
        color:'#FDB075',
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
      }
})