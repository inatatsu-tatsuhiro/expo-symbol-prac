import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { MainStackNavProp } from '../../Router/MainRouter'
import { Account, NetworkType } from 'symbol-sdk'
const MainScreen = () => {
  const rootNavi = useNavigation<MainStackNavProp<'Main'>>()

  const acc = Account.createFromPrivateKey(
    '891D9D7E9672925123CFB7766CE9AC740BAFED43AE78F64CE2D296F54E62E57A',
    NetworkType.TEST_NET
  )

  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <Text>Address: {acc.address.plain()}</Text>
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
