import React from 'react'

import Route from './routes'

import { StatusBar } from 'react-native'

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <Route />
    </>
  )
}

export default App
