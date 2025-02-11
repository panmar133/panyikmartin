import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {Home, About, Contact, Services} from './components/pages'


function App() {

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/services' element={ <Services /> } />
        </Routes>
      </div>
    </>
  )
}

export default App