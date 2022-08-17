/*import React, { Component,Image,View ,Text} from 'react'
import styles from './Styles' */

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import React, { Component ,useState} from 'react'
import {Image,Modal, StyleSheet, View, Alert ,Button,Text,Dimensions,Pressable, TouchableOpacity, TextInput,ImageBackground} from 'react-native'
import CustomButton from './CustomButton';
//import Svg,{Image,Rect, Defs} from 'react-native-svg'


const windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

import Svgimg from './imgs/tick.svg';
import {LogBox} from "react-native";
import { useRoute } from '@react-navigation/native';
LogBox.ignoreLogs([
"exported from 'deprecated-react-native-prop-types'.",
])



import Award from './imgs/boy1.svg';
import { SafeAreaView } from 'react-native-safe-area-context';

import writeExcel from './functions/writeExcel';
import appendExcel from './functions/appendExcel';


export default function ImageDisplay({navigation}){
  const [modalVisible, setModalVisible] = useState(false);
  const [itemOcr, setitemOcr] = useState({});
  const [n_text,setn_text] = useState('-');

  const route = useRoute();
  const totalData = route.params.tdata;
  const img = route.params.path
  const Imgwidth = route.params.imgW
  const Imgheight = route.params.imgH
  const xldata = []
  xldata.push(route.params.xldata)

  const c_img = 'file:///data/user/0/com.scanapp/cache/ReactNative_cropped_image_3574649769686842536.jpg'

  //image display
      // console.log(windowWidth,windowHeight)
      // const Imgwidth = 2645
      // const Imgheight = 4826
       
        // const k=(windowHeight/100)*10
        // windowHeight=windowHeight-k

      const v_scale = windowHeight/Imgheight
      const h_scale =windowWidth/Imgwidth

      const x = (v_scale<h_scale)?v_scale:h_scale;

      //console.log(x,v_scale,h_scale)

     const  Svgheight = (Imgheight*x).toString()+"px"
     const  Svgwidth = (Imgwidth*x).toString()+"px"

  const write =()=>{

    writeExcel(xldata);
  
   } 
  
   const append = () =>{
    appendExcel(xldata);
   }

   //pop-up
   
   const popup =()=>{
    console.log('clicke')
    return(

      <View>
        
      </View>

    )
   }
  



    return(
      <SafeAreaView>

      
      

      <View style={styles.container}>
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        style={{blurRadius:1}}
        onRequestClose={() => {
         // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
        <Text style={styles.modalText}>Croped Image</Text>

        <Image source={{uri:itemOcr['crop_img']}} style={{width: '80%', height: '20%',resizeMode:'contain'}}>
              </Image>
          <View style={styles.modalView}>
            <Text style={{color:'black',marginBottom:7}}>
              Predicted Text :
            </Text>
            <TextInput style={styles.textInput} multiline={true} defaultValue={itemOcr["OCRResp"]}onChangeText={new_text=>setn_text(new_text)} color='black'>

            </TextInput>
            
            <View style={{marginTop:10,}}>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onTouchStart={() => {setModalVisible(!modalVisible);itemOcr["OCRResp"]=n_text;console.log(itemOcr);xldata[0][itemOcr["key"]]=n_text}}
                >
                  <Text style={styles.textStyle}>Done</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      
        <View >
          <View style={{height:Imgheight*x,width:Imgwidth*x,backgroundColor:'green',}}>
            <ImageBackground source={{uri:img}} style={{width: '100%', height: '100%',backgroundColor:'black',resizeMode:'contain',}}>
            {
              totalData.map((item)=>{
                return(
                  <View key={item['_id']} >
                     
                     <Pressable onPress={() =>{ setitemOcr(item);setModalVisible(!modalVisible);setn_text(item["OCRResp"])}}>

                        <View style={styles.box({x:(item['coordinates']['x']*(Imgwidth*x)),y:(item['coordinates']['y']*(Imgheight*x)),w:item['coordinates']['w']*(Imgwidth*x),h:item['coordinates']['h']*(Imgheight*x)})} >
                        <Text style={{color:'black',alignSelf:'center'}}>
                          {item["OCRResp"]}
                        </Text>
                        
                        </View>
                     </Pressable>

                  </View>
            
                )
              })
       }
            </ImageBackground>
          </View>
              <View style={styles.btn}>

              <CustomButton style={{backgroundColor:'#5364b2'}} title={'Done'} onPressFunction={write} ></CustomButton>
              </View>

        </View>
      </View>
     

      </SafeAreaView>
      
    //   <View style={styles.container}>
    //   <View style={{}}>
       

        
          
    //   <Svg   width ={Svgwidth} height={Svgheight} onPress={()=>console.log('pressed')}>
    //   <Image
    //      width='100%'
    //      height="100%"
      
    //   //  preserveAspectRatio="xMidYMid slice" 
    //     opacity="1"
    //     href={img}
    //     clipPath="url(#clip)"
       
    //   />
     
      //  {
      //   totalData.map((item)=>{
      //      return(
      //       <Pressable onPress={popup} key={item['_id']}>
      //       <View key={item['_id']} onPress={popup}>

      //             <View style={styles.box({x:(item['coordinates']['x']*(Imgwidth*x)),y:(item['coordinates']['y']*(Imgheight*x)),w:item['coordinates']['w']*(Imgwidth*x),h:item['coordinates']['h']*(Imgheight*x)})} onPress={popup}>
      //             <Text style={{color:'black',alignSelf:'center'}}>
      //               {item["OCRResp"]}
      //             </Text>
                  
      //             </View>

      //        </View>
      //        </Pressable>
      
      //     )
      //    })
      //  }
      

    //   </Svg>
    //   </View>
      
      
    //      <View style={{}}>
    //     <CustomButton style={{backgroundColor:'#5364b2'}} title={'Done'} onPressFunction={write} ></CustomButton>
    //     </View>

        
    // </View>
  
  
      
     
      // <ImageBackground source={{uri:img}} style={{width: '100%', height: '100%',backgroundColor:'white'}}resizeMode='stretch'>
      //   <View style={{flex:1,position:'relative'}}>

       
      // {/* <View>
      //   <Text style={{color:'black',position:'absolute',}}>mani'weuefhdshuwffiuhfiuhfiuh</Text>
        
      // </View> */}
      
      // {
      //   totalData.map((item)=>{
      //     return(
      //       <View key={item['_id']}>
      //       <View style={styles.box({x:(item['coordinates']['x']*wp(100)),y:(item['coordinates']['y']*hp(110)),w:item['coordinates']['w']*wp(100),h:item['coordinates']['h']*hp(100)})} >
      //       <Text style={{color:'black'}}>
      //         {item["OCRResp"]}
      //       </Text>
      //       </View>
      //       </View>
      
      //     )
      //   })
      // }

      //   <View style={{flexDirection:'column-reverse',alignSelf:'center',justifyContent:'center',marginTop:hp(87)}}>
      //   <CustomButton style={{backgroundColor:'#5364b2'}} title={'Done'} onPressFunction={write} ></CustomButton>
      //   </View>
      //   </View>
      // </ImageBackground>

   

  )

}

const styles = StyleSheet.create({
  box:({x,y,w,h})=>{
    return{
      position:'absolute',
      top:y,
      left:x,
    
      width:w,
      height:h,
     // borderWidth:3,
     // borderColor:'green',
     
      zIndex:300,
      backgroundColor:'white',
      borderRadius: 10,
      
      


    } 

     
  },
  container: {
    flex:1,
     justifyContent:'center',
    alignItems:'center',
    
    backgroundColor:'green',
    blurRadius:'1'
    
    

    
  },
  img:{
    //flex:0.9,
   // backgroundColor:'green',
    
  },
  btn:{
   alignSelf:'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  modalView: {
    alignItems:'baseline',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color:'black',
    
  },
  textInput: {
    justifyContent: "center",
    alignItems: "stretch",
    height: 40,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
    //backgroundColor:'red',
    borderRadius:10

  }
})
//<Image source={require(route.params.path)} /> <Image source={require('./Default.jpg')} />

//<Image source={{uri:'file:///storage/emulated/0/DCIM/Restored/IMG20220316134958.jpg', width: 100,  height: 100}} />

