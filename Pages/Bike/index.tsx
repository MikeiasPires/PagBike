import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "react-native";
import { styles } from "../Bike/styles";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { useState } from "react";
import { useBikeselector } from "../../Context/Bikeselector";


export default function Bike({containerBike}: any) {

  const {selectbike,setSelectBike} = useBikeselector();
  
  const [startTime, setStartTime] = useState(null)
  const [fontsLoand] = useFonts({
    Poppins_100Thin,
    Poppins_500Medium,
    Poppins_400Regular,
  });

 

  function BikePay(item){
    setSelectBike([...selectbike,item])
    
  }


  if (!fontsLoand) {
    return null;
  }



  return (
                 <ScrollView horizontal={true}
           showsHorizontalScrollIndicator={false}
>
          {containerBike.map((item) => {
            console.log(item)
            return (
              <View key={item.id} style={styles.containerItem}>

              <View style={styles.containerBike}>
            <Image
              source={item.image}
              style={styles.Imagebike}
            ></Image>
          </View>
          <Text style={styles.titleContainer}>{item.name}</Text>
          <View >
            <View style={styles.descriptionContainer1}>
            <Text style={styles.textHors}> Valor 1 hora</Text>
            <Text style={styles.textHors}> R$ {item.value}</Text>
            </View>
            <View style={styles.descriptionContainer2}>
            <Text style={styles.textHors}> Valor 2 horas</Text>
            <Text style={styles.textHors}> R$ {item.valuetwo} </Text>
            </View>
            <View style={styles.descriptionContainer3}>
             <Text style={styles.textHors}> Horas adicionais</Text>
             <Text style={styles.textHors}>R$ {item.addition}</Text>
            </View>
            <TouchableOpacity  onPress={()=> BikePay(item)} style={styles.button}>
           <Text style={styles.buttonText}>Alugar</Text>
            </TouchableOpacity>
          </View>
          </View>
            )
          } ) } 
          </ScrollView>
      
  );
}
