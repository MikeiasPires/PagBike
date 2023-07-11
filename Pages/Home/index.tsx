import { ScrollView, View, Text, SafeAreaView } from "react-native";
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
          <Text style={styles.Tittle}>alugue sua bike aqui !!</Text>
            <SafeAreaView>
         <ScrollView horizontal={true}
           showsHorizontalScrollIndicator={false}
           style={styles.carrossel}
>
          <Bike  />
          <Duobike/> 
          <Family />
          </ScrollView>
          </SafeAreaView>
        </View>
   
  );
}
