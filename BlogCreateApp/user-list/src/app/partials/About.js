import React, { Component } from 'react';
import { Link } from "react-router-dom";

const About = (props) => {

    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo center">Bit Persons</Link>
                </div>
            </nav>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odio. Nostrum laudantium neque quod dolorum, quo alias in atque illo labore enim aliquam quisquam. Magni assumenda dolore magnam cum temporibus porro adipisci, quia necessitatibus numquam accusantium ipsum nam eum nulla itaque alias inventore obcaecati dignissimos, corporis explicabo debitis, architecto delectus?</p>
            <h1>What we do</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odio. Nostrum laudantium neque quod dolorum, quo alias in atque illo labore enim aliquam quisquam. Magni assumenda dolore magnam cum temporibus porro adipisci, quia necessitatibus numquam accusantium ipsum nam eum nulla itaque alias inventore obcaecati dignissimos, corporis explicabo debitis, architecto delectus?</p>
        </div>
    )
}

export default About;