import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../layout/Navbar'

// pages 
import About from '../Pages2/About'
import AddBlog from '../Pages2/AddBlog'
import Error from '../Pages2/Error'
import Home from '../Pages2/Home'
import Protected from './Protected'

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return <BrowserRouter>
        <Navbar />
        {isLoggedIn ? 
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out</button> 
        : 
        <button onClick={() => { setIsLoggedIn(!isLoggedIn) }}>Log In</button>}
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/add-blog' element={ <Protected isLoggedIn={isLoggedIn}>
                <AddBlog />
            </Protected> }></Route>
            <Route path='*' element={<Error />}></Route>
        </Routes>
    </BrowserRouter>
}

export default Index