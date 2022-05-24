import React, { Component } from 'react'
import { View, Text, Image,StyleSheet,Button,TouchableOpacity,Pressable} from 'react-native';
import CustomButton from './custombutton';
import Text_Size from './Textscaling';


const Tempchoosen = ({navigation})=> {
    return (
     <View style = {styles.container}>
               <View style={styles.circleshape}></View>
         <View style={styles.csp}></View>
         <Text style={styles.welcome}>
         welcome Back
         </Text>
         <Text style={styles.prefernce}>
            Choose Template as per your preference!..
         </Text>

           <Image style={styles.girl}
                    source={require('../imgs/undraw_Right_places_re_3sve-removebg-preview.png')}/>
             <Text style = {styles.choose}>
                
               Choose Templates
                </ Text>
                <Text style={styles.texting}> </Text>
                <Text style={styles.text} ></Text>
                
               <View style={{flexDirection:'row'}}>
               <TouchableOpacity style={{height:68,width:157,justifyContent:"center",alignItems:"center",borderRadius:15,backgroundColor:"#5364B2",marginTop:1}}
                   onPress={()=> navigation.navigate('DefaultTemplates')}>
                            <Text style={{color:"white",fontWeight:"bold",fontSize:22}}> Default</Text>
                   </ TouchableOpacity> 
               <CustomButton title='Custom' color='#5364B2'/>
               </View>
             
          </View> 
   )
}

export default Tempchoosen

const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
    marginTop: 100,
    padding: 20
 },
 circleshape:{
   width:150,
   height:150,
   borderRadius:150/2,
   backgroundColor:'#5364b2',
   marginTop:-155,
   marginLeft:-345
},
csp:{
width:150,
height:150,
borderRadius:150/2,
backgroundColor:'#5364b2',
marginTop:-75,
marginLeft:-455
},
 welcome:{
    fontFamily:'Inter',
    fontSize:Text_Size.Text_size_Type_3,
    fontStyle:'MerriweatherOswald',
    marginTop:-30,
    marginLeft:-150,
    fontWeight: 'bold',
    color: '#5F5FE3',
    textShadowColor: '#5F5FE3',
    textDecorationLine:'underline'
 },
prefernce:{
    fontFamily:'Merriweather',
    fontSize:15.1,
    fontStyle:'MerriweatherOswald',
    marginTop:0,
    marginLeft:1.5,
    fontWeight: 'bold',
    color: 'black'
 },
 girl:{
  width:330,
  height:340,
  marginTop:-10,
  marginLeft:-110,
  borderBottomRightRadius:40,
  borderBottomLeftRadius:40
 },
   choose: {
      fontFamily:'Merriweather',
      fontSize:Text_Size.Text_size_Type_1,
      marginTop:20,
      marginLeft:-190,
      fontWeight: 'bold',
      color: '#2F2E41',
      textShadowColor: '#5F5FE3',
      textDecorationLine:'underline'
   },
   text:{
       width:4000,
       marginBottom:0,
       borderBottomEndRadius:50
   },
   button:{
      height:200,
      width:2000
   }

});