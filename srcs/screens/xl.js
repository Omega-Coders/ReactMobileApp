import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,Image,TextInput } from 'react-native'


const Edgs =({navigation}) =>{
    return(
        <View style={styles.container}>
             <View style={styles.circleshape}></View>
         <View style={styles.csp}></View>
        <Text style={styles.etg}>
        Edging Nearer!..
        </Text>
        <Text style={styles.gup}>
       Getting Things Up!..
        </Text>
        <Image style={styles.boy}
                   source={require('../imgs/[removal.ai]_tmp-628a56b15f9b3.png')}/>

            <Text style={styles.xsheet}>
                    Provide Your XL-Sheet Link:
                        </Text>
                        <TextInput style={styles.tlin}  placeholder={"Mention your XL-Sheet link here"} />
                        <View>
              <TouchableOpacity
              style={{height:57,width:190,justifyContent:"center",alignItems:"center",borderRadius:15,backgroundColor:"#5364b2",marginTop:75}}
              onPress={()=> navigation.navigate('Preview')}
              >
                       <Text style={{color:"white",fontWeight:"bold",fontSize:20}}> Start Scanning</Text>
              </ TouchableOpacity> 
              </View>
        </ View>
    )
}
export default Edgs
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
etg:{
    fontFamily:'Inter',
    fontSize:25,
    marginTop:-80,
    marginLeft:-81,
    fontWeight: 'bold',
    color: '#5F5FE3',
    textDecorationLine: 'underline'
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
     width:506,
     height:370,
     marginTop:10
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