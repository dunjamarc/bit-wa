import React, { Component } from 'react';


class List extends Component {

    render() {
        return (
            <ul className='collection'>
                <li className='collection-item avatar'>
                    <img src={this.props.value.photo} alt='img' className='circle'/>
                    <p>name: {this.props.value.firstName}</p>
                    <p>Email: {this.props.value.mailHidden()}</p>
                    <p>date of birth: {this.props.value.dob}</p>
                </li>
            </ul>
        )
    }
}

export default List;