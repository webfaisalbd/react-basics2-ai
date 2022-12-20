import React, {useState} from 'react'
import { useSearchParams } from 'react-router-dom';

const User = () => {

    const [searchQuery, setSearchQuery] = useSearchParams();

    const [user, setUser] = useState({name: '', age: ''});
    
    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        setSearchQuery({name: user.name, age: user.age});
    }
    return (
        <div>
            <h2>User</h2>

            <form onSubmit={handleSubmit}>
                <input name='name' value={user.name} onChange={handleChange} type="text" placeholder='enter name' />
                <input name='age' value={user.age} onChange={handleChange} type="number" placeholder='enter age' />
                <button type='submit'>Enter</button>
            </form>

        </div>
    )
}

export default User