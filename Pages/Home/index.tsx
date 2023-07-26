import { ScrollView, View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Feather } from "react-native-vector-icons";
import { styles } from "./styles";
import Bike from "../../Components/Bike";
import Duobike from "../../Components/Duobike";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import Family from "../../Components/Family";

export default function Home() {
  
  const containerBike = [
    {
      id:1,
      name:"bicicleta",
      value:10,
      valuetwo:20,
      addition:5,
      image:require("../../src/Bike.png"),
    },
    {
      id:2,
      name:"casal",
      value:20,
      valuetwo:30,
      addition:5,
      image:require("../../src/Bikeduo.png"),

    },{
      id:3,
      name:"familia",
      value:40,
      valuetwo:50,
      addition:10,
      image:require("../../src/triciclo-familia.png"),

    }
  ]


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
        <TouchableOpacity  onPress={() => console.log('Botão pressionado')} >
          <Feather style={styles.cart} name="shopping-cart" size= {30} color="white"/>
          <Text style={styles.cartStatus}> 1 </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.Tittle}>alugue sua bike aqui !!</Text>
            <SafeAreaView>
         <ScrollView horizontal={true}
           showsHorizontalScrollIndicator={false}
>
          <Bike containerBike={containerBike} />
          </ScrollView>
          </SafeAreaView>
          </View>
        </View>
   
  );
}
