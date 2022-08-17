import React, { Component ,useEffect,useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity,FlatList ,Image, Button, ScrollView, ActivityIndicator,Alert,LogBox} from 'react-native';
import Text_Size from './Textscaling';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import Svg, {
    Use,
    
} from 'react-native-svg';

import Svgimg from '../imgs/boy1.svg';


const Dte = ({ navigation }) => {
    // const DATA = [
    //     {
    //       id: 'bd7a',
    //       title: 'First Item',
    //     },
    //     {
    //       id: '3ac',
    //       title: 'Second Item',
    //     },
    //     {
    //       id: '586',
    //       title: 'Third Item',
    //     },
    //     {
    //         id: 'bd7asd',
    //         title: 'First Isstem',
    //       },
    //       {
    //         id: '3acs',
    //         title: 'Second Itssem',
    //       },
    //       {
    //         id: '58a6',
    //         title: 'Thiqrd Item',
    //       },
    //       {
    //         id: 'bd7as',
    //         title: 'First Itssem',
    //       },
    //       {
    //         id: '3aac',
    //         title: 'Second Itssem',
    //       },
    //       {
    //         id: '58aa6',
    //         title: 'Third Isswtem',
    //       },
    //   ];
      const [isLoading,setLoading] = useState(true)
      const [data,setData] = useState(null)

      


      useEffect(()=>{
        fetch('https://radiant-anchorage-70390.herokuapp.com/cropper/get-template-image')
        .then((res)=>res.json())
        .then((jres)=>{
          setData(jres.detail)
          setLoading(false);
         // console.log('1')
          
         
         // console.log(jres.detail);
          
          //console.log(data)
          
        }).then(
         // console.log(data)

        )
        .catch((err)=>{
          console.log(err);
          Alert.alert(
            "Alert ",
            "Please Check Your Internet Connection",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
        })
        
      })
    
        if(isLoading){

          return(
            <View style={styles.load}>
            <ActivityIndicator></ActivityIndicator>
            <Text style={{color:'black'}}>Loading Templates</Text>
            </View>
          )
        }
        else{
          

        
     
      return (

        <View style={styles.container}>
            
            
            <View style={styles.part_3}>
                <Text style={styles.dt}>
                    Predefined Templates for you!..
                </Text>

            </View>
            <View style={styles.part_4}>

                <View style={styles.temlets}>
                     <ScrollView horizontal={true}>
                      {
                        
                        data.map((item)=>{
                          //console.log(item['templateImage'])
                          return(
                            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('CollectImage',{tempName:item["templateName"]})} key={item["_id"]}>
                                    <View style={Tempstyles.tempItem}>

                                        <View style={Tempstyles.tempImgView}>

                                            <Image source={{uri:item['templateImage']}} style={{ width: wp('65%'), height: hp('60%')}}  resizeMode="stretch" />
                                          

                                        </View>
                                        <View style={Tempstyles.tempTextView}>
                                            
                                            <Text style={{color:'black'}}>Name : {item["templateName"]}</Text>

                                        </View>
                                        <View style={Tempstyles.tempNavigate}>

                                        </View>


                                    </View>
                
                            </TouchableOpacity>
                            )
                        })
                      }

                     </ScrollView>

                </View>


            </View>
            <View style={styles.part_5}>
                <TouchableOpacity
                    style={styles.proceed}
                    
                >
                    <Text style={{ color: "white", fontWeight: "bold", fontSize:Text_Size.Text_size_Type_0 }}>proced</Text>
                </ TouchableOpacity>

            </View>

        </View>

      

    )
  }
}

export default Dte
const styles = StyleSheet.create({
  load:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'

  },
    
    part_3: {
        flex: 0.1,
        alignItems:'center',
       // backgroundColor:'green',
        justifyContent:'flex-end'
        
    },
    
    part_4: {
        flex: 0.85,
        alignItems:'center',
       // backgroundColor:'red',
        justifyContent:'center'
        

    },

    temlets:{
        
       // backgroundColor:'#5364b2',
        borderRadius:wp('7%'),
        height:hp('82%'),
        width:wp('95%'),
        
        
        

    },
    part_5: {
        flex: 0.1,
        
        alignItems:'center',
       // backgroundColor:'yellow'

    },
    proceed:{ height:hp('7%'),
          width: wp('35%'),
          justifyContent: "center", 
          alignItems: "center", 
          borderRadius: 20,
          backgroundColor:'#5364b2',
        fontStyle:'Inter' },
    


    container: {
        flex: 1,
        flexDirection: 'column',
        //   alignItems: 'center',
        //   marginTop: 100,
        //   padding: 20
        
    },
    circleshape: {
            // width:wp*270,
            // height:wp*270,
            // borderRadius:wp*129,
            // backgroundColor: '#5364b2',
            //  marginTop:wp*-90,
            //  marginLeft:wp*-60
    },
    part_2_1: {
        flex: 0.1
        

    },
    part_2_2: {
        flex: 0.9,
       // backgroundColor:'green'

    },

    csp: {
        
          height:hp('14%'),
          width:wp('19%'),
        // borderRadius:150/2,
        backgroundColor: '#5364b2',
        borderRadius:wp('22%'),
        backgroundColor: '#5364b2',
        marginTop:wp('-8%'),
        // marginTop:-85,
         marginLeft:wp('-4%'),
    },
    // boy: {
    //      flex:1,
    //     width: wp('90%'),
    //     height: hp('50%'),
    //       marginTop:-130,
    //       marginLeft:-10
    //},
    dt: {
          
        // fontFamily:'Inter',
         fontSize:Text_Size.Text_size_Type_1,
        // marginTop:-10,
        // marginLeft:-61,
         fontWeight: 'bold',
         color: '#5364B2', 
    },
    gup: {
        // fontFamily:'Inter',
        // fontSize:17.5,
        // marginLeft:10,
        // marginTop:3,
        // fontWeight:'Semibold',
        // color:"#353935"
    },

    xsheet: {
        //  fontSize:20,
        //  marginTop:-30,
        //  marginLeft:-89
    },
    tlin: {
        //  height:50,
        //  width:300,
        //  marginTop:18,
        //  borderWidth:1,
        //  borderColor:'black',
        //  borderRadius:20
    }
    
});

const Tempstyles = StyleSheet.create({
    tempItem:{
        backgroundColor:'#5364b2',
        borderRadius:wp('7%'),
        height:hp('80%'),
        width:wp('70%'),
        marginRight:20
        
    },
    tempImgView:{
        flex:0.9,
       // backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'

    },
    tempTextView:{
        flex:0.1,
       // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'

    },
    tempNavigate:{
        flex:0.1
    }
    

});