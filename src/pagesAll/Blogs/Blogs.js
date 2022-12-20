import React from 'react'
import { Link } from 'react-router-dom';

import {blogsData} from '../../data'
// console.log(blogsData);
const Blogs = () => {
  return (
    <div>
      <h2>Blogs Page</h2>
      {
        blogsData.map(blog => {
          const {id, title, body} = blog;
          return <section key={id}>
            <article>
              <h3>{id}</h3>
              <h4>{title}</h4>
              <p>{body.slice(0,100)}...</p>
              <Link to={title} state={{id,title,body}}>More see</Link>
            </article>
          </section>
        })
      }
    </div>
  )
}

export default Blogs