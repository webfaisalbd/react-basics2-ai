import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <Link className='navBar' to='/'>Home</Link>
                <Link className='navBar' to='/about'>About</Link>
                <Link className='navBar' to='/add-blog'>Add Blog</Link>
            </nav>
        </>
    )
}

export default Navbar