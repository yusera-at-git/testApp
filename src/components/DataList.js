import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import DataItem from './DataItem';

const DataList =(props)=>{
    return(
    <View style={styles.viewStyles}>
        <FlatList
            
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            data= {props.data}
            keyExtractor={(key)=>{
                return key.date
            }}
            renderItem={({item})=>{
                return(
                    <View style={styles.dataListStyle}>
                        <Text style={styles.dataTextStyle}>
                            {item.date}
                
                        </Text>
                        <DataItem value={item.value}/>
                    </View>)
            }}
        />
    </View>
    );
}

const styles= StyleSheet.create(
  {
      viewStyles:{
        // backgroundColor:'gray',
      },
        dataListStyle:{
        //    backgroundColor:'white',
            margin:5,
            // paddingTop:50,
            display:'flex'
            
        },
        dataTextStyle:{
            fontSize:22,
            width:'100%',
            color:'red',
            fontWeight:'bold',
            // marginTop:10,
            paddingTop:50,

        }
    }
);

export default DataList;