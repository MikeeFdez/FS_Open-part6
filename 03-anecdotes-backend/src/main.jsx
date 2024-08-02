import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store'


// El componente Provider de la librería react-redux hace que el Redux store esté disponible a cualquier componente anidado que
// necesite acceder al mismo en toda la aplicación. Así nos quitamos el renderApp y subscribe y tener que inicilizar el render la primera vez.

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)