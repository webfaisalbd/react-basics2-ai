import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>About</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora hic quo ratione animi fuga consectetur ipsum! Provident repudiandae totam doloremque.</p>
      <button onClick={()=> {
        navigate('/');
      }}>Go to Home</button>
    </>
  )
}

export default About