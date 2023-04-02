import React from 'react'
import store from './App/Store'
import Main from './Main'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store = {store}>
        <Main />
    </Provider>
  )
}

export default App