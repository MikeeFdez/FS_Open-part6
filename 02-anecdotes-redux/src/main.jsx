import ReactDOM from 'react-dom/client'
// import { createStore, combineReducers } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
// import reducer from './reducers/anecdoteReducer'
// import { filterReducer } from './reducers/filterReducer'
import { store } from './store'

// La store puede tener diferentes partes, donde cada una se correspondería a un reducer para cada parte.
// En nuestro caso, vamos a tener una parte para las notas y otra parte para el filtro. Sin embargo, con el createStore solo se puede
// recibir un reducer. Para usar dos reducers, usamos el método combineReducers de redux.
// const store = createStore(combineReducers({
//   anecdotes: reducer,
//   filter: filterReducer
// }))

// Una vez instalamos la librería redux toolkit, el store se puede inicializar de la siguiente manera.
// Comentamos la siguiente línea ya que se mueve a su propio archivo store.js
// const store = configureStore({
//   reducer: {
//     anecdotes: reducer,
//     filter: filterReducer
//   }
// })


// El componente Provider de la librería react-redux hace que el Redux store esté disponible a cualquier componente anidado que
// necesite acceder al mismo en toda la aplicación. Así nos quitamos el renderApp y subscribe y tener que inicilizar el render la primera vez.
// console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)