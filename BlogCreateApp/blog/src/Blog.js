import React from 'react';
import PropTypes from "prop-types";

const Blog = (props) => {
    
  return (
      <div>
          <h1>{props.titles}</h1>
          <p>{props.value.body}</p>
      </div>
  )
}

Blog.defaultProps = {
    titles: "MyName"
}
 
export default Blog;