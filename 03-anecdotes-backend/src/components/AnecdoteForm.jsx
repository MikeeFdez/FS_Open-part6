import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
// import anecdoteService from '../services/anecdotes'



export const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const {target} = event
        const content = target.anecdote.value
        target.anecdote.value = ''
        dispatch(createNewAnecdote(content))
    }

    // Esta era la forma anterior al uso de thunk.
    // const addAnecdote = async (event) => {
    //     event.preventDefault()
    //     const {target} = event
    //     const content = target.anecdote.value
    //     target.anecdote.value = ''
    //     const newAnecdote = await anecdoteService.createNew(content)
    //     dispatch(createAnecdote(newAnecdote))
    //   }
    

    return (
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">create</button>
        </form>
    )
}