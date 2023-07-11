import { Text, View, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { styles } from "../Family/styles";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";


export default function Family() {
  const [fontsLoand] = useFonts({
    Poppins_100Thin,
    Poppins_500Medium,
    Poppins_400Regular,
  });

  if (!fontsLoand) {
    return null;
  }

  return (
        <View style={styles.containerItem}>
          <View style={styles.containerBike}>
            <Image
              source={require("../../src/Bike.png")}
              style={styles.Imagebike}
            ></Image>
          </View>
          <Text style={styles.titleContainer}>Familia</Text>
          <View >
            <View style={styles.descriptionContainer1}>
            <Text style={styles.textHors}> Valor 1 hora</Text>
            <Text style={styles.textHors}> R$ 40</Text>
            </View>
            <View style={styles.descriptionContainer2}>
            <Text style={styles.textHors}> Valor 2 horas</Text>
            <Text style={styles.textHors}> R$ 50 </Text>
            </View>
            <View style={styles.descriptionContainer3}>
             <Text style={styles.textHors}> Horas adicionais</Text>
             <Text style={styles.textHors}>R$ 10</Text>
            </View>
            <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}>Alugar</Text>
            </TouchableOpacity>
          </View>
        </View>
  );
}
