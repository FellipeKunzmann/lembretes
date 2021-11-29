import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Appbar, Title } from 'react-native-paper'

//formatação do cabeçalho da aplicação
function Header({ titleText }) {
  return (
    <Appbar.Header style={styles.headerContainer}>
      <View style={styles.container}>
        <Title style={styles.title}>{titleText}</Title>
      </View>
    </Appbar.Header>
  )
}

//parte estetica do cabeçalho
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#39399f'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#ffffff'
  }
})

export default Header
