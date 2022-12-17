import React from 'react'

const design = {
  display: 'grid',
  gridTemplateColumns: 'auto',
  gridGap: "20px 50px",
  backgroundColor: "#2196F3",
  padding: "10px",
  margin: "10px",
}

const Blog = ({ blog }) => {
  const { id, title, body } = blog;
  return (
    <section style={design}>
      <article>
        <p>{id}</p>
        <p>{title}</p>
        <p>{body}</p>
      </article>
    </section>
  )
}

export default Blog