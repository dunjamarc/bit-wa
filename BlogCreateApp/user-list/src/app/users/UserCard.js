import React from 'react';


const Card = (props) => {
    return (

        <div className="card">
            <div className="card-image">
                <img src={props.value.photo} alt=''/>
                <span className='card-title'>{props.value.firstName}</span>
        
            </div>
            <div className="card-content">
                <p>{props.value.email}</p>
            </div>
        </div>

    )

} 

export default Card;
