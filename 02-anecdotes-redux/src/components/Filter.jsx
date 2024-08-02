import { useDispatch } from 'react-redux'
import { filterAnecdote } from '../reducers/filterReducer'


export const Filter = () => {

    const dispatch = useDispatch()

    const handleChange = (event) => {
        event.preventDefault()
        dispatch(filterAnecdote(event.target.value))
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            Filter <input type="text" onChange={handleChange} />
        </div>
    )
}