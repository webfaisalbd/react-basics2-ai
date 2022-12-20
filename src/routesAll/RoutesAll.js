import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages 
import Home from '../pagesAll/Home/Home'
import Blogs from '../pagesAll/Blogs/Blogs'
import Blog from '../pagesAll/Blog/Blog'
import About from '../pagesAll/About/About'
import Error from '../pagesAll/Error/Error'
import Navbar from '../layout/Navbar'
import User from '../pagesAll/User/User'

const RoutesAll = () => {
    return <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blogs' element={<Blogs />}></Route>
            <Route path='/blogs/:title' element={<Blog />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/user' element={<User />}></Route>
            <Route path='*' element={<Error />}></Route>
        </Routes>
    </BrowserRouter>
}

export default RoutesAll