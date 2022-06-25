import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,FlatList ,Image, Button} from 'react-native';
import Text_Size from './Textscaling';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Svg, {
    Use,
    
} from 'react-native-svg';

import Svgimg from '../imgs/boy1.svg';


const Dte = ({ navigation }) => {
    const DATA = [
        {
          id: 'bd7a',
          title: 'First Item',
        },
        {
          id: '3ac',
          title: 'Second Item',
        },
        {
          id: '586',
          title: 'Third Item',
        },
        {
            id: 'bd7asd',
            title: 'First Isstem',
          },
          {
            id: '3acs',
            title: 'Second Itssem',
          },
          {
            id: '58a6',
            title: 'Thiqrd Item',
          },
          {
            id: 'bd7as',
            title: 'First Itssem',
          },
          {
            id: '3aac',
            title: 'Second Itssem',
          },
          {
            id: '58aa6',
            title: 'Third Isswtem',
          },
      ];

      const renderItem = (item) => {
       // console.log(item,"**")
        
        return(
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={console.log('clicked')}>
                <View style={Tempstyles.tempItem}>

                    <View style={Tempstyles.tempImgView}>
                        <Image source={require('../imgs/account-icon-25499.png')} style={{ width: wp('40%'), height: hp('30%')}}  resizeMode="contain" />

                    </View>
                    <View style={Tempstyles.tempTextView}>
                         <Text style={{color:'black'}}>id : {item['item']['id']} </Text>
                         <Text style={{color:'black'}}>Name : {item['item']['title']}</Text>

                    </View>
                    <View style={Tempstyles.tempNavigate}>

                    </View>


                </View>
                
            </TouchableOpacity>
        )
      }
    return (

        <View style={styles.container}>
            <View style={styles.part_1}>
                <View style={styles.circleshape}></View>

            </View>
            <View style={styles.part_2}>
                <View style={styles.part_2_1}>
                    <View style={styles.csp}></View>
                </View>
                <View style={styles.part_2_2}>
                    <View>
                        <Svgimg height={hp('90%')} width={wp('90%')}/>
                    </View>
                </View>

            </View>
            <View style={styles.part_3}>
                <Text style={styles.dt}>
                    Predefined Templates for you!..
                </Text>

            </View>
            <View style={styles.part_4}>

                <View style={styles.temlets}>
                     <FlatList
                     data={DATA}
                     renderItem={renderItem}
                     keyExtractor={item => item.id}
                     horizontal={true}

                     />

                </View>


            </View>
            <View style={styles.part_5}>
                <TouchableOpacity
                    style={styles.proceed}
                    onPress={() => navigation.navigate('Edging')}
                >
                    <Text style={{ color: "white", fontWeight: "bold", fontSize:Text_Size.Text_size_Type_0 }}>proceed</Text>
                </ TouchableOpacity>

            </View>

        </View>

      

    )
}

export default Dte
const styles = StyleSheet.create({
    part_1: {
        flex: 0.1,
        

    },
    part_2: {
        flex: 0.35,
        flexDirection: 'row',
       // backgroundColor:'green'

    },
    part_3: {
        flex: 0.05,
        alignItems:'center',
        
    },
    
    part_4: {
        flex: 0.45,
        alignItems:'center',
       // backgroundColor:'red'
        

    },

    temlets:{
        
       // backgroundColor:'#5364b2',
        borderRadius:wp('7%'),
        height:hp('42%'),
        width:wp('89%'),
        
        
        

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
        height:hp('40%'),
        width:wp('40%'),
        marginRight:20
        
    },
    tempImgView:{
        flex:0.6,
       // backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'

    },
    tempTextView:{
        flex:0.3,
       // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'

    },
    tempNavigate:{
        flex:0.1
    }
    

});