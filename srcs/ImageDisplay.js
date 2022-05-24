/*import React, { Component,Image,View ,Text} from 'react'
import styles from './Styles' */



import React, { Component } from 'react'
import { StyleSheet, View, Alert ,Button,Text,Image} from 'react-native'
import CustomButton from './CustomButton';
import styles from './Styles'

import {LogBox} from "react-native";
import { useRoute } from '@react-navigation/native';
LogBox.ignoreLogs([
"exported from 'deprecated-react-native-prop-types'.",
])



export default function ImageDisplay({navigationz}){

  const route = useRoute();
    return(
        
    <View >
     
      <Image source={{uri:('file://'+route.params.path)}} style={{width: '100%', height: '100%'}}/>

    </View>

  )

}
//<Image source={require(route.params.path)} /> <Image source={require('./Default.jpg')} />

//<Image source={{uri:'file:///storage/emulated/0/DCIM/Restored/IMG20220316134958.jpg', width: 100,  height: 100}} />