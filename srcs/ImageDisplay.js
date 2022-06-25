/*import React, { Component,Image,View ,Text} from 'react'
import styles from './Styles' */

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import React, { Component } from 'react'
import { StyleSheet, View, Alert ,Button,Text,Image,ImageBackground} from 'react-native'
import CustomButton from './CustomButton';

import Svgimg from './imgs/tick.svg';
import {LogBox} from "react-native";
import { useRoute } from '@react-navigation/native';
LogBox.ignoreLogs([
"exported from 'deprecated-react-native-prop-types'.",
])



import Award from './imgs/boy1.svg';
import { SafeAreaView } from 'react-native-safe-area-context';

import writeExcel from './functions/writeExcel';
import appendExcel from './functions/appendExcel';


export default function ImageDisplay({navigationz}){
  const route = useRoute();
  const totalData = route.params.tdata;
  const img = route.params.path
  const xldata = []
  xldata.push(route.params.xldata)

  const write =()=>{

    writeExcel(xldata);
  
   } 
  
   const append = () =>{
    appendExcel(cars);
   }
  



    return(
        
    <SafeAreaView >
      
     
      <ImageBackground source={{uri:img}} style={{width: '100%', height: '100%',backgroundColor:'white'}}resizeMode="stretch" >
      <View>
        
      </View>
      
      {
        totalData.map((item)=>{
          return(
            <View key={item['_id']}>
            <View style={styles.box({x:Math.floor(item['coordinates']['x']*wp(100)),y:Math.floor(item['coordinates']['y']*hp(100)),w:item['coordinates']['w']*wp(100),h:item['coordinates']['h']*hp(100)})} >
            <Text style={{color:'black'}}>
              {item["OCRResp"]}
            </Text>
            </View>
            </View>
      
          )
        })
      }

        <View style={{flexDirection:'column-reverse',alignSelf:'center',justifyContent:'center',marginTop:hp(87)}}>
        <CustomButton style={{backgroundColor:'#5364b2'}} title={'Done'} onPressFunction={write} ></CustomButton>
        </View>

      </ImageBackground>

    </SafeAreaView>

  )

}

const styles = StyleSheet.create({
  box:({x,y,w,h})=>{
    return{
      position:'absolute',
      top:y,
      left:x,
    
      width:w,
      height:h,
     // borderWidth:3,
      borderColor:'green',
      zIndex:300,
      backgroundColor:'white',
      


    } 

     
  },
})
//<Image source={require(route.params.path)} /> <Image source={require('./Default.jpg')} />

//<Image source={{uri:'file:///storage/emulated/0/DCIM/Restored/IMG20220316134958.jpg', width: 100,  height: 100}} />

