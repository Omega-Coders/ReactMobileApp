import React, { Component } from 'react'
import { Image,Pressable} from 'react-native';
import { RNCamera } from 'react-native-camera'
import {useCamera} from 'react-native-camera-hooks'
import { StyleSheet, View, Alert ,Button,Text,TouchableOpacity} from 'react-native'
import RNFS from 'react-native-fs';
import CustomButton from './CustomButton';
import Svgimg from './imgs/capture_button.svg';
import Svgimg1 from './imgs/gallery.svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import ImagePicker from 'react-native-image-crop-picker';


export default function Camera({navigation}){
    const [{cameraRef},{takePicture}]=useCamera(null);
    const captureHandel = async()=>{
      try{
        const data  = await takePicture();
        console.log(data.uri);
       
        const filepath =data.uri;
        ImagePicker.openCropper({
          path: filepath,
          width: 300,

          freeStyleCropEnabled:true
        }).then(image => {
          console.log(image);
          Image.getSize(image['path'], (width, height) => {console.log({width, height})
        
          navigation.navigate('Preview', { path:image['path'],w:width,h:height });
        });
         
        }).catch(err=>{
          console.log('camera stopped ' ,err);
        })
      
     

          
      }
      catch{
        console.log('error');
      }
      
  
    }
    const openGallary = ()=>{
      ImagePicker.openPicker({
        
        cropping: true,
        freeStyleCropEnabled:true,
        
      }).then(image => {
        console.log(image);
        Image.getSize(image['path'], (width, height) => {console.log({width, height})
      
        navigation.navigate('Preview', { path:image['path'],w:width,h:height });
      });
       
      }).catch(err=>{
        console.log('picker is stopped',err);
      })
    
    }
    return(
      <View style={styles.camera}>
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          style={styles.preview}
          >
  

         <View style={{flexDirection:'row'}}>

         <View style={{flex:0.75,alignItems:'flex-start'}}>
          <Pressable>
            
             <Svgimg height={hp('14%')} width={wp('100%')} onPress={captureHandel}/>
          </Pressable>
         </View>
         <View style={{flex:0.25,alignItems:'center'}}>
             <Svgimg1 height={hp('10%')} width={wp('10%')} onPress={openGallary}/>
         </View>
         
         </View>
  
        </RNCamera>
  
      </View>
    )
  }

  const styles= StyleSheet.create({
  
    camera: {
    flex:1,
    
  },
  preview:{
    flex:1,
    alignItems:'flex-end',
    justifyContent:"center",
    flexDirection:'row'
    


  }
});



//<Svgimg height={hp('14%')} width={wp('100%')} onPress={captureHandel}/>
//<Svgimg1 height={hp('10%')} width={wp('10%')}/>

  /* newFilePath = RNFS.ExternalDirectoryPath+'/mytest.jpg';
        RNFS.moveFile(filepath,newFilePath)
           .then(()=>{
             console.log('Image moved  ',newFilePath)
             navigation.navigate('ImageDisplay', { path:newFilePath });
           })
           .catch(error=>{
             console.log(error);
  
          })*/