import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import React from 'react'
import { MainRouter } from './MainRouter'
import { UserRouter } from './UserRouter'

export type RootStackParamList = {
  Main: undefined
  User: undefined
  Home: undefined
}
export type RootStackNavProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>

const RootStack = createNativeStackNavigator<RootStackParamList>()

export const RootRouter: React.FC = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Main" component={MainRouter} />
      <RootStack.Screen name="User" component={UserRouter} />
    </RootStack.Navigator>
  )
}
