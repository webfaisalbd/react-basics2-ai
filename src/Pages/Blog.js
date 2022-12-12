import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { blogsData } from '../data';

const Blog = () => {

    const { title } = useParams();

    const [bodyData, setBodyData] = useState('')

    useEffect(() => {
       const filteredDetail = blogsData.filter((blog) => blog.title === title)
        setBodyData(filteredDetail[0].body);
    }, [])

    return (
        <div>
            <h1>{title} Details</h1>
            <p>{bodyData}</p>
        </div>
    )
}

export default Blog