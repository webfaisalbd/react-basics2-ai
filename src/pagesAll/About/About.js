import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2>About Page</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nostrum labore incidunt culpa molestiae! Iusto sunt porro qui esse corrupti molestias ullam, in blanditiis mollitia ab illo doloribus exercitationem deserunt.</p>
      <button onClick={()=> {
        navigate('/')
      }}>Go to Home Page</button>
    </div>
  )
}

export default About