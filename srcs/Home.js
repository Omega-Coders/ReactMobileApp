import React, { Component } from 'react'
import { StyleSheet, View, Alert ,Button,Text} from 'react-native'
import CustomButton from './CustomButton';
import styles from './Styles'

import {LogBox} from "react-native";
LogBox.ignoreLogs([
"exported from 'deprecated-react-native-prop-types'.",
])

export default function Home({navigation}){
    
    return(
        
    <View style={styles.preview}>
    <CustomButton onPressFunction={()=>navigation.navigate('Camera', { name: 'Camera' })} title='click' color='green'
    
    />
   </View>

  )

}