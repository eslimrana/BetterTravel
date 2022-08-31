import React,{useState} from 'react';
//import ReactDOM from 'react-dom';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput,Modal } from 'react-native';
import { useNavigation } from '@react-navigation/core'; 
import { sendPasswordResetEmail } from 'firebase/auth';
import {auth} from '../firebase';
const ForgotPasswordScreen = () => {  
    const[email, setEmail] = useState('');
    //const [errorMessage, setErrorMessage] = React.useState("");
    const onSendPressed = () => {
       if (email) {
            sendPasswordResetEmail(auth, email).then(() => (email = ""))
            setPop("an email to your email account was succesfully sent")
            setModalVisible(true);
       }
       else{
            setPop("Email is not valid")
            setModalVisible(true);
       }
    }
    const [modalVisible, setModalVisible] = useState(false);
    const [pop, setPop] = useState('');
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
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
                Reset your password
            </Text>
            <TextInput
            placeholder="e-mail"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}/>
      </View>
      
      <View style={styles.buttonContainer}>
            <TouchableOpacity 
            onPress={onSendPressed}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",

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

















