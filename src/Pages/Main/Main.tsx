import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Portal, Dialog, Paragraph, Button } from 'react-native-paper'
import { MainStackNavProp } from '../../Router/MainRouter'
import * as SecureStore from 'expo-secure-store'

const MainScreen = () => {
  const rootNavi = useNavigation<MainStackNavProp<'Main'>>()
  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <Button mode="contained" onPress={() => rootNavi.navigate('Sub')}>
        いどう
      </Button>
    </View>
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

export default MainScreen
