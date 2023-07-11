import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BankApp } from './BankApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <BankApp />
    </BrowserRouter>
    
  </React.StrictMode>,
)
