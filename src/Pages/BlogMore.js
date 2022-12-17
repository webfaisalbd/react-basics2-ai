import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { blogsData } from '../data';




const BlogMore = () => {
    const {title} = useParams();

    const myNavigate = useNavigate();

    const [bodyData, setBodyData] = useState('');

    useEffect(()=> {
       let filtered = blogsData.filter(data => {
           return data.title === title;
         })
         setBodyData(filtered[0]);
    },[])

  return (
    <div>
        <h1>{title} page</h1>
        <p>{bodyData.id}</p>
        <p>{bodyData.title}</p>
        <p>{bodyData.body}</p>
        <button onClick={()=> {
            myNavigate('/blogs')
        }}>Go to Blogs</button>
    </div>
  )
}

export default BlogMore