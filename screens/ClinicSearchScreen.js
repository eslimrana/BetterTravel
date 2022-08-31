import { StyleSheet, Text, View,ScrollView, TouchableOpacity, Image, Modal } from 'react-native'
import {React, useState,useEffect} from 'react'
import { doc, setDoc, Timestamp, getDoc, addDoc } from "firebase/firestore"; 
import DateTimePicker from 'react-datetime-picker';
import {db} from '../firebase';
import {auth} from '../firebase';
import {LinearGradient} from 'expo-linear-gradient';


const ClinicSearchScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pop, setPop] = useState('');
  const user=auth.currentUser
  const treatments=["Implant","Root Canal Treatment","Tooth Extraction","Wisdom Teeth Extraction","Zircon","Teeth Cleaning","Teeth Whitening","Orthodontics","Oral Diagnosis and Radiology","Composite Fillings","Pedodontics","periodontology"]

  
  const unavailable_times=[];

  const text1='date'
  const text2=user.email;
  const date = text1.concat(text2)
  const [value, setValue] = useState(new Date());
  

 const create = (value, name ) => {
  setDoc(doc(db, "clinics", name), {
    [date]: Timestamp.fromDate(value),
  }, { merge: true });
  
 
 }
  return (
    <View style={styles.container}>
    <ScrollView>
    <View style={styles.standard2}>
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
          <View style={styles.imgAndText}>
            <Image style={styles.img2} source={require('../assets/app_clinic.png')}>

            </Image>
            
            <Text style={styles.txt2}>
              Mesut Dental Clinic{"\n"}
            </Text>
            
          </View>
            <LinearGradient
            colors={['#184e77','#2D809B']} style={styles.button} >
            <TouchableOpacity onPress={() => {getDoc(doc(db, 'clinics', 'mesut')).then(docSnap => {
            if(docSnap.exists()){
              
              for (let index = 0; index < Object.values(docSnap.data()).length; index++) {
                unavailable_times[index]=Object.values(docSnap.data())[index];
              }
              const isFound = unavailable_times.some(element => {
                if (element.toDate().toString() === value.toString()) {
                  return true;
                }
              
                return false;
              });
              if(!isFound){
                create(value, 'mesut');
                setPop("your appointment is successfully created")
                setModalVisible(true);
              }
              else{
               
                setPop("that time is not available")
                setModalVisible(true);
              }
             
            }
            else{
              console.log(error)
            }
            });}}><Text style={styles.buttonText}>Book an appointment</Text></TouchableOpacity>
          </LinearGradient>
          <View>
            <DateTimePicker  
            onChange={(value) => {setValue(value)}} value={value} 
            />
          </View>
        </View>


        <View style={styles.standard2}>
          <View style={styles.imgAndText}>
            <Image style={styles.img2} source={require('../assets/app_clinic.png')}>

            </Image>
            
            <Text style={styles.txt2}>
              Mesut Dental Clinic{"\n"}
            </Text>
            
          </View>
            <LinearGradient
            colors={['#184e77','#2D809B']} style={styles.button} >
            <TouchableOpacity onPress={() => {getDoc(doc(db, 'clinics', 'rana')).then(docSnap => {
            if(docSnap.exists()){
              
              for (let index = 0; index < Object.values(docSnap.data()).length; index++) {
                unavailable_times[index]=Object.values(docSnap.data())[index];
              }
              const isFound = unavailable_times.some(element => {
                if (element.toDate().toString() === value.toString()) {
                  return true;
                }
              
                return false;
              });
              if(!isFound){
                create(value, 'rana');
              }
              else{
                console.log("that time is not available")
              }
             
            }
            else{
              console.log(error)
            }
            });}}><Text style={styles.buttonText}>Book an appointment</Text></TouchableOpacity>
          </LinearGradient>
          <View>
            <DateTimePicker  
            onChange={(value) => {setValue(value)}} value={value} 
            />
          </View>
        </View>

    </ScrollView>
</View>
   
  )
}

export default ClinicSearchScreen

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    flex:1,
    width:"100%"
  },
  picker:{
    width:"100%"
  },
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
