import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const myNavigate = useNavigate();
  
  return (
    <>
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique placeat laudantium eos praesentium modi illo dolores et fugiat neque iste odio, quod nostrum consectetur, consequuntur ab repudiandae labore sapiente. Dolore?</p>
      <button onClick={()=> {
        myNavigate('/')
      }}>Go to Home</button>
    </>
  )
}

export default About