import React from 'react'
import { Link } from 'react-router-dom';

import { blogsData } from '../data'
// console.log(blogsData);
const Blogs = () => {
  return (
    <>
      <h2>Blogs</h2>
      {
        blogsData.map((blog)=> {
          const {id, title, body} = blog;
          return <section key={blog.id}>
            <article>
            <h3>{id}</h3>
            <h5>{title}</h5>
            <p>{body.slice(0,100)}...</p>
            <Link to={title}>More info</Link>
            </article>
          </section>
        })
      }
    </>
  )
}

export default Blogs