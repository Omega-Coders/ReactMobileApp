import React, { Component,useEffect,useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button ,Image,ActivityIndicator,LogBox,Alert} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import CustomButton from './CustomButton';
import ImageSize from 'react-native-image-size'
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import RNGeniusScan from '@thegrizzlylabs/react-native-genius-scan';
import ImagePicker from 'react-native-image-crop-picker';
import Action from './functions/Action';

import RNTextDetector from "rn-text-detector";
import Text_Size from './screens/Textscaling';
import { useRoute } from '@react-navigation/native';



const CollectImage = ({ navigation }) => {
      
  const route = useRoute();
  const tempName = route.params.tempName; 
  const abc = `https://radiant-anchorage-70390.herokuapp.com/cropper/get-by-template-name/${tempName}`;

    
    const Scanner = ()=>{
        
        RNGeniusScan.setLicenceKey('533c500652570809005d075539525a0e4a1051055a5742493d070250060008065a0351')
        .then(() => {
          return RNGeniusScan.scanWithConfiguration({  multiPage: false,defaultFilter: 'none' })
  
        })
        .then((result) => {
            // Do something with the enhanced image
           // console.log('****',result,'**');

                    
  
            const filepath =result['scans'][0]['enhancedUrl'];
           // console.log('**',typeof(filepath),'**');
            Action(navigation,filepath,data);
            navigation.navigate('Loading',{text:'Almost Done...'});

            
            
         
        })
        .catch((err)=>{
          console.log(err);
        })
        
    
      }
      const openGallery = ()=>{
        
        ImagePicker.openPicker({
          
          cropping: false,
          freeStyleCropEnabled:true,
          
        }).then(image => {
         // console.log(image);
          


          RNGeniusScan.setLicenceKey('533c500652570809005d075539525a0e4a1051055a5742493d070250060008065a0351')
                .then(() => {
                    return RNGeniusScan.scanWithConfiguration({ source: 'image', sourceImageUrl: image['path'],defaultFilter: 'none' })
                })
                .then((result) => {
                    // Do something with the enhanced image
                   // console.log('****',result,'**');

                    
  
                const filepath =result['scans'][0]['enhancedUrl'];
              // console.log('**',filepath,'**');
               
              // console.log(filepath)
                
                Action(navigation,filepath,data)
                
                navigation.navigate('Loading',{text:'Almost Done...'});

                
               
                
        
          
        }).catch(err=>{
            console.log(err);
        });
         
        }).catch(err=>{
          console.log('picker is stopped',err);
        })

        
      
      }
      const [isLoading,setLoading] = useState(true)
      const [data,setData] = useState(null)
      const corData= {}

      


      useEffect(()=>{
        fetch(`https://radiant-anchorage-70390.herokuapp.com/cropper/get-by-template-name/${tempName}`)
        .then((res)=>res.json())
        .then((jres)=>{
          
          setData(jres.det)
          //console.log(data);
          setLoading(false);
         // console.log('1')
          
         
         // console.log(jres.detail);
          
          //console.log(data)
          
        })
        
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
            <Text style={{color:'black'}}>Loading Keys</Text>
            </View>
          )
        }
      
      else{
        // corData= data.find(element => element['templateName']==tempName);
        //console.log(found)
        return (
      <View style={styles.container}>
           <View style={styles.part_0}>
                          <View style={styles.part_0_1}>
                                <View style={styles.circle}>
                                </View>
                           </View>
                    </View>
           <View style={styles.po3}>
                   <View style={styles.po3_1}>
                      <TouchableOpacity style={styles.df}
                         onPress={Scanner}>
                         <Text style={styles.def}>
                           Camera
                         </Text>
                      </TouchableOpacity>
                   </View>
                   <View style={styles.po3_2}>
                      <TouchableOpacity onPress={openGallery} style={styles.cu} >
                         <Text style={styles.cus}>
                           Gallery
                         </Text>
                      </TouchableOpacity>
                      <Text style={styles.cus}>
                          {tempName}
                         </Text>
                   </View>
                </View>
      </View>
  )
        }
}

export default CollectImage
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
  container:{
     flex:1,
      flexDirection:'column',
      
     // backgroundColor:'red'
  },
  part_0:{
      flex:0.2,
     // backgroundColor:"yellow"
  },
  part_0_1:{
    flex:1,
    //backgroundColor:"green"
  },
  circle:{
     flex:0.9,
     width: wp("64%"),
     height: hp("30%"),
     marginTop:hp("-20%"),
     marginLeft:wp("-20%"),
     borderRadius:  wp("150/2%"),
     backgroundColor:'#6495ED',
  },
  po3:{
      flex:0.8,
     // flexDirection:"",
     // backgroundColor:"red",
     justifyContent:'center',
     alignSelf:'center'
    
      },
      po3_1:{
         flex:0.5,
        //backgroundColor:"blue",
        marginLeft:wp("5%"),
        marginTop:hp("10%"),
      },
      po3_2:{
         flex:0.5,
        // backgroundColor:"green",
         marginLeft:wp("5%"),
         marginTop:hp("-39%")
      },
      df:{
        backgroundColor:"#6495ED",
         width:wp("30%"),
         height:hp("6%"),
         borderRadius:15,
         marginTop:hp("3%"),
         marginLeft:wp("2.5%")
      },
      cu:{
         backgroundColor:"#6495ED",
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
      });
const dataf =[{
  "coordinates": {
  "x": 0.516121332546533,
  "y": 0.28749219109030333,
  "w": 0.37885094567927347,
  "h": 0.03177545144896194
  },
  "_id": "62b33ce05d13528bd83debe3",
  "templateName": "VIT MID-1",
  "key": "Date",
  "regex": "string",
  "__v": 0
  }]

const data1 = [
  {
          "coordinates": {
          "x": 0.19974044940438687,
          "y": 0.28295283334065474,
          "w": 0.09874308713570168,
          "h": 0.04388039664826179
          },
          "_id": "62b33c825d13528bd83debdf",
          "templateName": "VIT MID-1",
          "key": "Subject",
          "regex": "string",
          "__v": 0
  },
  {
  "coordinates": {
  "x": 0.516121332546533,
  "y": 0.22696754429167118,
  "w": 0.3748205861737651,
  "h": 0.03934101249932418
  },
  "_id": "62b33cb55d13528bd83debe1",
  "templateName": "VIT MID-1",
  "key": "Reg N",
  "regex": "string",
  "__v": 0
  },
  {
  "coordinates": {
  "x": 0.516121332546533,
  "y": 0.28749219109030333,
  "w": 0.37885094567927347,
  "h": 0.03177545144896194
  },
  "_id": "62b33ce05d13528bd83debe3",
  "templateName": "VIT MID-1",
  "key": "Date",
  "regex": "string",
  "__v": 0
  },
  {
  "coordinates": {
  "x": 0.7418197420884937,
  "y": 0.17854777669411628,
  "w": 0.10680378856746832,
  "h": 0.027236093699313364
  },
  "_id": "62b33d035d13528bd83debe5",
  "templateName": "VIT MID-1",
  "key": "Branch",
  "regex": "string",
  "__v": 0

  },
  {
  "coordinates": {
  "x": 0.19369496288387456,
  "y": 0.22242816014273356,
  "w": 0.22569844470046083,
  "h": 0.05901157154756434
  },
  "_id": "62b33db45d13528bd83debe8",
  "templateName": "VIT MID-1",
  "key": "Name",
  "regex": "string",
  "__v": 0
  }
  ]


  const data2 = [
    {
    "coordinates": {
    "x": 0.5241723175785967,
    "y": 0.3267002171257517,
    "w": 0.3827285029461994,
    "h": 0.09313820645571574
    },
    "_id": "62b694434b31ad105b9656a9",
    "templateName": "aaaaa",
    "key": "sign",
    "regex": "string",
    "__v": 0
    },
    {
    "coordinates": {
    "x": 0.10115660331099506,
    "y": 0.3238344225277196,
    "w": 0.2961110193372349,
    "h": 0.09600400105374786
    },
    "_id": "62b6945b4b31ad105b9656b1",
    "templateName": "aaaaa",
    "key": "additionals",
    "regex": "string",
    "__v": 0
    },
    {
    "coordinates": {
    "x": 0.5261866988767172,
    "y": 0.22496462687593966,
    "w": 0.38071412164807894,
    "h": 0.02865791976247047
    },
    "_id": "62b6945b4b31ad105b9656b3",
    "templateName": "aaaaa",
    "key": "reg No",
    "regex": "string",
    "__v": 0
    }
    
    ]