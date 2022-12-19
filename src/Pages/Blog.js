import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

// import { blogsData } from '../data';

const Blog = () => {
  const {title} = useParams();
  const navigate = useNavigate();

  // const [bodyData, setBodyData] = useState('');

  // useEffect(()=> {
  //   const filtered = blogsData.filter(data => {
  //     return data.title === title;
  //   })
  //   setBodyData(filtered[0]);
  // },[])

  // console.log(bodyData);


  const myLocation = useLocation();
  console.log(myLocation);

  return (
    <div>
      <h3>{title}</h3>
      <h4>{myLocation.state.body}</h4>
      <button onClick={()=> {
        navigate('/blogs');
      }}>Go to blogs page</button>
    </div>
  )
}

export default Blog