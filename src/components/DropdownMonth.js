import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';



    
const DropdownMonth=(props)=>{
const d = new Date();
let currentMonth = d.getMonth();
let presentYear = d.getFullYear();
    
    var yearArray = [
        '2019','2020','2021'
    ];
    
    var monthArray = [
        '',
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

// state//
    const [year, setYear]=useState(yearArray.find((item)=>item===`${presentYear}`));
    const [month, setMonth]= useState(monthArray.find((item)=>item===monthArray[currentMonth+1]));
// console.log(typeof month)
    return (
        <View  style={styles.dropDownStyle}>
             <View  style={styles.dropDownStyleyear}>
                <Text style={styles.labelStyle}>
                    year
                </Text>
                <SelectDropdown
                buttonStyle={styles.buttonStylesyear}
                buttonTextStyle={styles.buttonTxtyear}
                    data={yearArray}
                    defaultButtonText="year"
                    renderDropdownIcon={()=>{
                        return  <AntDesign name="caretdown" size={10} color="gray" />
    
                    }}
                    defaultValue={year}
                    onSelect={(selectedItem, index) => {
                        setYear(selectedItem);
                        // console.log(selectedItem, index);
                        props.search(monthArray.indexOf(`${month}`), selectedItem);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
         
            </View>

            <Text style={styles.labelStyle}>
                Month
            </Text>
         
            <SelectDropdown
                buttonStyle={styles.buttonStyles}
                buttonTextStyle={styles.buttonTxt}
                data={monthArray}
                defaultButtonText="month"
                renderDropdownIcon={()=>{
                    return  <AntDesign name="caretdown" size={10} color="gray" />

                }}
                defaultValue={month}
                onSelect={(selectedItem, index) => {
                    // console.log(selectedItem, index);
                    setMonth(selectedItem);
                    props.search(index, year);
                }}

                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}

                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
     
        </View>
    );
}

const styles= StyleSheet.create({
    dropDownStyle:{
        flex:3,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginRight:2,
        },
    buttonStyles:{
        flex:2,
     
            backgroundColor:'white',
        
            borderBottomColor:'gray'
    },
    buttonTxt:{
            fontSize:18,
            color:'black'
     },
        labelStyle:{
            marginLeft:5,
            color:'gray'
        },
        dropDownStyleyear:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            marginRight:2,
            width:'35%'     
        },
        buttonStylesyear:{
            flex:2,
           
            backgroundColor:'white',
            borderBottomColor:'gray'
        },
        buttonTxtyear:{
            fontSize:18,
            color:'black'
        },
        labelStyleyear:{
            marginLeft:5,
            color:'gray'
        }
})

export default DropdownMonth;