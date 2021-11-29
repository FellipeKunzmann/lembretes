//importa as bibliotecas necessarias para o projeto rodar
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../components/Header'

//inicializa as funções
function AddNote({ navigation }) {
  const [noteTitle, setNoteTitle] = useState('')
  const [noteValue, setNoteValue] = useState('')

//salva os lembretes
  function onSaveNote() {
    navigation.state.params.addNote({ noteTitle, noteValue })
    navigation.goBack()
  }

  //cria o formulario para a adição dos lembretes
  return (
    <>
      <Header titleText='Adicionar nova nota' />
      <IconButton
        icon='close'
        size={25}
        color='white'
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <TextInput
          label='Adicione o titulo aqui'
          value={noteTitle}
          mode='outlined'
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label='Adicione o lembrete aqui'
          value={noteValue}
          onChangeText={setNoteValue}
          mode='flat'
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyType='done'
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          icon='../assets/check.png'
          disabled={noteTitle == '' ? true : false}
          onPress={() => onSaveNote()}
        />
      </View>
    </>
  )
}

//parte estetica da pagina
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  iconButton: {
    backgroundColor: '#39399f',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  text: {
    height: 300,
    fontSize: 16
  },
  fab: {
    backgroundColor: '#39399f',
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0
  }
})

export default AddNote
