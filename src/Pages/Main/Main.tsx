import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Portal, Dialog, Paragraph, Button } from 'react-native-paper'
import { MainStackNavProp } from '../../Router/MainRouter'
import * as SecureStore from 'expo-secure-store'

const MainScreen = () => {
  const rootNavi = useNavigation<MainStackNavProp<'Main'>>()

  const [visible, setVisible] = React.useState(false)
  const [key, setKey] = React.useState('')

  const hideDialog = () => setVisible(false)

  const updateKey = async () => {
    const k = await SecureStore.getItemAsync('key')
    if (typeof k === 'string') {
      setKey(k)
    }
  }
  const onClick = async () => {
    await SecureStore.setItemAsync('key', 'value')
  }

  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <Text>こんにちは {key}</Text>
      <Button mode="contained" onPress={() => rootNavi.navigate('Sub')}>
        いどう
      </Button>
      <Button mode="contained" onPress={onClick}>
        set
      </Button>
      <Button mode="contained" onPress={updateKey}>
        get
      </Button>
      <Button onPress={() => setVisible(true)}>ひらく</Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
        </Dialog>
      </Portal>
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
