import React from 'react';

const Footer = (props) => {

    return (
        <footer>
            <div className='container'>
                <p>&copy;2018 Copyright BIT</p>
                <p>Last Update: {props.countTime}</p>
            </div>
        </footer>
    )

}

export default Footer;