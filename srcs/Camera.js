import React, { Component } from 'react'
import { RNCamera } from 'react-native-camera'
import {useCamera} from 'react-native-camera-hooks'
import { StyleSheet, View, Alert ,Button,Text} from 'react-native'
import RNFS from 'react-native-fs';
import CustomButton from './CustomButton';
import styles from './Styles'

let  newFilePath ='mani'
export default function Camera({navigation}){
    const [{cameraRef},{takePicture}]=useCamera(null);
    const captureHandel = async()=>{
      try{
        const data  = await takePicture();
        console.log(data.uri);
       
        const filepath =data.uri;
        navigation.navigate('ImageDisplay', { path:filepath });
       /* newFilePath = RNFS.ExternalDirectoryPath+'/mytest.jpg';
        RNFS.moveFile(filepath,newFilePath)
           .then(()=>{
             console.log('Image moved  ',newFilePath)
             navigation.navigate('ImageDisplay', { path:newFilePath });
           })
           .catch(error=>{
             console.log(error);
  
          })*/

          
      }
      catch{
        console.log('error');
      }
      
  
    }
    return(
      <View style={styles.camera}>
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          style={styles.preview}
          >
  
         <CustomButton  onPressFunction={captureHandel} title='captur' color='orange'/>
  
        </RNCamera>
  
      </View>
    )
  }

  