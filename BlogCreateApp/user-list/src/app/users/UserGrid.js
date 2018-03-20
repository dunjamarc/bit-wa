import React from 'react';
import Card from './UserCard.js';
import List from './UserList.js';


const Grid = (props) => {
    return (
        <div className="row">
            <div className="col s12 m12">
                {props.value.map( (el, i) => 
                    <Card value={el} key={i}/>
                    // <List value={el} key={i}/>
                )}
            </div>
        </div>
    )
}

export default Grid;
