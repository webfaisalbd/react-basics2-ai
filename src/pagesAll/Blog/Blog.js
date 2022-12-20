import { Link, useParams } from 'react-router-dom'

import { blogsData } from '../../data';

const Blog = () => {
  const { title } = useParams();

  const filteredData = blogsData.filter(blog => blog.title === title);
  console.log(filteredData[0])
  return (
    <div>
      <h2>{title}</h2>

      <p>{filteredData[0].body}</p>

      <Link to='/blogs'>Go to blogs</Link>
    </div>
  )
}

export default Blog