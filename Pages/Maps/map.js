import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from 'expo-location'

export default function Map() {

  const [location, setLocation] = useState(LocationObject)
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

  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    },
      (response) => {
        setLocation(response);
      })
  }, [])


  return (
    <View style={styles.container}>
      {location &&
        <MapView style={styles.map}
          initialRegion={region}
        >
          <Marker coordinate={region}/>
        </MapView>
      }

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
  }
})