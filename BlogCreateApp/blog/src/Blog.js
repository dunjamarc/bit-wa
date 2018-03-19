import React from 'react';

const Blog = (props) => {
  return (
      <div>
          <h1>{props.value.title}</h1>
          <p>{props.value.body}</p>
      </div>
  )
}
export default Blog;