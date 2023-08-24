import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Modal } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy,
} from 'expo-location'
import { Navigate } from "react-router-dom";
import { Image } from "react-native";

export default function Map() {
  const [motionVisible, setMotionVisible] = useState(false)
  const [location, setLocation] = useState([]);
  const locationfav = [{
    id:1,
    description: "Olá tem uma bike aqui ",
    localpark: "Chegada",
    latitude: -23.48581260687597,
    longitude: -46.45530212585926,
    imagepark: require("../../src/vilajacui/Entrada.jpg")

  },{
    id:2,
    description: "Olá tem uma bike aqui ",
    localpark: "Area de churrasco",
    latitude: -23.486772292579314,
    longitude: -46.45452276650531,
    imagepark: require("../../src/vilajacui/partealojamento.jpg")

  },
  {
    id:3,
    description: "Olá tem uma bike aqui ",
    localpark: "Pista de skate",
    latitude: -23.484174,
    longitude:  -46.455300,
    imagepark: require("../../src/vilajacui/pistadeskate.jpg")

  },
  {
    id:4,
    description: "Olá tem uma bike aqui ",
    localpark: "Pista de bicicleta",
    latitude: -23.486038685157286,
    longitude:  -46.453791758386515,
    imagepark: require("../../src/vilajacui/pistabmx.jpg")

  }
]



  let [region , setRegion] = useState({
    latitude: -23.4853,
    longitude: -46.4542,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,

  })

  async function requestLocationPermission() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }

  }

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(()=>{
    watchPositionAsync({
      accuracy:LocationAccuracy.Highest,
      timeInterval:1000,
      distanceInterval:1,
    }, (response)=> {
     setLocation(response);
    })
      },[])


  return (
    <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={region}
          zoomEnabled={false}
          scrollEnabled={true}
          showsPointsOfInterest={false}
          showsBuildings={false}
        >
          {
            locationfav.map((point) =>  { return (
            <Marker key={point.id} coordinate={{
              latitude:point.latitude,
              longitude:point.longitude,
            }}> 
            <View  style={styles.markerContainer}>
            <View style={styles.motionContainer}>
          <Text style={styles.markerTitle}>{point.description}</Text>
          <Text style={styles.markerDescription}>{point.localpark}</Text>
          <Image style={styles.Imgstyle} source={point.imagepark}/>
         </View>
         </View>
            </Marker>
            )}
          )}
             
        
        </MapView>
       
       
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontweight: 'bold'
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%'
  },containerMap:{
      width:60,
      height:60,
      backgroundColor:"#ffff",

  },
  marker:{
    width:50,
    height:50,
    backgroundColor:"#ffff",
  }
  ,
  motionContainer: {
  display:'flex',
  alignItems:"center",
  marginRight:144,
  marginTop:40,
  }
,
  markerContainer: {
    width:310,
    height:150,
    backgroundColor: "#ffff",
    padding: 8,
    borderRadius: 8,
    borderColor: "#f2f1ef",
    borderWidth: 1,
  },
  markerTitle: {
    fontWeight: 'bold',
  },
  markerDescription: {
    marginTop: 4,
    fontSize:14
  },
  Imgstyle:{
    position:'absolute',
    width:148,
    height:149,
    left:152,
    top:-49,
    borderRadius:8,
  }
})