
import React,{useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import {useLocation} from 'react-dom'
import {auth} from '../firebase';

const NewPasswordScreen = () => {  
    const[code, setCode] = useState('');
    const[newPassword, setNewPassword] = useState('');
    
    const onSubmitPressed = () =>{

    }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
      <View style={styles.inputContainer}>
            <Text style={styles.title}>
                Reset your password
            </Text>
            <TextInput
            placeholder="Code"
            value={code}
            onChangeText={text => setCode(text)}
            style={styles.input}/>

            <TextInput
            placeholder="Enter your new password"
            value={newPassword}
            onChangeText={text => setNewPassword(text)}
            style={styles.input}/>
      </View>
      <View style={styles.buttonContainer}>
            <TouchableOpacity 
            onPress={onSubmitPressed}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => {
                navigation.navigate("Register");}}
            style={styles.button_tertiary}>
                <Text style={styles.text_tertiary}>Back to Log in</Text>
            </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

export default NewPasswordScreen

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
    buttonOutline:{
        borderColor:'#0782F9',
        borderWidth:2,
        marginTop:15,
        backgroundColor:'white',
        width:'100%',
        borderRadius:10,
        alignItems:'center',
        padding:15
    },
    buttonOutlineText:{
        color:'#0782F9',
        fontWeight:'700',
        fontSize: 16,
        
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
    }
})