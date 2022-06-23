import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useRoute } from '@react-navigation/native';
import Text_Size from './Textscaling';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {width_screen,height_screen} from './Dimensions/';
import Svgimg from '../imgs/chooseimg.svg';

const Tempchoosen = ({ navigation }) => {
   const route = useRoute();
   return (
      <View style={styles.container}>
            <View style={styles.p1}>
            </View>
            <View style={styles.p2}>
                  <View style={styles.p2_1}>
                  </View>
                  <View style={styles.p2_2}>
                     <Text style={styles.t1}>
                        Welcome Back
                     </Text>
                     <View style={styles.p2_2_1}>
                         <Text style={styles.t2}>
                        Choose Templates as per Your preference
                     </Text>
                     </View>
                  </View>
            </View>
            <View style={styles.p3}>
               <View style={styles.p3_1}>
               <Svgimg height={hp('42%')} width={wp('98%')}/>
               </View>
            </View>
            <View style={styles.p4}>
                  <View style={styles.p4_1}>
                     <Text style={styles.t3}>
                              Choose Templates
                           </Text> 
                           </View>
                  </View>


            <View style={styles.p5}>
           
            <View style={styles.p5_1}> 
                  <View style={styles.b1}>
                  
                  <TouchableOpacity style={styles.p5_1_1} 
                  onPress={() => navigation.navigate('DefaultTemplates')}>
                  <Text style={styles.t4}>
                       Default
                     </Text> 
                     </TouchableOpacity>
                  </View>

            </View>
            <View style={styles.p5_2}> 
            <View style={styles.b2}>
            <View style={styles.p5_1_2}>
            <Text style={styles.t5}>
                      Custom
                  </Text> 
            </View>
         </View>           
            </View>
            </View>
      </View>

   )
}

export default Tempchoosen
const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:"#ffffff",
      flexDirection:"column"
   },
   p1:{
      flex:0.12,
      backgroundColor:"#ffffff"
   },
   p2:{
      flex:0.1,
      backgroundColor:"#ffffff",
      flexDirection:"row"
   },
   p2_1:{
      flex:0.2,
      backgroundColor:"#ffffff"
   },
   p2_2:{
      flex:0.8,
      backgroundColor:"#ffffff",
   },
   p2_2_1:{
      flex:0.9,
      backgroundColor:"#ffffff",
      flexDirection:"row",
      justifyContent:"center"
  },
   p3:{
     flex:0.43,
    // backgroundColor:"pink"
   },
   p3_1:{
      flex:1,
   },
   i1:{
    flex:1,
    width:wp("100%"),
    height:hp("100%")

   },
   p4:{
      flex:0.10,
      backgroundColor:"#ffffff"
     
   },
   p4_1:{
      flex:0.9,
   backgroundColor:"#ffffff",
   alignItems:"center",
   marginTop:wp("1%"),
   marginLeft:wp("10%")
   },
   p5:{
      flex:0.25,
      backgroundColor:"yellow",
      flexDirection:"row"
   },
   
   p5_1:{
      flex:0.5,
   backgroundColor:"#ffffff"
   },
   p5_1_1:{
    flex:0.6,
    width:wp("40%"),
    marginLeft:wp("4%"),
    marginTop:wp("1.5%"),
   //backgroundColor:"#6C63FF"
   },
   p5_2:{
      flex:0.5,
      backgroundColor:"#ffffff"
   },
   p5_1_2:{
      flex:0.6,
      width:wp("30%"),
      marginLeft:wp("5%"),
      marginTop:wp("1.5%"),
      backgroundColor:"#6C63FF"
     },

   t1:{
      fontSize:Text_Size.Text_size_Type_3,
     fontWeight:"bold",
     color:"#6C63FF",
     textDecorationLine: 'underline'
   },
   t2:{
      fontSize:Text_Size.Text_size_Type_0,
      fontWeight:"bold",
      color:"black",
      justifyContent:"center"
   },
   t3:{
      flex:1,
      fontSize:Text_Size.Text_size_Type_5,
      fontWeight:"bold",
      color:"#6C63FF",
      marginLeft:wp("-50%"),
    textDecorationLine: 'underline',
   },
   t4:{
     // flex:1,
    fontSize:Text_Size.Text_size_Type_1,
    marginTop:wp("-0.2"),
    marginLeft:wp("6.5%"),
    fontWeight:"bold",
    color:"#ffffff",
   },
   t5:{
      flex:1,
      fontSize:Text_Size.Text_size_Type_1,
      alignSelf:"center",
      fontWeight:"bold",
      color:"#ffffff",
      marginLeft:wp("1.5%"),
      marginTop:wp("-0.2")
     },
   b1:{
      flex:0.33,
      width:wp("40%"),
      height:hp("30%"),
      marginTop:hp("4%"),
      borderRadius:wp("50%"),
      alignSelf:"center",
      backgroundColor:"#6C63FF"
   },
   b2:{
      flex:0.33,
      width:wp("40%"),
      height:hp("30%"),
      marginTop:hp("4%"),
      borderRadius:wp("50%"),
      alignSelf:"center",
      backgroundColor:"#6C63FF"
   }
});
//this 