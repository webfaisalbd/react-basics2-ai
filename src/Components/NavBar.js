import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav>
            <ul>
                <NavLink className='navStyle' to="/">Home</NavLink>
                <NavLink className='navStyle' to="/blogs">Blogs</NavLink>
                <NavLink className='navStyle' to="/about">About</NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar