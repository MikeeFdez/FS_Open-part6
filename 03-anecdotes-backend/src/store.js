import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

// Una vez instalamos la librería redux toolkit, el store se puede inicializar de la siguiente manera:
export const store = configureStore({
    reducer: {
      anecdotes: reducer,
      filter: filterReducer,
      notification: notificationReducer
    }
  })

