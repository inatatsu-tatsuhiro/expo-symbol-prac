import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import React from 'react'

import MainScreen from '../Pages/Main/Main'
import SubScreen from '../Pages/Main/Sub'

export type UserStackParamList = {
  Main: undefined
  Sub: undefined
}
export type UserStackNavProp<T extends keyof UserStackParamList> =
  NativeStackNavigationProp<UserStackParamList, T>

export const UserRouter: React.FC = () => {
  const MainStack = createNativeStackNavigator<UserStackParamList>()

  return (
    <MainStack.Navigator initialRouteName="Main">
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="Sub" component={SubScreen} />
    </MainStack.Navigator>
  )
}
