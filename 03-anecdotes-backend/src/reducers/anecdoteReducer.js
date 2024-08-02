import { createSlice, current } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'
  

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    // createAnecdote(state, action) {
    //   // const newAnecdote = {
    //   //   content: action.payload, 
    //   //   votes: 0
    //   // }
    //   state.push(action.payload)
    // },
    voteAnecdote(state, action) {
      const updatedAnecdote = action.payload
      const id = updatedAnecdote.id
      // // console.log('Paso 1, este es el id', id)
      // const anecdoteToVote = state.find(a => a.id === id)
      // // console.log('Paso 2, encuentra la anecdota', current(anecdoteToVote))
      // const updatedAnecdote = {
      //     ...anecdoteToVote,
      //     votes: anecdoteToVote.votes + 1
      // }
      // console.log('Paso 3, actualiza la anecdota', updatedAnecdote)
      return state.map(anecdote => 
            anecdote.id !== id ? anecdote : updatedAnecdote
        )
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})


// Usando Thunk:
export const initAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
// A nuestra función asíncrona como parámetro le llega dispatch, así le decimos cuando tiene que disparar (dispatch) de la acción.
// Es decir, primero recuperamos todas las anecdotas y una vez las tenemos hacemos dispatch de la acción setAnecdotes con las anecdotas.
// Por último, lo que tendríamos que hacer es usar la función initAnecdotes en el componente App, que es donde hacemos nuestra inicialización.

// Para crear una nueva anecdota, el principio es el mismo que el anterior: Primero se ejecuta una operación asíncrona
// y luego se dispara la acción que cambia el estado al store. 
export const createNewAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}
// Al igual que el caso anterior, hay que hacer las modificaciones en el componente. En este caso, AnecdoteForm.

export const voteOneAnecdote = (id) => {
  return async (dispatch) => {
    const anecdoteSelected = await anecdoteService.getOneAnecdote(id)
    const updatedAnecdote = await anecdoteService.updateAnecdote(id, anecdoteSelected)
    dispatch(voteAnecdote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer
export const { setAnecdotes, appendAnecdote, voteAnecdote } = anecdoteSlice.actions

