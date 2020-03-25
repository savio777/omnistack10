import React, { useEffect, useState } from 'react'

import { StyleSheet } from 'react-native'

import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';


function Main(props) {
  
  const [currentRegion, setCurrentRegion] = useState(null)
  //props.navigation.navigate('Profile')

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('pos~> ', position)

        setCurrentRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.4,
          longitudeDelta: 0.4
        })
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, [])

  return (
    <>
      {currentRegion &&
        <MapView
          initialRegion={currentRegion}
          style={styles.map}
        />
      }
    </>
  )
}

const styles = StyleSheet.create({
  map: {
    flexGrow: 1,
    height: '100%',
    width: '100%'
  }
})

export default Main
