import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navBanner'>
            <nav>
                <ul>
                    <NavLink to="/" className='navLink'>Home</NavLink>
                    <NavLink to="/blog" className='navLink'>Blogs</NavLink>
                    <NavLink to="/about" className='navLink'>About</NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar