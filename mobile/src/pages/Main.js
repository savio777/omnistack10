import React, { useEffect, useState } from 'react'

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';

function Main(props) {

  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('pos~> ', position)
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, [])

  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
        <Text style={{ textAlign: 'center' }}>Perfil</Text>
        <MapView style={styles.map} />
      </TouchableOpacity>
    </View>
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
