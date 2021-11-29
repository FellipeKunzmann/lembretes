import remove from 'lodash.remove'

//As funções do sistema

export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

//Criação das funções que o sistema irá executa

//inicializa a contagem de lembretes presentes no sistema
let noteID = 0

//função para adicionar um lembrete
export function addnote(note) {
  return {
    type: ADD_NOTE,
    id: noteID++,
    note
  }
}

//função para deletar um lembrete
export function deletenote(id) {
  return {
    type: DELETE_NOTE,
    payload: id
  }
}


//utilização do redux para gerenciamento da aplicação
const initialState = []

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          note: action.note
        }
      ]

    case DELETE_NOTE:
      const deletedNewArray = remove(state, obj => {
        return obj.id != action.payload
      })
      return deletedNewArray

    default:
      return state
  }
}

export default notesReducer
