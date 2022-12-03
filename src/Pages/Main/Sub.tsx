import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

const SubScreen = () => {
  const injectedCode: string = `
    alert('ReactNativeから渡されたコードを実行しました!');
    window.SSS = 'hello sss'
  `

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://inatatsu.loca.lt/demo' }}
        injectedJavaScriptBeforeContentLoaded={injectedCode}
      />
    </SafeAreaView>
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
