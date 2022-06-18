import React, { Component } from 'react';
//import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {
   View,
   StyleSheet,
   Button,
   Modal,
   Image,
   Text,
   TouchableOpacity,
   Animated,
 } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Text_Size from './Textscaling';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {width_screen,height_screen} from './Dimensions/';
import Svgimg from '../imgs/chooseimg.svg';
import TextAnimator from '../screens/TextAnimator';

const Tempchoosen = ({ navigation }) => {
   const route = useRoute();
   return (
      <View style={styles.container}>
            <View style={styles.p1}>
            </View>
            <View style={styles.p2}>
                  <View style={styles.p2_1}>
                  </View>
                  <View style={styles.p2_2}>
                    
                           <View style={styles.p2_2_1}>
                         <Text style={styles.t2}>
                        Choose Templates as per Your preference
                     </Text>
                     </View>
                  </View>
            </View>
            <View style={styles.p3}>
               <View style={styles.p3_1}>
               <Svgimg height={hp('42%')} width={wp('98%')}/>
               </View>
            </View>
            <View style={styles.p4}>
                  <View style={styles.p4_1}>
                     <Text style={styles.t3}>
                              Choose Templates
                           </Text> 
                           </View>
                  </View>


            <View style={styles.p5}>
           
            <View style={styles.p5_1}> 
                  <View style={styles.b1}>
                  
                  <TouchableOpacity style={styles.p5_1_1} 
                  onPress={() => navigation.navigate('DefaultTemplates')}>
                  <Text style={styles.t4}>
                       Default
                     </Text> 
                     </TouchableOpacity>
                  </View>

            </View>
            <View style={styles.p5_2}> 
            <View style={styles.b2}>
            <View style={styles.p5_1_2}>
            <Text style={styles.t5}>
                      Custom
                     </Text> 
            </View>
         </View>           
            </View>
            </View>
      </View>

   )
}
const ModalPoup = ({visible, children}) => {
   const [showModal, setShowModal] = React.useState(visible);
   const scaleValue = React.useRef(new Animated.Value(0)).current;
   React.useEffect(() => {
     toggleModal();
   }, [visible]);
   const toggleModal = () => {
     if (visible) {
       setShowModal(true);
       Animated.spring(scaleValue, {
         toValue: 1,
         duration: 300,
         useNativeDriver: true,
       }).start();
     } else {
       setTimeout(() => setShowModal(false), 200);
       Animated.timing(scaleValue, {
         toValue: 0,
         duration: 300,
         useNativeDriver: true,
       }).start();
     }
   };
   return (
     <Modal transparent visible={showModal}>
       <View style={styles.modalBackGround}>
         <Animated.View
           style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
           {children}
         </Animated.View>
       </View>
     </Modal>
   );
 };
 
 const App= ({ navigation }) => {
   const [visible, setVisible] = React.useState(false);
   return (
      
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <ModalPoup visible={visible}>
         <View style={{alignItems: 'center'}}>
           <View style={styles.header}>
             <TouchableOpacity onPress={() => setVisible(false)}>
             <Image
                source={require('../imgs/x.png')}
                style={{height: 30, width: 30}}
              />
             </TouchableOpacity>
           </View>
         </View>

                  <View style={styles.po1}>
                        <View style={styles.po2}>
                           <Text style= {styles.choose}>
                           Choose Accordingly
                           </Text>
                        </View>
                        <View style={styles.po3}>
                           <View style={styles.po3_1}>
                              <TouchableOpacity style={styles.df}
                                    onPress={() => navigation.navigate('DefaultTemplates')}>
                                    <Text style={styles.def} >
                                       Default
                                       </Text> 
                                       </TouchableOpacity>
                              </View>
                           <View style={styles.po3_2}>
                              <TouchableOpacity style={styles.cu}>
                                    <Text style={styles.cus}>
                                       Custom
                                       </Text> 
                                       </TouchableOpacity>
                              </View>
                                       </View>
                   </View>
                        </ModalPoup>
          <View style={styles.container}>
            <View style={styles.p1}>
                        <View style={styles.circleshape}></View>
                        <View style={styles.csp}></View>
            </View>
            <View style={styles.p2}>
                
                  <View style={styles.p2_2}>
                 <TextAnimator
                     content='For the things we have to learn before we can do them, we learn by doing them. ️️️️️️REACT NATIVE ❤️️️️'
                     textStyle={styles.textStyle}
                     style={styles.containerStyle}
                     duration={500}
                     onFinish={_onFinish}
                     />
                     </View>
                     <View style={styles.p2_2_1}>
                         <Text style={styles.t2}>
                        Choose Templates as you prefered
                     </Text>
                     </View>
                  
            </View>
            <View style={styles.p3}>
               <View style={styles.p3_1}>
               <Svgimg height={hp('42%')} width={wp('98%')}/>
               </View>
               <View style={styles.cbn}>
               <Button title="Choose Template" onPress={() => setVisible(true)} color="#5364b2" />
               </View>
              
            </View>
                  </View>
 
                     </View>
   );
 };

//export default Tempchoosen
export default App
const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:"#ffffff",
      flexDirection:"column"
   },
   opp:{
    marginTop:wp("30%"),
    backgroundColor:"#5364b2"
   // width:wp("30%")
   },
   circleshape: {
      flex:0.5,
      width: wp("40%"),
      height: hp("20%"),
      borderRadius:  wp("270%"),
      backgroundColor: '#5364b2',
      marginTop:wp("-17%"),
      marginLeft:wp("-18%")
     /* width: wp * 270,
      height: hp * 270,
      borderRadius: wp * 129,
      backgroundColor: '#5364b2',
      marginTop: wp * -90,
      marginLeft: wp * -60*/
      },
      csp:{
         flex:0.5,
         width: wp("30%"),
         height: hp("10%"),
         borderRadius:  wp("170%"),
         backgroundColor: '#5364b2',
         marginTop:wp("-10%"),
         marginLeft:wp("-18%")
      },
   opp1:{
     //flex:1,
     marginTop:wp("9%"),
     width:wp("45%"),
     marginLeft:wp("27%"),
    // backgroundColor:"red"
   },
   po1:{
   flex:1
   },
   po2:{
     flex:0.4,
    // backgroundColor:"red"
   },
   choose:{
      fontSize: 20, 
      marginTop:wp("5%"),
      textAlign: 'center',
      fontWeight:"bold",
      color:"black"
   },
   po3:{
     flex:0.6,
     flexDirection:"row",
    // backgroundColor:"yellow"
   },
   po3_1:{
      flex:0.5,
    // backgroundColor:"blue"
   },
   po3_2:{
      flex:0.5,
      //backgroundColor:"green"
   },
   df:{
     backgroundColor:"#5364b2",
      width:wp("30%"),
      height:hp("6%"),
      borderRadius:15,
      marginTop:wp("8%"),
      marginLeft:wp("2.5%")
   },
   cu:{
      backgroundColor:"#5364b2",
      width:wp("30%"),
      height:hp("6%"),
      borderRadius:15,
      marginTop:wp("8%"),
      marginLeft:wp("2.5%")
   },
   def:{
    color:"white",
    marginLeft:wp("5%"),
    marginTop:wp("2%"),
    fontSize:Text_Size.Text_size_Type_1
   },
   cus:{
      color:"white",
      marginTop:wp("2%"),
      marginLeft:wp("5%"),
      fontSize:Text_Size.Text_size_Type_1
     },
   modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: wp('80%'),
      height:hp('30%'),
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 30,
      borderRadius: 20,
      elevation: 20,
    },
    header: {
      width: '100%',
      height: 40,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
   p1:{
      flex:0.2,
      //backgroundColor:"red"
   },
   p2:{
      flex:0.13,
     // backgroundColor:"yellow",
      flexDirection:"column"
   },
   p2_2:{
      flex:0.5,
      marginLeft:wp("5%"),
      backgroundColor:"#ffffff",
   },
   p2_2_1:{
      flex:0.5,
      backgroundColor:"#ffffff",
      marginLeft:wp("15%"),
      justifyContent:"center",
      marginTop:wp("1%")
  },
   p3:{
     flex:0.77,
   // backgroundColor:"pink",
    flexDirection:"column"
   },
   p3_1:{
      flex:0.87,
      //backgroundColor:"#ffffff",
     // backgroundColor:"red"
   },
   cbn:{
    flex:0.03,
    //backgroundColor:"#ffffff",
   // backgroundColor:"blue",
    marginTop:wp("-379%"),
    width:wp("45%"),
    marginLeft:wp("25%"),
   },
   i1:{
    flex:1,
    width:wp("100%"),
    height:hp("100%")

   },
   p4:{
      //flex:0.1,
      backgroundColor:"green"
     
   },
   p4_1:{
   flex:0.9,
   backgroundColor:"#ffffff",
   alignItems:"center",
   marginTop:wp("1%"),
   marginLeft:wp("10%")
   },
   p5:{
      
      backgroundColor:"yellow",
      flexDirection:"row"
   },
   
   p5_1:{
      flex:0.5,
   backgroundColor:"#ffffff"
   },
   p5_1_1:{
    flex:0.6,
    width:wp("40%"),
    marginLeft:wp("4%"),
    marginTop:wp("1.5%"),
   //backgroundColor:"#6C63FF"
   },
   p5_2:{
      flex:0.5,
      backgroundColor:"#ffffff"
   },
   p5_1_2:{
      flex:0.6,
      width:wp("30%"),
      marginLeft:wp("5%"),
      marginTop:wp("1.5%"),
      backgroundColor:"#6C63FF"
     },

   t1:{
      fontSize:Text_Size.Text_size_Type_8,
     fontWeight:"bold",
     color:"#6C63FF",
    
   },
   t2:{
      fontSize:Text_Size.Text_size_Type_4,
      fontWeight:"bold",
      color:"black",
      justifyContent:"center",
      marginTop:wp("-8%")
   },
   t3:{
      flex:1,
      fontSize:Text_Size.Text_size_Type_5,
      fontWeight:"bold",
      color:"#6C63FF",
      marginLeft:wp("-50%"),
    textDecorationLine: 'underline',
   },
   t4:{
     // flex:1,
    fontSize:Text_Size.Text_size_Type_1,
    marginTop:wp("-0.2"),
    marginLeft:wp("6.5%"),
    fontWeight:"bold",
    color:"#ffffff",
   },
   t5:{
      flex:1,
      fontSize:Text_Size.Text_size_Type_1,
      alignSelf:"center",
      fontWeight:"bold",
      color:"#ffffff",
      marginLeft:wp("1.5%"),
      marginTop:wp("-0.2")
     },
   b1:{
      flex:0.33,
      width:wp("40%"),
      height:hp("30%"),
      marginTop:hp("4%"),
      borderRadius:wp("50%"),
      alignSelf:"center",
      backgroundColor:"#6C63FF"
   },
   b2:{
      flex:0.33,
      width:wp("40%"),
      height:hp("30%"),
      marginTop:hp("4%"),
      borderRadius:wp("50%"),
      alignSelf:"center",
      backgroundColor:"#6C63FF"
   }
});
//this