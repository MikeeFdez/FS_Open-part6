import { createSlice, current } from "@reduxjs/toolkit"

const anecdotesAtStart = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
const getId = () => (100000 * Math.random()).toFixed(0)
  
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)
// La línea anterior devuelve un array donde cada posición es un objeto. Es lo mismo que: anecdotesAtStart.map(a => asObject(a))
  

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: initialState,
  reducers: {
    createAnecdote(state, action) {
      const newAnecdote = {
        content: action.payload, 
        id: getId(), 
        votes: 0
      }
      state.push(newAnecdote)
    },
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdoteToVote = state.find(a => a.id === id)
      const updatedAnecdote = {
          ...anecdoteToVote,
          votes: anecdoteToVote.votes + 1
      }
      return state.map(anecdote => 
            anecdote.id !== id ? anecdote : updatedAnecdote
        )
    }
  }
})

export default anecdoteSlice.reducer
export const { createAnecdote, voteAnecdote } = anecdoteSlice.actions

// Las siguientes líneas se comentan, ya que con el uso de toolkit quedan obsoletas.
// ---------------------------------------------------------------------------------------------
// Implementamos a continuación los action creators para crear una nueva anécdota y para votar a las ya existentes:
// export const createAnecdote = (content) => {
//   return {
//       type: 'CREATE_ANECDOTE',
//       payload: {
//           content,
//           id: getId(),
//           votes: 0
//       }
//   }
// }

// export const voteAnecdote = (id) => {
//   return {
//       type: 'VOTE',
//       payload: { id }
//   }
// }

// const reducer = (state = initialState, action) => {
//   // console.log('state now: ', state)
//   // console.log('action', action)
//   switch (action.type) {
//       case 'VOTE':
//           {
//               const id = action.payload.id
//               const anecdoteToVote = state.find(a => a.id === id)
//               const updatedAnecdote = {
//                   ...anecdoteToVote,
//                   votes: anecdoteToVote.votes + 1
//               }
//               return state.map(anecdote => 
//                   anecdote.id !== id ? anecdote : updatedAnecdote
//               )
//           }
//       case 'CREATE_ANECDOTE': 
//           return [...state, action.payload]
//       default: return state
//   }
// }
  
// export default reducer