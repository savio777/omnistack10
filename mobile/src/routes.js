import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Profile from './pages/Profile'
import Main from './pages/Main'

const Stack = createStackNavigator()

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Main'
        headerMode='screen'
        screenOptions={{
          headerTintColor: '#fff',
          headerBackTitleVisible: null,
          headerStyle: {
            backgroundColor: '#7D40E7'
          }
        }}
      >
        <Stack.Screen
          name='Main'
          component={Main}
          options={{
            title: 'DevRadar'
          }} />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{ title: 'Perfil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route
