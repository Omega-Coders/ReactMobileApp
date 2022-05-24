import React, { Component } from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity} from 'react-native'

const TextExample = ({navigation}) => {
   return (
      <View style={{width:"100%",height:"100%",justifyContent:"center",alignSelf:"center",alignContent:"center",alignItems:"center"}}>
    <View style = {styles.container}>
          <Image style={styles.profile}
                   source={require('../imgs/2243429.jpg')}/>
            <Text style = {styles.wordBold}>
               A New Method for
               </ Text>
               <Text style={styles.cbold}>
                     DataAutomation!..
               </Text>
               <Image style={styles.logo}
                   source={require('../imgs/ezgif.com-gif-maker-removebg-preview.png')}/>
                   <Text style={styles.fantastic}>
                     Sprightly
                     </Text>
                     <Text style={styles.start}>
                     Get Started
                     </Text>
                     <Image style={styles.account}
                   source={require('../imgs/account-icon-25499.png')}/>
                   <View>
              
                   <TouchableOpacity style={{height:52,width:260,justifyContent:"center",alignItems:"center",borderRadius:40,backgroundColor:"#287187",marginTop:15}}
                   onPress={()=> navigation.navigate('ChooseTemplates')}>
                            <Text style={{color:"white",fontWeight:"bold",fontSize:18}}> Sign In with Google</Text>
                   </ TouchableOpacity> 

                   </View>
                   
    </View> 
    </View>
   )
}

export default TextExample

const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
    marginTop: 100,
    padding: 20
 },
 profile:{
  width:430,
  height:325,
  marginTop:-190,
  marginLeft:-5,
  borderBottomRightRadius:50,
  borderBottomLeftRadius:50
 },
   wordBold: {
      fontFamily:'Merriweather',
      fontSize:26,
      marginTop:0,
      marginLeft:-160,
      fontWeight: 'bold',
      color: '#104A6C'
   },
   cbold: {
      fontFamily:'Merriweather',
      fontSize:26,
      fontStyle:'Inter',
      marginTop:-5,
      marginLeft:-65,
      fontWeight: 'bold',
      color: '#104A6C',
      textShadowColor: '#104A6C'
   },
   logo:{
      marginTop:35,
      height:120,
      width:100
   },
   fantastic:{
      marginTop:10,
      fontWeight:'bold',
      fontSize:27,
      color:'#9760D8'
   },
   start:{
      marginTop:40,
      marginLeft:-30,
      color:'black',
      fontSize:18,
      fontWeight:'Semibold'
   },
   account:{
      width:20,
      height:20,
      marginTop:-25.5,
      marginRight:-95
   }
   });