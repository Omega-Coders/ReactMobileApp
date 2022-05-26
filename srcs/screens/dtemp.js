import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Text_Size from './Textscaling';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Svg, {
    Use,
    Image,
} from 'react-native-svg';
import {width_screen,height_screen} from './Dimensions'
const wh=(wp('1%')*hp('1%'))/100

import Svgimg from '../imgs/boy1.svg';

const size = (width_screen*height_screen)

const Dte = ({ navigation }) => {
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
        flex: 0.1

    },
    part_2: {
        flex: 0.45,
        flexDirection: 'row',

    },
    part_3: {
        flex: 0.1,
        alignItems:'center',
        
    },
    
    part_4: {
        flex: 0.25,
        alignItems:'center',
        

    },

    temlets:{
        
        backgroundColor:'#5364b2',
        borderRadius:wp('10%'),
        height:hp('22%'),
        width:wp('89%'),

    },
    part_5: {
        flex: 0.1,
        
        alignItems:'center',

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
            width:wh*270,
            height:wh*270,
            borderRadius:wh*129,
            backgroundColor: '#5364b2',
             marginTop:wh*-90,
             marginLeft:wh*-60
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