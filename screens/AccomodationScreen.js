import { StyleSheet, Text, View,ScrollView,FlatList, TouchableOpacity, Image } from 'react-native'
import {React, useState,useEffect} from 'react'
import {auth} from '../firebase';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { TextInput } from 'react-native-paper';
import {getStorage, ref, getDownloadURL} from 'firebase/storage'; 
const AccomodationScreen = () => {
  let data=[
    {
      "id":1,
      "name": "Sheriton",
      "city": "Ankara",
      "photo": 'https://firebasestorage.googleapis.com/v0/b/fir-auth-8d111.appspot.com/o/sheriton.png?alt=media&token=1a83a13c-dbb2-4c60-b172-c5fed6c376d0'
    },
    {
      "id":2,
      "name": "RW MARRIOT",
      "city": "Ankara",
      "photo": 'https://firebasestorage.googleapis.com/v0/b/fir-auth-8d111.appspot.com/o/sheriton.png?alt=media&token=1a83a13c-dbb2-4c60-b172-c5fed6c376d0'
    },
    {
      "id":3,
      "name": "Pera palas",
      "city": "Istanbul",
      "photo": 'https://firebasestorage.googleapis.com/v0/b/fir-auth-8d111.appspot.com/o/sheriton.png?alt=media&token=1a83a13c-dbb2-4c60-b172-c5fed6c376d0'
    },
    {
      "id":4,
      "name": "aden",
      "city": "Antalya",
      "photo": 'https://firebasestorage.googleapis.com/v0/b/fir-auth-8d111.appspot.com/o/sheriton.png?alt=media&token=1a83a13c-dbb2-4c60-b172-c5fed6c376d0'
    },]
  const [filteredData, setFilteredData]=useState([]);
  const [masterData, setMasterData]=useState([]);
  const navigation = useNavigation();
  const [col, setCol] = useState('gray');
  const [col2, setCol2] = useState('gray');
  const [col3, setCol3] = useState('gray');
  const [col4, setCol4] = useState('gray');
  const [col5, setCol5] = useState('#2D809B');
  //const [url, setURL] = useState('');

 useEffect( () => {
  // const getImage = async() =>{
  //   const storage = getStorage();
  //   const reference = ref(storage, '/sheriton.png');
  //   await getDownloadURL(reference).then((x)=>{
  //     setURL(x);
  //   })
   
  //   console.log(data)
    
  //   console.log(url)


  // }
  // await getImage();
    setFilteredData(data);
    setMasterData(data);
    console.log(data)
  }, [])
  
  const searchFilter = (text) => {
    if(text){
      const newdata = data.filter(function(item){
        const itemData = item.city ? item.city.toUpperCase() : ''.toUpperCase()
        const textData =  text.toUpperCase();
        return itemData.indexOf(textData) > -1;});
        setFilteredData(newdata);
      }
      else{
        setFilteredData(masterData)
      }
    }

  function Item({ item }) {
    return (
      <View style={styles.listItem}>
        <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} />
        <View style={{alignItems:"center",flex:1}}>
          <Text style={{fontWeight:"bold"}}>{item.name}</Text>
          <Text>{item.city}</Text>
        </View>
        <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
          <Text style={{color:"green"}}>Call</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      
    <ScrollView>
      <TextInput
      onChangeText={(newText) => searchFilter(newText)}
      ></TextInput>
      
      <FlatList
          style={{flex:1}}
          data={filteredData}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.id}
        />
    </ScrollView>


      <View style={styles.footer_navigation}>
      <IonIcon style={styles.icons} name="home" size={30} color={col} onPress={() => {setCol("#2D809B"); setCol2("gray"); setCol3("gray"); setCol4("gray");setCol5("gray");navigation.navigate("Home")}}/>
      <IonIcon style={styles.icons} name="search" size={30} color={col2} onPress={() => {setCol("gray"); setCol2("#2D809B"); setCol3("gray"); setCol4("gray");setCol5("gray");navigation.navigate("clinic")}}/>
      <IonIcon style={styles.icons} name="star" size={30} color={col5} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("gray"); setCol4("gray");setCol5("#2D809B")}}/>
      <IonIcon style={styles.icons} name="earth" size={30} color={col3} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("#2D809B"); setCol4("gray");setCol5("gray");navigation.navigate("plane")}}/>
      <IonIcon style={styles.icons} name="person" size={30} color={col4} onPress={() => {setCol("gray"); setCol2("gray"); setCol3("gray"); setCol4("#2D809B");setCol5("gray");navigation.navigate("profile")}}/>
      
    </View></View>
  )
}

export default AccomodationScreen

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
    width:'100%'
  },
  search:{
    width:'100%',
    alignItems:'center'
  },
  box:{
    marginTop:10,
    width:'100%',
  },
  itemStyle: {
    padding: 10,
  },
  header:{
    marginTop:40,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: "5%"
  },
  dropdown1BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
    marginRight:10
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left", fontSize:13 },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5"
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
   
  },
  title: {
    fontSize: 32,
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
})