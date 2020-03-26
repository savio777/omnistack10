import React, { useEffect, useState } from 'react'

import { StyleSheet, Image, View, Text } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

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
          latitudeDelta: 0.06,
          longitudeDelta: 0.06
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
        >
          <Marker
            coordinate={{
              latitude: currentRegion.latitude,
              longitude: currentRegion.longitude
            }}
          >
            <Image
              source={{ uri: 'https://avatars3.githubusercontent.com/u/35678887?v=4' }}
              style={styles.avatar}
            />
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.name}>Sávio</Text>
                <Text style={styles.bio}>Graduate in analysis and development of systems. Currently i'm working with Web developer and mobile using Laravel, CodeIgniter, React and React-native.
                </Text>
                <Text style={styles.techs}>"js","python","react"</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
      }
    </>
  )
}

const styles = StyleSheet.create({
  map: {
    flexGrow: 1,
    height: '100%',
    width: '100%'
  },
  avatar: {
    width: 45,
    height: 45
  },
  callout: {
    width: 260
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bio: {
    color: '#666',
    marginTop: 5
  },
  techs: {
    marginTop: 5
  }
})

export default Main
