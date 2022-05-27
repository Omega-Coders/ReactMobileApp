import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useRoute } from '@react-navigation/native';
import Text_Size from './Textscaling';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {width_screen,height_screen} from './Dimensions/'

const Nearer = ({ navigation }) => {
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
                        Getting Nearer
                     </Text>
                     <View style={styles.p2_2_1}>
                         <Text style={styles.t2}>
                        Checkout the previewed image
                     </Text>
                     </View>
                  </View>
            </View>
            <View style={styles.p3}>
            <Image source={{ uri: ('file://' + route.params.path) }} style={{ width: wp('90%'), height: hp('66%'), marginTop: '-15%' }} />
            <View style={styles.p3_1}>
            <TouchableOpacity
               style={{ height: 57, width: 170, justifyContent: "center", alignItems: "center", borderRadius: 40, backgroundColor: "#5364b2", marginTop: '5%' }}
               onPress={() => navigation.navigate('login')}>
               <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}> Done</Text>
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
     // backgroundColor:"yellow",
      justifyContent:"center",
      alignItems:"center"
   },
   p3_1:{
      flex:0.1
   }

  
});