import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Text_Size from './Textscaling';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Svgimg from '../imgs/home_img.svg';

const TextExample = ({ navigation }) => {
   return (
      <View style={styles.container}>

         <View style={styles.part_1}>
         <Svgimg height={hp('35%')} width={wp('100%')}/>

         </View>
         <View style={styles.part_2}>
              <Text style={styles.part_2_1}>
                  A New Method for
               </ Text>
               <Text style={styles.part_2_2}>
                   DataAutomation!..
               </Text>

         </View>
         <View style={styles.part_3}>
               <Image style={styles.part_3_1}
                  source={require('../imgs/ezgif.com-gif-maker-removebg-preview.png')} />
               <Text style={styles.part_3_2}>
                  Sprightly
               </Text>

         </View>
         <View style={styles.part_4}>
            <View style={styles.part_4_1}>

                     <View style={styles.part_4_1_1}>
                          <Text style={styles.part_4_1_1}>
                             Get Started
                          </Text>

                     </View>
                     <View style={styles.part_4_1_2}>
                     <Image style={styles.account}
                           source={require('../imgs/account-icon-25499.png')} />

                     </View>

            </View>
            <View style={styles.part_4_2}>
                        <TouchableOpacity style={styles.touch}
                           onPress={() => navigation.navigate('ChooseTemplates')}>
                           <Text style={styles.testt}> Sign In with Google</Text>
                        </ TouchableOpacity>
            </View>
               

         </View>
         
      </View>
   )
}

export default TextExample

const styles = StyleSheet.create({
   part_1: {
      flex: 0.35,
     // backgroundColor: "green"

   },
           
   part_2: {
      flex: 0.1,
      
    //  backgroundColor: "yellow"


   },

               part_2_1: {
                  flex: 0.5,
                  
                  fontFamily: 'Merriweather',
                  fontSize: Text_Size.Text_size_Type_2,
                 
                  marginLeft: wp('4%'),
                  fontWeight: 'bold',
                  color: '#104A6C'

               },
               part_2_2: {
                  flex: 0.5,
                  alignContent:'center',
                  fontFamily: 'Merriweather',
                  fontSize: Text_Size.Text_size_Type_2,
                 
                  marginLeft: wp('30%'),
                  fontWeight: 'bold',
                  color: '#104A6C',
                  textShadowColor: '#104A6C'
               },
   part_3: {
      flex: 0.4,
      alignItems: 'center',
    // backgroundColor: "green"

   },
            part_3_1: {
               flex: 0.9,
               height: hp('30%'),
               width: wp('50%')

            },
            part_3_2: {
               flex: 0.1,
               alignItems: 'center',
              
               fontWeight: 'bold',
               fontSize: Text_Size.Text_size_Type_1,
               color: '#9760D8'

   },

   part_4: {
      flex: 0.15,
      alignItems: 'center',
     // backgroundColor: "red"

   },
               part_4_1: {
                  flex: 0.4,
                  alignItems: 'center',
                  flexDirection:'row'

               },
                   
                     part_4_1_1: {
                        flex: 0.6,
                        alignItems:'flex-end',

                       // marginTop: 40,
                       // marginLeft: -30,
                        color: 'gray',
                        fontSize: Text_Size.Text_size_Type_0,
                       fontWeight: 'bold'

                     },
                     part_4_1_2: {
                        flex: 0.4,
                        alignItems:'flex-start',
                        
                        marginLeft: wp('2%'),
                        
                         marginTop: hp('0.5%'),
                        // marginRight: -95
      
                     },
                     account:{
                        width: wp('3.3%'),
                        height: hp('3.2%'),

                     },
                  
               part_4_2: {
                  flex: 0.85,
                  alignItems: 'center',

           },
           touch:{
                  width: wp('60%'),
                  height: hp('8%'), 
                  justifyContent: "center", 
                  alignItems: "center", 
                  borderRadius: wp('4%'), 
                  backgroundColor: "#287187", 
                  //marginTop: wp('60%')
               },

            testt:{ color: "white", 
                    fontWeight: "bold", 
                    fontSize: Text_Size.Text_size_Type_0,
         },




   container: {
      flex: 1,
      
      // marginTop: 100,
      // padding: 20
   },
   
   
   
  

   
});