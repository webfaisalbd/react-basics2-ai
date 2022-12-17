import React, { useState } from 'react'

import Blog from './Blog';
import { blogsData } from '../data';

const Blogs = () => {

  const [blogs, setBlogs] = useState(blogsData)

  return (
    <>

      <h2>Blogs</h2>

      {
        blogs.map(blog => {
          return <Blog blog={blog} key={blog.id} />
        })
      }

    </>
  )
}

export default Blogs