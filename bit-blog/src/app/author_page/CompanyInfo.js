import React from 'react';

const CompanyInfo = (props) => {
    return (
        <div className="info-box">
            <h4 style={{textAlign:'left'}}>Company</h4>
            <p>name: {props.value.companyName}</p>
            <p>slogan: {props.value.catchPhrase}</p>
        </div>
    )
}

export default CompanyInfo;