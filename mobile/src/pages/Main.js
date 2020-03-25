import React from 'react'

import { Text, View, TouchableOpacity } from 'react-native'

function Main(props) {
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
        <Text>iae kkk</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Main
