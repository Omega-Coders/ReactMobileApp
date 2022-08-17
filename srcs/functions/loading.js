import { Text, View, StyleSheet, ActivityIndicator,Alert,LogBox} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';


const Loading=()=>{
    const route = useRoute();
    const text = route.params.text;

    return(
        <View style={styles.load}>
        <ActivityIndicator></ActivityIndicator>
        <Text style={{color:'black'}}>{text}</Text>
        </View>
      )

}
export default Loading;
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
  
    }
})


