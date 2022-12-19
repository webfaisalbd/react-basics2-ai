import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {
    // const {userId} = useParams(); 

    const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
        <h2>User</h2>
        <h4>{searchParams.get('id')}</h4>
        <h4>{searchParams.get('age')}</h4>
        <h4>{searchParams.get('name')}</h4>
    </div>
  )
}

export default User