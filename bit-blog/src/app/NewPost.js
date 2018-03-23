import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

const NewPost = (props) => {
    return (
      <div className="container">
      <h2>NEW POST</h2>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <p>Title</p>
              <input id="input_text" type="text" data-length="10"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <p>Content</p>
              <textarea id="textarea1" rows="10" className="materialize-textarea" data-length="120"></textarea>
            </div>
          </div>
          <Link to='/' className="waves-effect waves-light btn">Cancel</Link>
          <Link to='/' className="waves-effect waves-light btn">Save</Link>
        </form>
      </div>
    )
}

export default NewPost;