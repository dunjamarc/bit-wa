import React from 'react';


const Card = (props) => {
    return (

        <div className="card col s6 m4">
            <div className="card-image">
                <img src={props.value.photo} alt=''/>
                <span className='card-title'>{props.value.firstName}</span>
        
            </div>
            <div className="card-content">
                <p>{props.value.mailHidden()}</p>
                <p>Birth date: {new Date(props.value.dob).getDate() +'.'+ (new Date(props.value.dob).getMonth() + 1) +'.'+ new Date(props.value.dob).getFullYear()}</p>
            </div>
        </div>

    )
} 

export default Card;
