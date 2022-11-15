import React from 'react'
import ReactDOM from 'react-dom/client'

import eruda from 'eruda'
import erudaDOM from 'eruda-dom'

import { App } from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if(
  window && window.innerWidth <= 720 &&
	import.meta.env.DEV
) {
  eruda.init()
	eruda.add(erudaDOM)
}
