import React from "react";
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

export default function Cart() {
  
  const {selectbike,setSelectBike} = useBikeselector();
   
  const [fontsLoand] = useFonts({
    Poppins_100Thin,
    Poppins_500Medium,
    Poppins_400Regular,
  });

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
        {selectbike.map((item) => {
          return (
            <View style={styles.containerAlign}>
            <View style={styles.containerItem}>
              <Image
                style={styles.imageItem}
                source={item.imagepag}
              ></Image>
            </View>
            <View>
              <Text style={styles.text}> {item.name} </Text>
              <View style={styles.values}>
                <Text style={styles.textamount}> Valor </Text>
                <TextInput
                  style={styles.numbers}
                  keyboardType="numeric"
                ></TextInput>
                <Text style={styles.valuex} > X </Text>
                <Text style={styles.value}>R$ {item.value} </Text>
              </View>
            </View>
          </View>
          )
        })}
            <View style={styles.buttonMove}>
            <TouchableOpacity  onPress={()=> console.log("voce")} style={styles.button}>
            <Text style={styles.buttonText}>Concluir compra</Text>
            </TouchableOpacity>
            </View>
      </View>
    </View>
  );
}
