import React, { Component } from 'react'
import { StyleSheet, View, Alert ,Button,Text} from 'react-native'

import Home from './srcs/Home';
import CustomButton from './srcs/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TextExample from './srcs/screens/login';
import Tempchoosen from './srcs/screens/choosetemp';
import Dte from './srcs/screens/dtemp';
import Nearer from './srcs/screens/preview';
import Edgs from './srcs/screens/xl';
import {LogBox} from "react-native";
import ImageDisplay from './srcs/ImageDisplay';
import CollectImage from './srcs/CollectImage'
LogBox.ignoreLogs([
"exported from 'deprecated-react-native-prop-types'.",
])


const Stack = createNativeStackNavigator();

export default MyStack = () => {
  
   
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="login" component={TextExample} />
        <Stack.Screen name="ChooseTemplates" component={Tempchoosen} />
        <Stack.Screen name="DefaultTemplates" component={Dte} />
        <Stack.Screen name="Preview" component={Nearer} />
        <Stack.Screen name="Edging" component={Edgs} />
        <Stack.Screen name="CollectImage" component={CollectImage} />

        <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }}/>
       
        <Stack.Screen name="ImageDisplay" component={ImageDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};





 