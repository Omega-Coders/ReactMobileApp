import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,Image } from 'react-native'
import { useRoute } from '@react-navigation/native';
import Text_Size from './Textscaling';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Nearer =({navigation}) =>{
   const route = useRoute();
    return(
        <View style={styles.container}>
                  <View style={styles.part_a}>
                     <View style={styles.circleshape}></View>
                     <View style={styles.csp}></View>

                     <Text style={styles.textg}>
                        Getting closer!..
                     </Text>
                     <Text style={styles.preview}>
                        Checkout the previewed page below
                     </Text>


                  </View>
                  
                  <View style={styles.part_b}>
                       <Image source={{uri:('file://'+route.params.path)}} style={{width: wp('90%'), height:hp('68%'),marginTop:'3%'}}/>

                  </View>
                  <View style={styles.part_c}>    
                        <TouchableOpacity
                        style={{height:57,width:170,justifyContent:"center",alignItems:"center",borderRadius:40,backgroundColor:"#5364b2",marginTop:'4%'}}
                        onPress={()=> navigation.navigate('DefauEdgingltTemplates')}>

                        <Text style={{color:"white",fontWeight:"bold",fontSize:20}}> Done</Text>
                        </ TouchableOpacity> 
                  </View>
          </ View>
                        )
                     }

export default Nearer
const styles = StyleSheet.create ({
   part_a:{
      flex:0.09,

   },
   part_b:{
      flex:0.72,

   },
   part_c:{
      flex:0.05,

   },
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:"center",
      flexDirection:'column',
      
      
   },
   circleshape:{
      // width:150,
      // height:150,
      // borderRadius:150/2,
      // backgroundColor:'#5364b2',
      // marginTop:-175,
      // marginLeft:-345
  },
  csp:{
   // width:150,
   // height:150,
   // borderRadius:150/2,
   // backgroundColor:'#5364b2',
   // marginTop:-75,
   // marginLeft:-455
},
textg:{
   //  fontFamily:'Inter',
   //  fontSize:Text_Size.Text_size_Type_2,
   //  marginTop:-80,
   //  marginLeft:-100,
   //  fontWeight: 'bold',
   //  color: '#5F5FE3',
   //  textDecorationLine: 'underline'
 },
 preview:{
   //  fontFamily:'Inter',
   //  fontSize:Text_Size.Text_size_Type_0,
   //  marginLeft:70,
   //  fontWeight:'Semibold',
   //  color:"#353935"
 },
 ann:{
   //  marginTop:-55,
   //  height:320,
   //  width:450
 }
});