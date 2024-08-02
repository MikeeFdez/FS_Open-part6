import { useDispatch, useSelector } from "react-redux"
import { hideNotification } from "../reducers/notificationReducer"

const Notification = () => {

  const dispatch = useDispatch()

  const notification = useSelector(state => {
    if (state.notification !== '') {
      const votedAnecdote = state.anecdotes.find(a => a.id === state.notification).content
      const message = `You voted the anecdote '${votedAnecdote}'`
      setTimeout(() => {
        dispatch(hideNotification())
      }, 5000);
      return message
    }
    return null
  })

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={notification !== null ? style : null}>
      {notification}
    </div>
  )
}
  
  export default Notification