import React from 'react';
import Card from './UserCard.js';


const Grid = (props) => {
    return (
        <div className="row">
            <div className="col s12 m6">
                {props.value.map( (el, i) => 
                    <Card value={el} key={i}/>
                )}
            </div>
        </div>
    )
}

export default Grid;
