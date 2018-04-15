import React from 'react';
import { Link } from "react-router-dom";
import './App.css';


const About = (props) => {

    return (
        <React.Fragment>
            <div id="wrapper">
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo center">Bit Persons</Link>
                    </div>
                </nav>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odio. Nostrum laudantium neque quod dolorum, quo alias in atque illo labore enim aliquam quisquam. Magni assumenda dolore magnam cum temporibus porro adipisci, quia necessitatibus numquam accusantium ipsum nam eum nulla itaque alias inventore obcaecati dignissimos, corporis explicabo debitis, architecto delectus?</p>
                <h1>What we do</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odio. Nostrum laudantium neque quod dolorum, quo alias in atque illo labore enim aliquam quisquam. Magni assumenda dolore magnam cum temporibus porro adipisci, quia necessitatibus numquam accusantium ipsum nam eum nulla itaque alias inventore obcaecati dignissimos, corporis explicabo debitis, architecto delectus?</p>
                <div id="push"></div>
            </div>
            <footer>
                <div className='container'>
                    <p>&copy;2018 Copyright BIT</p>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default About;