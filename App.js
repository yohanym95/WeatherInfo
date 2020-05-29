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
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName
              if (route.name == 'home') {
                iconName = 'home-city-outline'
              } else if (route.name == 'search') {
                iconName = 'city'
              }

              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={25}
                  color={color}
                />
              )
            },
          })}
          tabBarOptions={{
            activeTintColor: '#00aaff',
            inactiveTintColor: 'grey',
          }}>
          <Tab.Screen
            name='home'
            component={HomeScreen}
            initialParams={{city: 'london'}}
          />
          <Tab.Screen name='search' component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({})

export default App
