import { useEffect } from 'react'
import { AnecdoteForm } from './components/AnecdoteForm'
import { AnecdoteList } from './components/AnecdoteList'
import { Filter } from './components/Filter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { initAnecdotes, setAnecdotes } from './reducers/anecdoteReducer'
// import anecdoteService from './services/anecdotes'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initAnecdotes())
  }, [])

  // Así era antes de usar thunk.
  // useEffect(() => {
  //   anecdoteService
  //   .getAll()
  //   .then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  // }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App