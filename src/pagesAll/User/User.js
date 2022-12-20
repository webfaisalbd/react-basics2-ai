import React from 'react'
import { useSearchParams } from 'react-router-dom'

const User = () => {
const [searchQuery, setSearchQuery] = useSearchParams();
    return (
    <div>
        <h2>User</h2>

        <h3>{searchQuery.get('id')}</h3>
        <h4>{searchQuery.get('name')}</h4>

    </div>
  )
}

export default User