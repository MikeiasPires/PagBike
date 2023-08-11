import React from "react";
import { View, Text, StyleSheet} from 'react-native';
 

export default function Time() {
  return(
    <View style={styles.container}>
      <Text styLe={styles.text}> Não a nenhuma bicicleta no momento </Text>
      </View>
   )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
      fontSize: 25,
      fontweight: 'bold'
    }
})