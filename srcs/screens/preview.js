import React,  { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useRoute } from '@react-navigation/native';
import Text_Size from './Textscaling';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {width_screen,height_screen} from './Dimensions/'
import ImageEditor from "@react-native-community/image-editor";


import Tflite from 'tflite-react-native';
 
 
let tflite = new Tflite();
var model_file  = 'models/model_unquant.tflite'
var lables_file ='models/labels.txt'

const Nearer = ({ navigation }) => {
   const route = useRoute();
   
   const [text, setText] = useState('')
   //loading model
   tflite.loadModel({model: model_file,labels: lables_file},(err,res)=>{
      if(err)console.log(err);
      else console.log(res)
    });
    
   //displaying model result 
    const display = ()=>{
      console.log(route.params.w,route.params.h);
      tflite.runModelOnImage({
         path: route.params.path ,
        
       },(err,res)=>{
         if(err)console.log(err);
         else{
           console.log(res,'*');
           setText(res);
         };
       })
      
    }

    //cropping..
    const cropData = {
      
      offset: {x:0.120430*route.params.w , y: 0.265625*route.params.h},
      size: {width: 0.121268*route.params.w, height: 0.033026*route.params.h},
      displaySize: {width:0.121268*route.params.w , height: 0.033026*route.params.h},
     // resizeMode: 'contain'  // | 'cover' | 'stretch',
    };
    const crop = ()=>{
      ImageEditor.cropImage(route.params.path, cropData).then(url => {
         console.log("Cropped image uri===", url);
         navigation.navigate('ImageDisplay', { path:url });
       }).catch(err=>{
         console.log(err,'======')
       })
      
    }
   return (
      <View style={styles.container}>
            <View style={styles.p1}>
            </View>
            <View style={styles.p2}>
                  <View style={styles.p2_1}>
                  </View>
                  <View style={styles.p2_2}>
                     <Text style={styles.t1}>
                        Getting Nearer
                        <TouchableOpacity
                           style={{ height: hp("7%"), width: wp("25%"), justifyContent: "center", alignItems: "center", borderRadius: 40, backgroundColor: "#5364b2", marginTop: hp('3%') }}
                           onPress={crop}>
                           <Text style={{ color: "white", fontWeight: "bold", fontSize: Text_Size.Text_size_Type_1 }}> Done</Text>
                        </ TouchableOpacity>
                     </Text>
                     <View style={styles.p2_2_1}>
                         <Text style={styles.t2}>
                        Checkout the previewed image
                     </Text>
                     </View>
                  </View>
            </View>
            <View style={styles.p3}>
            <Image source={{ uri: ('file://' + route.params.path) }} style={{ width: wp('90%'), height: hp('66%'), marginTop: '-15%' }}  resizeMode="contain" />
            <Text style={styles.text_cocor}>{JSON.stringify(text)}</Text>
            <View style={styles.p3_1}>
            <TouchableOpacity
               style={{ height: hp("7%"), width: wp("25%"), justifyContent: "center", alignItems: "center", borderRadius: 40, backgroundColor: "#5364b2", marginTop: hp('3%') }}
               onPress={display}>
               <Text style={{ color: "white", fontWeight: "bold", fontSize: Text_Size.Text_size_Type_1 }}> Done</Text>
            </ TouchableOpacity>
            </View>
            </View>
      </View>

   )
}

export default Nearer
const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:"#ffffff",
      flexDirection:"column"
   },
   text_cocor:{
      fontWeight:"bold",
      color:"green",

   },
   p1:{
      flex:0.1,
    //  backgroundColor:"red"
   },
   p2:{
      flex:0.1,
     // backgroundColor:"green",
      flexDirection:"row"
   },
   p2_1:{
      flex:0.2,
     // backgroundColor:"blue"
   },
   p2_2:{
      flex:0.8,
      //backgroundColor:"orange",
   },
   p2_2_1:{
      flex:0.9,
     // backgroundColor:"black",
      flexDirection:"row",
      justifyContent:"center"
  },
   t1:{
     fontSize:Text_Size.Text_size_Type_3,
     fontWeight:"bold",
     color:"#5364b2"
   },
   t2:{
      fontSize:Text_Size.Text_size_Type_0,
      fontWeight:"bold",
      color:"#9760D8",
      justifyContent:"center"
   },
   p3:{
      flex:0.8,
     backgroundColor:"yellow",
      justifyContent:"center",
      alignItems:"center"
   },
   p3_1:{
      flex:0.1
   }

  
});
