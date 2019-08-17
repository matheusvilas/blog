import React from 'react'
import './App.scss'
import RouteComponent from './routes'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <RouteComponent />
    </BrowserRouter>
  )
}

export default App
