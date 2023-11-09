import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './routes/App'
// Archivo de punto de entrada. Primer archivo que será detectado

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <Provider>
    <App />
  </Provider>
)
