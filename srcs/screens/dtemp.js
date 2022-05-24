import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,Image} from 'react-native';
import Text_Size from './Textscaling';


const Dte =({navigation}) =>{
    return(
        <View style={styles.container}>
             <View style={styles.circleshape}></View>
         <View style={styles.csp}></View>
              <Image style={styles.boy}
                   source={require('../imgs/undraw_Date_picker_re_r0p8_prev_ui.png')}/>
        
          

        <Text style={styles.dt}>
      Predefined Templates for you!..
        </Text>
       
                        <View>
              <TouchableOpacity
              style={{height:68,width:157,justifyContent:"center",alignItems:"center",borderRadius:15,backgroundColor:"#5364b2",marginTop:225}}
              onPress={()=> navigation.navigate('Edging')}
              >
                       <Text style={{color:"white",fontWeight:"bold",fontSize:22}}>proceed</Text>
              </ TouchableOpacity> 
              </View>

        </ View>
    )
}

export default Dte
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
       marginTop:-175,
       marginLeft:-345
   },
   csp:{
    width:150,
    height:150,
    borderRadius:150/2,
    backgroundColor:'#5364b2',
    marginTop:-85,
    marginLeft:-455
},
dt:{
    fontFamily:'Inter',
    fontSize:Text_Size.Text_size_Type_1,
    marginTop:-10,
    marginLeft:-61,
    fontWeight: 'bold',
    color: '#5364B2', 
 },
gup:{
    fontFamily:'Inter',
    fontSize:17.5,
    marginLeft:10,
    marginTop:3,
    fontWeight:'Semibold',
    color:"#353935"
 },
 boy:{
     width:565,
     height:430,
     marginTop:-130,
     marginLeft:-10
 },
 xsheet:{
     fontSize:20,
     marginTop:-30,
     marginLeft:-89
 },
 tlin:{
     height:50,
     width:300,
     marginTop:18,
     borderWidth:1,
     borderColor:'black',
     borderRadius:20
 }
});