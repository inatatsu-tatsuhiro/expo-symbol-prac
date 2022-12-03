import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import React from 'react'

import MainScreen from '../Pages/Main/Main'
import SubScreen from '../Pages/Main/Sub'

export type MainStackParamList = {
  Main: undefined
  Sub: undefined
}
export type MainStackNavProp<T extends keyof MainStackParamList> =
  NativeStackNavigationProp<MainStackParamList, T>

export const MainRouter: React.FC = () => {
  const MainStack = createNativeStackNavigator<MainStackParamList>()

  return (
    <MainStack.Navigator initialRouteName="Main">
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="Sub" component={SubScreen} />
    </MainStack.Navigator>
  )
}
