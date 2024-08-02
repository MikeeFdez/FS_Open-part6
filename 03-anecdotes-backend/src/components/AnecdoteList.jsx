import { useSelector, useDispatch } from 'react-redux'
import { voteOneAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

export const AnecdoteList = () => {

  const anecdotes = useSelector(state => {
    if (state.filter === '') {
      return state.anecdotes
    }
    return state.anecdotes.filter(anecdote => 
      anecdote.content.toLowerCase().includes(state.filter))
  })

  const dispatch = useDispatch()  

  const vote = (id) => {
    // console.log('vote', id)
    dispatch(voteOneAnecdote(id))
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
