import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'



export const AnecdoteForm = () => {
    const dispatch = useDispatch()
    // Tenemos guardado en el store nuestras anecdotas definidas en el reducer, por lo que al inicializar la constante anecdotes 
    // mediante el hook useSelector, podemos acceder al store y recuperarlas.

    const addAnecdote = (event) => {
        event.preventDefault()
        const {target} = event
        const content = target.anecdote.value
        target.anecdote.value = ''
        dispatch(createAnecdote(content))
      }
    

    return (
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">create</button>
        </form>
    )
}