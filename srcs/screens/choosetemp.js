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
   StatusBar,
   SafeAreaView
 } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Text_Size from './Textscaling';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {width_screen,height_screen} from './Dimensions/';
import Svgimg from '../imgs/chooseimg.svg';
import TextAnimator from '../screens/TextAnimator';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';


const STYLES=['default','dark-content','light-content'];
const TRANSITIONS = ['fade','slide','none'];

const Tempchoosen = ({ navigation }) => {
   const route = useRoute();
   const [hidden,setHidden]=useState(false);
   const [StatusBarStyle,setStatusBarStyle]=useState(STYLES[0]);
   const [StatusBarTransition, setStatusBarTransition]=useState(TRANSITIONS[0]);
   return (
      <>
      <StatusBar
      animated={true}
      backgroundColor="white"
      barStyle={StatusBarStyle}
      showHideTransition={StatusBarTransition}
      hidden={hidden} 
       />
         <SafeAreaView style={styles.container}>
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
                  <Svgimg height={hp('42%')} width={wp('98%')} />
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
            </SafeAreaView>
         </>

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
                                       Custo
                                       </Text> 
                                       </TouchableOpacity>
                              </View>
                                       </View>
                   </View>
                        </ModalPoup>
          <View style={styles.container}>
                        <View style={styles.p1}>
                               <View style={styles.p1_1}>
                                    <View style={styles.circleshape}></View>
                               </View>
                               <View style={styles.p1_2}>
                                    <View style={styles.csp}></View>
                               </View>
                        </View>
                        <View style={styles.p2}>
                           
                                 <Text style={styles.t1}>Welcome Back</Text>
                           
                             
                                    <Text style={styles.t2}>
                                          Choose Templates as you prefered
                                    </Text>
                              
                        </View>
                        <View style={styles.p3}>
                             <View style={styles.part_3_1}>
                               <Svgimg  height={hp('35%')} width={wp('100%')}/>
                             </View>
                               <View style={styles.bun}>
                                   <View style={styles.chb}>
                                 <Button title="Choose Template" onPress={() => setVisible(true)} color="#5364b2" />
                                 </View>
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
     // flexDirection:"column"
   },
   opp:{
    marginTop:wp("30%"),
    backgroundColor:"#5364b2"
   },
   p1:{
      flex:0.27,
     // backgroundColor:"green",
      flexDirection:"column"
   },
   p1_1:{
     flex:0.5,
    // backgroundColor:"maroon"
   },
   p1_2:{
     flex:0.5,
    // backgroundColor:"blue"
   },
   circleshape: {
      width: wp("45%"),
      height: hp("20%"),
      borderRadius:  wp("270%"),
      backgroundColor: '#5364b2',
      marginTop:hp("-6%"),
      marginLeft:wp("-15%")
     /* width: wp * 270,
      height: hp * 270,
      borderRadius: wp * 129,
      backgroundColor: '#5364b2',
      marginTop: wp * -90,
      marginLeft: wp * -60*/
      },
   csp:{
         width: wp("45%"),
         height: hp("15%"),
         borderRadius:  wp("90%"),
         backgroundColor: '#5364b2',
         marginTop:hp("-5%"),
         marginLeft:wp("-30%")
      },
      chb:{
       flex:0.5,
       width:wp("39%"),
     //  backgroundColor:"green",
       marginTop:hp("-13%")
      },
   opp1:{
     //flex:1,
     marginTop:wp("9%"),
     width:wp("45%"),
     marginLeft:wp("27%"),
    //backgroundColor:"red"
   },
   part_3_1:{
      flex:0.7,
     // backgroundColor:"green",
      marginTop:wp('0%'),
      alignSelf:"center"
     },
   po1:{
  // flex:1
   },
   po2:{
     //flex:0.4,
    // backgroundColor:"red"
   },
   choose:{
      fontSize: Text_Size.Text_size_Type_5, 
      marginTop:wp("4%"),
      textAlign: 'center',
      fontWeight:"bold",
      color:"black"
   },
   img:{
    flex:0.7,
   // backgroundColor:"green"
   },
   bun:{
    flex:0.3,
  // backgroundColor:"red",
   
    alignSelf:"center",
    marginLeft:wp("0%"),
   },
   po3:{
   flexDirection:"row"
   },
   po3_1:{
      flex:0.5,
     //backgroundColor:"blue",
     marginTop:wp("0%"),
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
      marginTop:hp("3%"),
      marginLeft:wp("2.5%")
   },
   cu:{
      backgroundColor:"#5364b2",
      width:wp("30%"),
      height:hp("6%"),
      borderRadius:15,
      marginTop:hp("3%"),
      marginLeft:wp("2.5%")
   },
   def:{
      flex:1,
    color:"white",
    marginLeft:wp("0%"),
    marginTop:hp("1%"),
    alignSelf:"center",
    fontSize:Text_Size.Text_size_Type_1
   },
   cus:{
      flex:1,
      color:"white",
      marginTop:hp("1%"),
      marginLeft:wp("0%"),
      alignSelf:"center",
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
   p2:{
      flex:0.13,
     // backgroundColor:"yellow",
      flexDirection:"column"
   },
   p2_2:{
      flex:0.6,
      marginLeft:wp("5%"),
      backgroundColor:"#ffffff",
     // backgroundColor:"red",
      marginTop:hp("0%")
   },
   p2_2_1:{
      flex:0.4,
      backgroundColor:"#ffffff",
     // backgroundColor:"green",
      marginLeft:wp("15%"),
      justifyContent:"center",
      marginTop:hp("1%")
         },
   p3:{
     flex:0.6,
    // backgroundColor:"pink",
    
   },
   pb1:{
  // backgroundColor:"green",
   marginTop:hp("0%")
   },
   p3_1:{
      flex:0.7,
      backgroundColor:"#ffffff",
     // backgroundColor:"red",
       marginTop:hp("0%"),
   },
   cbn:{
      flex:0.4,
      //backgroundColor:"#ffffff",
     // backgroundColor:"blue",
      marginTop:hp("-13%"),
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
     // backgroundColor:"green"
   },
   p4_1:{
   flex:0.9,
   backgroundColor:"#ffffff",
   alignItems:"center",
   marginTop:hp("1%"),
   marginLeft:wp("10%")
   },
   p5:{
      
     // backgroundColor:"yellow",
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
    marginTop:hp("1.5%"),
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
      marginTop:hp("1.5%"),
      backgroundColor:"#6C63FF"
     },

   t1:{
     fontSize:Text_Size.Text_size_Type_8,
     fontWeight:"bold",
     color:"#6C63FF",
     marginTop:hp("0%"),
     marginLeft:wp("8%"),
     flex:0.6,
    // backgroundColor:"blue"
    
   },
   t2:{
      flex:0.4,
     // backgroundColor:"red",
      fontSize:Text_Size.Text_size_Type_4,
      fontWeight:"bold",
      color:"black",
      justifyContent:"center",
      marginTop:hp("-3%"),
      marginLeft:wp("19%"),
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