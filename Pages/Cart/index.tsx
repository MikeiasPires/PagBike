import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { Image } from "react-native";
import { styles } from "../Cart/style";
import { useBikeselector } from "../../Context/Bikeselector";
import { Feather } from "react-native-vector-icons";

export default function Cart() {

  const save = []
  const [teste,setTeste] = useState('')
  const [armazenum,setarmazenum] = useState([])
  const [number,setNumber] = useState('')
  const [fontsLoand] = useFonts({
    Poppins_100Thin,
    Poppins_500Medium,
    Poppins_400Regular,
  });
  const {selectbike,setSelectBike} = useBikeselector();
  const valuecapture = selectbike.map(item => item.value);
  
console.log(armazenum)

  function handlePag(numberdig){
    setNumber(numberdig)
    if(number !== ''){
      let NumInt = parseInt(number)
      for (let i = 0; i < valuecapture.length; i++){
        const result = valuecapture[i] * NumInt
        save.push(result)
        setarmazenum(save)
      }
    }
  }

  
  if (!fontsLoand) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Title}> Compras </Text>
      <View style={styles.containerBox}>
        <View style={styles.lettertop}>
          <Text style={styles.phrasesletters}> Você pode escolher a quantidade</Text>
          <Text style={styles.phrasesletters}> de bicicletas aqui e pagar </Text>
        </View> 
        {}
        {selectbike.map((item) => {
          return (
            <View key={item.id} style={styles.containerAlign}>
            <View style={styles.containerItem}>
              <Image
                style={styles.imageItem}
                source={item.imagepag}
              ></Image>
            </View>
            <View>
              <View style={styles.motionName}>
              <Text style={styles.text}> {item.name} </Text>
              <TouchableOpacity onPress={()=> console.log('ss')}>
              <Feather  style={styles.closeIcon} name="trash" size= {25} color="black"/>
              </TouchableOpacity>
              </View>
              <View style={styles.values}>
                <Text style={styles.textamount}> Valor </Text>
                <TextInput
                  onChangeText={handlePag}
                  value={number}
                  style={styles.numbers}
                  keyboardType="numeric"
                ></TextInput>
                <Text style={styles.valuex} > X </Text>
                <Text style={styles.value}>
                  {item.value.toLocaleString('pt-br',{
                  style:'currency',
                  currency:'BRL',
                })} </Text>
              </View>
            </View>
          </View>
          )
        })}
            <View style={styles.buttonMove}>
            <TouchableOpacity  onPress={()=> console.log('')} style={styles.button}>
            <Text style={styles.buttonText}>Concluir compra</Text>
            </TouchableOpacity>
            </View>
      </View>
    </View>
  );
}
