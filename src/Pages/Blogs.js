import React from 'react'
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const myNavigate = useNavigate();
  return (
    <>
        <h1>Blogs Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veniam illum modi a? Itaque reprehenderit fugit quae corrupti odit voluptatem adipisci deleniti officia sequi soluta molestiae ab suscipit, minima ipsam.</p>
        <button onClick={()=> {
          myNavigate('/about');
        }}>Go to About Page</button>
    </>
  )
}

export default Blogs