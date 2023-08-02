import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy,
} from 'expo-location'
import { Navigate } from "react-router-dom";

export default function Map() {

  const [location, setLocation] = useState([]);
  const locationfav = [{
    id:1,
    description: "Olá tem uma bike aqui ",
    localpark: "chegada",
    latitude: -23.48581260687597,
    longitude: -46.45530212585926,
  },{
    id:2,
    description: "Olá tem uma bike aqui ",
    localpark: "alojamento",
    latitude: -23.486772292579314,
    longitude: -46.45452276650531,
  },
  {
    id:3,
    description: "Olá tem uma bike aqui ",
    localpark: "pista de skate",
    latitude: -23.484174,
    longitude:  -46.455300,
  },
  {
    id:4,
    description: "Olá tem uma bike aqui ",
    localpark: "pista de bike",
    latitude: -23.486038685157286,
    longitude:  -46.453791758386515,
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
          scrollEnabled={false}
          showsPointsOfInterest={false}
          showsBuildings={false}
        >
          {
            locationfav.map((point) =>  { return (
            <Marker key={point.id} coordinate={{
              latitude:point.latitude,
              longitude:point.longitude,
            }}/>
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

  }
})