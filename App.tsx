import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { MainRouter } from './src/Router/MainRouter'
import { UserRouter } from './src/Router/UserRouter'
import { RootRouter } from './src/Router/RootRouter'

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
        {/* <MainRouter /> */}
        <RootRouter />
      </NavigationContainer>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
