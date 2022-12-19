import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {
    // const {userId} = useParams(); 

    const [searchParams, setSearchParams] = useSearchParams();

    const [name, setName] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ name: name, id: id })
    }

    return (
        <div>
            <h2>User</h2>

            {/* set search query parameter   */}
            <form onSubmit={handleSubmit}>
                <input type="number" value={id} onChange={(e) => {
                    setId(e.target.value)
                }} placeholder='enter id' />
                <input type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} placeholder='enter name' />
                <button type="submit">Enter</button>
            </form>

            {/* get search query parameter   */}
            <h4>{searchParams.get('id')}</h4>
            <h4>{searchParams.get('age')}</h4>
            <h4>{searchParams.get('name')}</h4>
        </div>
    )
}

export default User