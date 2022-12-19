import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Error from './Pages/Error'
import NavBar from './Components/NavBar'
import User from './Pages/User'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/blogs/:title' element={<Blog />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<Error />}></Route>
          <Route path='/user/' element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App