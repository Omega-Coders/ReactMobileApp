import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button ,Image} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import CustomButton from './CustomButton';

import RNGeniusScan from '@thegrizzlylabs/react-native-genius-scan';
import ImagePicker from 'react-native-image-crop-picker';

import RNTextDetector from "rn-text-detector";


const CollectImage = ({ navigation }) => {
    
    const Scanner = async()=>{
        
        RNGeniusScan.setLicenceKey('533c5006515e03080951025739525a0e4a1051055a5742493d0702530f0b0900550355')
        .then(() => {
          return RNGeniusScan.scanWithConfiguration({  multiPage: false })
  
        })
        .then((result) => {
            // Do something with the enhanced image
            console.log('****',result,'**');

                    
  
            const filepath =result['scans'][0]['enhancedUrl'];
            console.log('**',typeof(filepath),'**');
            Image.getSize(filepath, (width, height) => {console.log(width, height);
            navigation.navigate('Preview', { path:filepath,w:width,h:height });
            })
            .catch((error) => {
                console.log(error,"**")
            })
            
            
         
        })
        
    
      }
      const openGallery = ()=>{
        ImagePicker.openPicker({
          
          cropping: false,
          freeStyleCropEnabled:true,
          
        }).then(image => {
          console.log(image);
          


          RNGeniusScan.setLicenceKey('533c5006515e03080951025739525a0e4a1051055a5742493d0702530f0b0900550355')
                .then(() => {
                    return RNGeniusScan.scanWithConfiguration({ source: 'image', sourceImageUrl: image['path'] })
                })
                .then((result) => {
                    // Do something with the enhanced image
                    console.log('****',result,'**');

                    
  
                const filepath =result['scans'][0]['enhancedUrl'];
                console.log('**',typeof(filepath),'**');
                Image.getSize(filepath, (width, height) => {console.log(width, height);
                navigation.navigate('Preview', { path:filepath,w:width,h:height });
                })
                .catch((error) => {
                    console.log(error,"**")
                })
        
          
        });
         
        }).catch(err=>{
          console.log('picker is stopped',err);
        })
      
      }
    return (

        <View style={styles.container}>
            <View style={styles.part_1}>

            <Button title='camera' onPress={Scanner}></Button>
                

            </View>
            <View style={styles.part_2}>
                <Button title='Gallery' onPress={openGallery}></Button>

            </View>
            

        </View>

      

    )
}

export default CollectImage
const styles = StyleSheet.create({
    container:{
       flex:1,
        flexDirection:'column',
        alignItems:'center',
       // backgroundColor:'red'

    },
    part_1: {
        flex:0.4,
        justifyContent:'center',
        //backgroundColor:'green'
        

    },
    part_2: {
        flex:0.6,
       // backgroundColor:'yellow'
        
       

    }
});