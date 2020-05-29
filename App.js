/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Search from './components/search'
import HomeScreen from './components/homeScreen'

const App: () => React$Node = () => {
  return (
    <>
      <View>
        <HomeScreen />
      </View>
    </>
  )
}

const styles = StyleSheet.create({})

export default App
