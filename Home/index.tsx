import { ScrollView, View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Feather } from "react-native-vector-icons";
import { styles } from "./styles";
import Bike from "../Pages/Bike";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";
import { useBikeselector } from "../Context/Bikeselector";



export default function Home({}){

  const navigation = useNavigation();
  const {selectbike,setSelectBike} = useBikeselector();
  const numbercart = selectbike.map(item => item.id)
  const DateAt = new Date();
  const Datemin = DateAt.getMinutes();
  const Datehors = DateAt.getHours();
  const CompletHrs = Datehors.toString() + ":" + Datemin.toString();
  
  const containerBike = [
    {
      id:1,
      name:"bicicleta",
      value:10,
      valuetwo:20,
      addition:5,
      image:require("../src/Bike.png"),
      imagepag:require("../src/Bikecart/bikesolo.png"),
      Hors:CompletHrs,
    },
    {
      id:2,
      name:"casal",
      value:20,
      valuetwo:30,
      addition:5,
      image:require("../src/Bikeduo.png"),
      imagepag:require("../src/Bikecart/bikeduogreen.png"),
      Hors:CompletHrs,
    },{
      id:3,
      name:"familia",
      value:40,
      valuetwo:50,
      addition:10,
      image:require("../src/triciclo-familia.png"),
      imagepag:require("../src/Bikecart/bikegreenfamily.png"),
      Hors:CompletHrs,
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
        <View style={styles.buttonStyle} >
      <TouchableOpacity onPress={()=> navigation.navigate("users")}>
        <Feather style={styles.user}  name="user"  size= {30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("cart")} >
          <Feather style={styles.cart} name="shopping-cart" size= {30} color="white"/>
          { numbercart.length > 0 && <Text style={styles.cartNumber}> {numbercart.length}</Text>  }
        </TouchableOpacity>
        </View>
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
