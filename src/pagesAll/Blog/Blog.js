import React from 'react'
import { useLocation } from 'react-router-dom'

const Blog = () => {
  const location = useLocation();
  return (
    <div>
      <h3>{location.state.title}</h3>
      <p>{location.state.body}</p>
    </div>
  )
}

export default Blog