import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import Text_Size from './Textscaling';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Svgimg from '../imgs/xl_boy.svg';

const Edgs = ({ navigation }) => {
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
                     <Text style={styles.etg}>
                        Edging Nearer!..
                     </Text>
                     <Text style={styles.gup}>
                         Getting Things Up!..
                     </Text>

                 </View>

             </View>
             <View style={styles.part_3}>
                  <Svgimg height={hp('42%')} width={wp('98%')}/>

             </View>
             <View style={styles.part_4}>
                        <Text style={styles.xsheet}>
                            Provide Your XL-Sheet Link:
                        </Text>
                        <TextInput style={styles.tlin} placeholder={"Place Your XL-Sheet link here"} />

             </View>
             <View style={styles.part_5}>
                <TouchableOpacity
                    style={{ height: hp('9') ,width: wp('45'), justifyContent: "center", alignItems: "center", borderRadius: wp(7), backgroundColor: "#5364b2", marginTop: hp(-0.5) }}
                    onPress={() => navigation.navigate('Camera')}
                >
                    <Text style={{ color: "white", fontWeight: "bold", fontSize:Text_Size.Text_size_Type_1  }}> Start Scanning</Text>
                </TouchableOpacity>

             </View>


            
            
            
            

            
            
        </ View>
    )
}
export default Edgs
const styles = StyleSheet.create({
    part_1: {
        flex: 0.15,
       // backgroundColor:'blue',

    },
    part_2: {
        flex: 0.12,
       // backgroundColor:'orange',
        flexDirection:'row',

    },
           part_2_1:{
               flex:0.2,

           },
           part_2_2:{
               flex:0.8,

        },

    
    part_4: {
        flex: 0.2,
      //  backgroundColor:'red',

    },
    part_3: {
        flex: 0.48,
      //  backgroundColor:'green',

    },
    part_5: {
        flex: 0.12,
       // backgroundColor:'yellow',
        alignItems:'center'

    },

    container: {
        flex:1,
        //alignItems: 'center',
        
    },
    circleshape: {
        // width: 150,
        // height: 150,
        // borderRadius: 150 / 2,
        // backgroundColor: '#5364b2',
        // marginTop: -175,
        // marginLeft: -345
    },
    csp: {
        // width: 150,
        // height: 150,
        // borderRadius: 150 / 2,
        // backgroundColor: '#5364b2',
        // marginTop: -85,
        // marginLeft: -455
    },
    etg: {
        fontFamily: 'Inter',
        fontSize: Text_Size.Text_size_Type_2,
        // marginTop: -80,
           marginLeft: wp('-3%'),
       // fontWeight: 'bold',
        color: '#5F5FE3',
        textDecorationLine: 'underline'
    },
    gup: {
        fontFamily: 'Inter',
        alignContent:'center',
        fontSize: Text_Size.Text_size_Type_0,
         marginLeft: wp('20%'),
        // marginTop: 3,
       // fontWeight: 'Semibold',
        color: "#353935"
    },
    boy: {
        width: 506,
        height: 370,
        marginTop: 10
    },
    xsheet: {
        fontSize: Text_Size.Text_size_Type_1,
        // marginTop: -20,
         marginLeft: wp('3'),
        color: 'black',
        //fontWeight: "bold"

    },
    tlin: {
        height: hp('9'),
        width: wp('80'),
         marginTop: hp(2),
         borderWidth: 2,
        borderColor: 'black',
        borderRadius: 20,
        alignSelf:'center',
        alignItems:'center'

    }
});