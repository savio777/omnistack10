import React from 'react'

import { Text, View, Button } from 'react-native'

function Main() {
  return (
    <View>
      <Button onPress={() => navigator.navigate('Profile')}>
        <Text>iae kkk</Text>
      </Button>
    </View>
  )
}

export default Main
