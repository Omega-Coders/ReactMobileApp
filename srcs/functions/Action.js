

import React, { Component ,useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button ,Image,Alert} from 'react-native';
import ImageEditor from "@react-native-community/image-editor";

import RNTextDetector from "rn-text-detector";
import ImageSize from 'react-native-image-size'



 


function  Action (navigation,img,object){
   //const [path,setPath]= useState('')
   const list ={}
   var length = object.length;
   
  const crop = (data,img,width,height)=>{
    //croping data
    //console.log(data['coordinates']["x"]*width,data['coordinates']["y"]*height,'--------------   --')
    //console.log(data['coordinates']["w"]*width,data['coordinates']["h"]*height,'--------------   --')
    // const coordinates ={}
    // coordinates['x']=data['coordinates']["x"]//*width
    // coordinates['y']=data['coordinates']["y"]//*height
    // coordinates['w']=data['coordinates']["w"]//*width
    // coordinates['h']=data['coordinates']["h"]//*height

    // dic['coordinates']=coordinates

    const cropData = {
      
        offset: {x:data['coordinates']["x"]*width , y:data['coordinates']["y"]*height},
        size: {width: data['coordinates']["w"]*width, height: data['coordinates']["h"]*height},
        displaySize: {width:data['coordinates']["w"]*width , height: data['coordinates']["h"]*height},
       // resizeMode: 'contain'  // | 'cover' | 'stretch',
      }



    ImageEditor.cropImage(img, cropData,data).then(url => {
        
       //console.log("Cropped image uri===", url);
       detect(url,data);
      // navigation.navigate('ImageDisplay', { path:img,tdata:totalData});
     }).catch(err=>{
       console.log(err,'======')
     })
    
  }
    
        
        
        ImageSize.getSize(img).then(size => {

          object.map((item)=>{
            //console.log(img,'--------------------')
            
           
            crop(item,img,size.width,size.height);
            
            
        })


        //navigation.navigate('Preview', { path:filepath,w:width,h:height });
        

        })
        .catch((error) => {
            console.log(error,"**")
            Alert.alert(
              "Alert ",
              "Got invalid data",
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

        

        const detect  = async(tex,data)=>{
          const visionResp = await RNTextDetector.detectFromUri(tex)
          if(visionResp.length==0){
            data['OCRResp']=' -';
            list[data["key"]]=' -';
            length=length-1;

          }
          else{
          console.log('visionRes', visionResp[0]["text"]);
          data['OCRResp']=visionResp[0]["text"]
          list[data["key"]]=visionResp[0]["text"]
          length=length-1;
          console.log(length)
          }
          
          //console.log(data)
          if(length==0){
            console.log(object)
            console.log(list)
            navigation.navigate('ImageDisplay', { path:img,tdata:object,xldata:list});
           }

          
         // console.log(list);
          
      
       }

      
       
       

}

export default Action;


 
  

  

 const data =[{
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
  }]
 

  const totalData =[
    {"OCRResp": "AE", "__v": 0, "_id": "62b33c825d13528bd83debdf", "coordinates": {"h": 0.04388039664826179, "w": 0.09874308713570168, "x": 0.19974044940438687, "y": 0.28295283334065474}, "key": "Subject", "regex": "string", "templateName": "VIT MID-1"}
    , {"OCRResp": "o18 PA A o3o", "__v": 0, "_id": "62b33cb55d13528bd83debe1", "coordinates": {"h": 0.03934101249932418, "w": 0.3748205861737651, "x": 0.516121332546533, "y": 0.22696754429167118}, "key": "Reg N", "regex": "string", "templateName": "VIT MID-1"}
     ,{"OCRResp": "3", "__v": 0, "_id": "62b33ce05d13528bd83debe3", "coordinates": {"h": 0.03177545144896194, "w": 0.37885094567927347, "x": 0.516121332546533, "y": 0.28749219109030333}, "key": "Date", "regex": "string", "templateName": "VIT MID-1"}
     , {"OCRResp": "ME", "__v": 0, "_id": "62b33d035d13528bd83debe5", "coordinates": {"h": 0.027236093699313364, "w": 0.10680378856746832, "x": 0.7418197420884937, "y": 0.17854777669411628}, "key": "Branch", "regex": "string", "templateName": "VIT MID-1"}
     , {"OCRResp": "PVamsi.qanesh", "__v": 0, "_id": "62b33db45d13528bd83debe8", "coordinates": {"h": 0.05901157154756434, "w": 0.22569844470046083, "x": 0.19369496288387456, "y": 0.22242816014273356}, "key": "Name", "regex": "string", "templateName": "VIT MID-1"}]