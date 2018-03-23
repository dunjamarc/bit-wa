import React from 'react';
import { Link } from "react-router-dom";


const Post = (props) => {
    return (
        <div className="container">
            <h4>SINGLE POST TITLE 1</h4>
            <h4><Link to='/authors/:name'>Author Name</Link></h4>
            <p className="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati inventore enim debitis vel, dolore est itaque velit vero quisquam ea quasi amet, eos unde, pariatur perferendis. Ducimus accusantium laboriosam odio veniam enim, error officiis totam nesciunt facere ipsum minus ex distinctio, id quasi consequuntur eum corporis itaque dolorem ad eveniet? Ducimus ipsam quia non culpa fuga. Praesentium, ea! Vel voluptate, placeat voluptatibus nobis odit maiores eum non harum, recusandae aut libero? Consectetur, consequuntur corporis? Sit architecto fuga aperiam voluptates quaerat reiciendis voluptatem doloribus vitae officiis, labore expedita cumque eos vero, numquam eius, error nostrum veniam impedit repellendus voluptatibus nam!</p>
            <h5>3 more posts from same author</h5>
            <ul className="author-posts">
                <li><Link to='/posts/:name'>Title 10</Link></li>
                <li><Link to='/posts/:name'>Title 11</Link></li>
                <li><Link to='/posts/:name'>Title 12</Link></li>
            </ul>
        </div>
    )
}

export default Post;