import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>About</h2>
      <button onClick={()=> {
        navigate('/');
      }}>
        Go to Home
        </button>
    </>
  )
}

export default About