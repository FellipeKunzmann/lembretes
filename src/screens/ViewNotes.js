//importa as bibliotecas necessarias para o projeto rodar
import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, FAB, List } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { addnote, deletenote } from '../redux/notesApp'

//gera o cabeçalho da aplicação
import Header from '../components/Header'

//inicia as funções necessarias para a visualização dos lembretes na tela
function ViewNotes({ navigation }) {
  const notes = useSelector(state => state)
  const dispatch = useDispatch()
  const addNote = note => dispatch(addnote(note))
  const deleteNote = id => dispatch(deletenote(id))

//verifica se existe algum lembrete, se não avisa que não existe lembretes
  return (
    <>
      <Header titleText='Cardeneta de lembretes' />
      <View style={styles.container}>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Você não tem nenhum lembrete adicionado</Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            renderItem={({ item }) => (
              <List.Item
                title={item.note.noteTitle}
                description={item.note.noteValue}
                descriptionNumberOfLines={1}
                titleStyle={styles.listTitle}
                onPress={() => deleteNote(item.id)}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
        <FAB
          style={styles.fab}
          small
          icon='../assets/plus.png'
          label='Adicionar novo lembrete'
          onPress={() =>
            navigation.navigate('AddNotes', {
              addNote
            })
          }
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
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: 20
  },
  fab: {
    backgroundColor: '#39399f',
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10
  },
  listTitle: {
    fontSize: 20
  }
})

export default ViewNotes
