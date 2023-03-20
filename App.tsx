import './shim'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { MainRouter } from './src/Router/MainRouter'

export type RootStackParamList = {
  Main: undefined
  Compose: undefined
}

export type RootStackNavProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
    </PaperProvider>
  )
}
