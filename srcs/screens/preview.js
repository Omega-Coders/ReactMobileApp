import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,Image } from 'react-native'
import { useRoute } from '@react-navigation/native';

const Nearer =({navigation}) =>{
   const route = useRoute();
    return(
        <View style={styles.container}>
                  <View style={styles.circleshape}></View>
                           <View style={styles.csp}></View>
                        <Text style={styles.textg}>
                        Getting closer!..
                        </Text>
                        <Text style={styles.preview}>
                        Checkout the previewed page below
                        </Text>
                            <View >
     
                             <Image source={{uri:('file://'+route.params.path)}} style={{width: 400, height:520,marginTop:40}}/>

                            </View>
                        <View>    
                           <TouchableOpacity
                           style={{height:57,width:170,justifyContent:"center",alignItems:"center",borderRadius:40,backgroundColor:"#5364b2",marginTop:20}}
                           onPress={()=> navigation.navigate('DefauEdgingltTemplates')}>

                                    <Text style={{color:"white",fontWeight:"bold",fontSize:20}}> Done</Text>
                           </ TouchableOpacity> 
                           </View>
          </ View>
                        )
                     }

export default Nearer
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
   marginTop:-75,
   marginLeft:-455
},
textg:{
    fontFamily:'Inter',
    fontSize:23,
    marginTop:-80,
    marginLeft:-130,
    fontWeight: 'bold',
    color: '#5F5FE3',
    textDecorationLine: 'underline'
 },
 preview:{
    fontFamily:'Inter',
    fontSize:15.5,
    marginLeft:10,
    fontWeight:'Semibold',
    color:"#353935"
 },
 ann:{
    marginTop:-55,
    height:320,
    width:450
 }
});