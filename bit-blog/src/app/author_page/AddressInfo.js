import React from 'react';

const AddressInfo = (props) => {
    return (
        <div className="info-box">
            <div  className='author-info'>
                <h4>Address</h4>
                <p>street: {props.value.street}</p>
                <p>city: {props.value.city}</p>
                <p>zipcode: {props.value.zipcode}</p>
            </div>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11322.276616522473!2d20.45802175!3d44.80996845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1521804812315" width="300" height="200" frameBorder="0"></iframe>
        </div>
    )
}

export default AddressInfo;