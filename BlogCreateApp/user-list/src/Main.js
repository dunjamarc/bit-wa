import React, { Component } from 'react';


class Main extends Component {

    render() {
        return (
            <ul className='collection'>
                {this.props.value.map((el, i) => 
                <li className='collection-item avatar' key={ i }>
                    <img src={el.picture.thumbnail} alt='img' className='circle'/>
                    <p>name: {el.name.first}</p>
                    <p>Email: {el.email}</p>
                    <p>date of birth: {el.dob}</p>
                </li>)}
            </ul>
        )
    }
}

export default Main;
