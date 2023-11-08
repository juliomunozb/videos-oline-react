import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import NotFound from '../containers/NotFound'
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/Register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App
