import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';
import DropdownMonth from './src/components/DropdownMonth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DataList from './src/components/DataList';



const Stack = createNativeStackNavigator();
const App =()=> {
  const d = new Date();
  let currentMonth = d.getMonth();
  let presentYear = d.getFullYear();
  const [data, setData]=useState([])
const searchApi=async(month, year)=>{
  try{
    const response =await axios.get(`https://sof.abpweddings.com/mats/activity/read/2180746/${year}/${month}/0.json`);
   
    const keysSorted = Object.keys(response.data.activityDocuments).sort(function(a,b){return b-a})
    console.log(keysSorted);
    var objectArray =[];
    for (let i=0; i<keysSorted.length;i++) {
      const obj = {};
      var utcsecs=parseInt(keysSorted[i]);
      var d= new Date(utcsecs);
      let D=d.toDateString();
      obj.date= D;
      console.log(D);
      obj.value= response.data.activityDocuments[keysSorted[i]];
      objectArray.push(obj);
    }
    // console.log(objectArray)
    setData(objectArray);
    console.log(data);
    // for (let key in response.data.activityDocuments){
      // console.log(typeof key);
          // var utcsecs=parseInt(key);
          // var d= new Date(utcsecs);
          // console.log(d.toDateString())
      // newData[d.toDateString() + " " + key]=response.data.activityDocuments[key];
        // console.log(d.toDateString() + "  hjk  "+ key)
        // let D=d.toDateString();
        // var objectArray =[];
        // objectArray.push({date:D, value:response.data.activityDocuments[key]})
              // newData[Date(key)]=responseJson.activityDocuments[key];
              // console.log(Object.entries(newData));
              // setData(newData);
              // response.data.activityDocuments[key]=(Date(key))+ " "+key
              // console.log(JSON.parse(data))
              // console.log(month, year);
              // console.log(key + ''+ Date(key))
            // }
         
            // console.log(response.data.activityDocuments);
  }catch(e){
      window.alert('server error' + e)
  }


}


useEffect(()=>{
  searchApi(currentMonth+1, presentYear);
          },[])
//    const list
  // const abpwedding=(month, year)=>{
  
//     fetch(`https://sof.abpweddings.com/mats/activity/read/2180746/${year}/${month}/0.json`)
//     .then(response=>response.json())
//     .then((responseJson)=>{
//       const newData={};
     
//       for (let key in responseJson.activityDocuments){
//         newData[Date(key)]=responseJson.activityDocuments[key];
//         console.log(Object.entries(newData));
//         setData(newData);
//         console.log(responseJson.activityDocuments[key]=(Date(key)))
//         console.log(month, year);
//         // console.log(key + ''+ Date(key))
//       }
//         // setData(responseJson.activityDocuments)
//         // console.log(data)
        
//     }).catch(error=>console.log(error))
// }

  return (
    <View style={styles.bodyStyle}>
      <View style={styles.viewStyle}>
        <DropdownMonth search={searchApi}/>   
      </View>
      <DataList data={data}/>
    </View>
  );
}

const styles =StyleSheet.create({
  viewStyle:{
    display:"flex",
    flexDirection:'row',
  
  },
  bodyStyle:{
    flex:1,
    paddingBottom:50,
    backgroundColor:'white'
  }

})

export default ()=>{
  return(<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='App' component={App}
      options={{ title: 'Activity Log',
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: 'white', headerTitleStyle: {
        fontWeight: 'bold',
      }, }}/>
    </Stack.Navigator>
  </NavigationContainer>)
};