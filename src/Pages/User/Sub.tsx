import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Portal, Dialog, Paragraph, Button } from 'react-native-paper'
import { MainStackNavProp } from '../../Router/MainRouter'

const SubScreen = () => {
  const rootNavi = useNavigation<MainStackNavProp<'Sub'>>()

  const [visible, setVisible] = React.useState(false)

  const hideDialog = () => setVisible(false)

  return (
    <View style={styles.container}>
      <Text>User Sub Screen</Text>
      <Button mode="contained" onPress={() => rootNavi.navigate('Main')}>
        いどう
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

export default SubScreen