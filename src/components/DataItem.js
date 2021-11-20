import React  from "react";
import {Text, View, FlatList, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DataItem =(props)=>{
    const toDate=(epoch)=>{
        // var utcsecs=parseInt(epoch);
        var d= new Date(epoch);
        var h =  d.getHours(), m = d.getMinutes();
        // console.log(h+"   "+m)
        var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
        // console.log(_time)
        return _time
    }
   
    return(
     
        <View >
            <FlatList
                // horizontal
                data={props.value}
                renderItem={({item})=>
                <View style={styles.dataItemStyle}>
                    <View style={styles.dataItemIconStyle}>
                        <MaterialCommunityIcons name="flower" size={50} color="black" />
                    </View>
                    <View style={styles.dataItemContentContainerStyle}>
                    <Text style={styles.dataItemContentStyle}>
                        {item.actionType}
           
                    </Text>
                    <Text style={styles.descriptionStyles}>
                        {item.description}
                    </Text>
                    <Text style={styles.timeStyles}>
                        {toDate(item.createdOn)}
                    </Text>
                    </View>
                </View>
                }
            />
        </View>)
}

const styles= StyleSheet.create({
    dataItemStyle:{
        // backgroundColor:'gray',
        marginVertical:5,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:170,
        // flexWrap:'wrap'
    },
  
    dataItemIconStyle:{
        backgroundColor:'rgb(255,150,100)',
        marginLeft:10,
        padding:10
    },
    dataItemContentContainerStyle:{
        marginLeft:10,
        paddingLeft:10,
        height:150,
        // backgroundColor:'pink',
        justifyContent:'center',
        flex:3,
        display:'flex',
        // borderColor:'black',
        // borderWidth:2,
        justifyContent:'space-between'

    },
    dataItemContentStyle:{
        fontSize:18,
        paddingTop:8,
        marginVertical:15
      },
      descriptionStyles:{
          fontSize:18,
          paddingBottom:20,
      },
      timeStyles:{
          fontSize:18,
          color:'gray',
          paddingBottom:8
      },
})

export default DataItem;