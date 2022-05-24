import React, { Component } from 'react'
import { StyleSheet, View, Alert ,Button,Text} from 'react-native'

import Home from './srcs/Home';
import Camera from './srcs/Camera';
import CustomButton from './srcs/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {LogBox} from "react-native";
import ImageDisplay from './srcs/ImageDisplay';
LogBox.ignoreLogs([
"exported from 'deprecated-react-native-prop-types'.",
])



 



const Stack = createNativeStackNavigator();

export default MyStack = () => {
  
   
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="ImageDisplay" component={ImageDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};





 