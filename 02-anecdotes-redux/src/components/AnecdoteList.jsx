import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

export const AnecdoteList = () => {
  // const anecdotes = useSelector(state => state.anecdotes)
  // Como nuestro estado tiene es un objeto que contiene dos parámetros (anecdotes y filter), nos suscribimos al que nos interesa, que 
  // en este caso, son las anecdotes. Por ello, hacemos state.anecdotes. ESTO VUELVE A CAMBIAR CON EL FILTRO DE LA SIGUIENTE MANERA:
  const anecdotes = useSelector(state => {
    if (state.filter === '') {
      return state.anecdotes
    }
    return state.anecdotes.filter(anecdote => 
      anecdote.content.toLowerCase().includes(state.filter))
  })

  const dispatch = useDispatch()
  // Tenemos guardado en el store nuestras anecdotas definidas en el reducer, por lo que al inicializar la constante anecdotes 
  // mediante el hook useSelector, podemos acceder al store y recuperarlas.
  

  const vote = (id) => {
    // console.log('vote', id)
    dispatch(voteAnecdote(id))
    dispatch(showNotification(id))
  }

  return (
      [...anecdotes].sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )
  )
}
