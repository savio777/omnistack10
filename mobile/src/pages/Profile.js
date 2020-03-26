import React, { useEffect } from 'react'

import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'

function Profile({ navigation, route }) {

  return (
    <WebView
      style={{ flexGrow: 1 }}
      source={{ uri: `https://github.com/${route.params.user}` }}
    />
  )
}

export default Profile
