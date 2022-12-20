import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return <nav>
            <NavLink className='navBar' to='/'>Home</NavLink>
            <NavLink className='navBar' to='/blogs'>Blogs</NavLink>
            <NavLink className='navBar' to='/about'>About</NavLink>
            <NavLink className='navBar' to='/user'>User</NavLink>
        </nav>
}

export default Navbar