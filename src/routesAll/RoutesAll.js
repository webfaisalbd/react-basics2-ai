import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages 
import Home from '../pagesAll/Home/Home'
import Blogs from '../pagesAll/Blogs/Blogs'
import Blog from '../pagesAll/Blog/Blog'
import About from '../pagesAll/About/About'
import Error from '../pagesAll/Error/Error'
import Navbar from '../layout/Navbar'
import User from '../pagesAll/User/User'
import Protected from '../layout/Protected'

const RoutesAll = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return <BrowserRouter>
        <Navbar />
        <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blogs' element={<Blogs />}></Route>
            <Route path='/blogs/:title' element={<Blog />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/user' element={ <Protected isLoggedIn={isLoggedIn}>
                <User />
            </Protected> }></Route>
            <Route path='*' element={<Error />}></Route>
        </Routes>
    </BrowserRouter>
}

export default RoutesAll