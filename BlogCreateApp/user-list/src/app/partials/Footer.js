import React from 'react';

const Footer = (props) => {

    return (
        <footer>
            <div className='container'>
                <p>Last Update: {props.countTime}</p>
                <p>&copy;2018 Copyright BIT</p>
            </div>
        </footer>
    )

}

export default Footer;