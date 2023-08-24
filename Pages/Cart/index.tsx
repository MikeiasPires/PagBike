import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
import Time from "../Time/time";

export default function Cart() {
  const save = [];
  const [test, setTest] = useState([]);
  const [inputValue, setInputValues] = useState([]);
  const [armazenum, setarmazenum] = useState('');
  const [fontsLoand] = useFonts({
    Poppins_100Thin,
    Poppins_500Medium,
    Poppins_400Regular,
  });
  const { selectbike, setSelectBike } = useBikeselector();
  const valuecapture = selectbike.map((item) => item.value);

  function handleErased(id) {
    const indexToRemove = selectbike.findIndex((item) => item.id === id);
    if (indexToRemove !== -1) {
      const newItem = [...selectbike];
      newItem.splice(indexToRemove, 1);
      setSelectBike(newItem);
    }
  }

  const handleTextChange = (id, newValue, value, index) => {
    setInputValues((prevInputValues) =>
      prevInputValues.map((item) =>
        item.id === id ? { ...item, quantity: newValue } : item
      )
      );
  };

  if (!fontsLoand) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Title}> Compras </Text>
      <View style={styles.containerBox}>
        <View style={styles.lettertop}>
          <Text style={styles.phrasesletters}>
            {" "}
            Você pode escolher a quantidade
          </Text>
          <Text style={styles.phrasesletters}>
            {" "}
            de bicicletas aqui e pagar{" "}
          </Text>
        </View>
        {selectbike.length === 0 && <Time />}
        <ScrollView showsVerticalScrollIndicator={false}>
          {selectbike.map((item, index) => {
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
                    <TouchableOpacity onPress={() => handleErased(item.id)}>
                      <Feather
                        style={styles.closeIcon}
                        name="trash"
                        size={25}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.values}>
                    <Text style={styles.textamount}> Valor </Text>
                    <TextInput
                      onChangeText={(newValue) =>
                        handleTextChange(item.id, newValue, item.value,index)
                      }
                      value={item.value}
                      style={styles.numbers}
                      keyboardType="numeric"
                    ></TextInput>
                    <Text style={styles.valuex}> X </Text>
                    <Text style={styles.value}>
                    {item.value * item.quantity}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.buttonMove}>
          <TouchableOpacity
            onPress={() => console.log("")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Concluir compra</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
